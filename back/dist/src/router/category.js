"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const category_1 = require("../controller/category");
const express_1 = __importDefault(require("express"));
const category = express_1.default.Router();
exports.category = category;
category.route('/').post(category_1.createCategory).get(category_1.getAllCategories).put(category_1.updateCategoryById).delete(category_1.deleteCategoryById);
