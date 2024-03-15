"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.login = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';
const createUser = async (req, res) => {
    try {
        await (0, auth_1.createUserMiddleware)(req, res, () => { });
    }
    catch (error) {
        console.error('Error in createUserController:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await user_1.userModel.find();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllUsers = getAllUsers;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_1.userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const hashedPassword = await bcrypt_1.default.compare(password, user.password);
        if (!hashedPassword) {
            return res.status(401).send("Username or password incorrect");
        }
        const payload = {
            email: user.email,
            role: user.role,
            id: user._id
        };
        const token = jsonwebtoken_1.default.sign({ payload }, SECRET_KEY, { expiresIn: '1hr' });
        res.status(200).json({ token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.login = login;
const updateUserById = async (req, res) => {
    const userId = req.params.userId;
    const updatedUserData = req.body;
    try {
        const updatedUser = await user_1.userModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
        if (updatedUser) {
            res.status(200).json(updatedUser);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = async (req, res) => {
    const userId = req.params.userId;
    try {
        const deletedUser = await user_1.userModel.findByIdAndDelete(userId);
        if (deletedUser) {
            res.status(200).json(deletedUser);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};
exports.deleteUserById = deleteUserById;
