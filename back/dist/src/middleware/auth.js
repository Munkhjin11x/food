"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserMiddleware = exports.loginMiddleware = void 0;
const auth1_1 = require("./auth1");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';
const createUserMiddleware = async (req, res, next) => {
    try {
        const { name, email, password, phone_number, role } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = new user_1.userModel({
            name,
            email,
            password: hashedPassword,
            phone_number,
            role,
        });
        const savedUser = await newUser.save();
        const token = (0, auth1_1.generateToken)(savedUser._id);
        res.status(201).json({ user: savedUser, token });
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createUserMiddleware = createUserMiddleware;
const loginMiddleware = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (typeof password !== 'string') {
            return res.status(500).json({ message: 'Invalid password format' });
        }
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.loginMiddleware = loginMiddleware;
