"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    phone_number: Number,
    avatar_img: Buffer,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});
const userModel = mongoose_1.default.model('food delivery user', UserSchema);
exports.userModel = userModel;
