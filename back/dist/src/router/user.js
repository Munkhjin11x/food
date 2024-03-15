"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const user = express_1.default.Router();
exports.user = user;
user.route('/').get(user_1.getAllUsers).post(user_1.createUser);
user.route('/user').post(user_1.login).put(user_1.updateUserById).delete(user_1.deleteUserById);
