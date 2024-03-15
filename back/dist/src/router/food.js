"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.food = void 0;
const food_1 = require("../controller/food");
const express_1 = __importDefault(require("express"));
const food = express_1.default.Router();
exports.food = food;
food.route('/food').post(food_1.createFood).get(food_1.getAllFood).put(food_1.updateFoodById);
food.route('/food/:id').delete(food_1.deleteFoodById).get(food_1.getFoodId);
