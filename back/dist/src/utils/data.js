"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDataBase = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || "";
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('success');
    }
    catch (error) {
        console.log(error);
        throw new Error('unsuccess');
    }
};
exports.connectDataBase = connectDataBase;
// const createUser = async (req:Request, res:Response) => {
//     try {
//       const { name, email, password, phone_number,role } = req.body;
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new userModel({
//         name,
//         email,
//         password: hashedPassword,
//         phone_number,
//         role,
//       });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
