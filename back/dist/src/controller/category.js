"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const category_1 = require("../model/category");
const mongoose_1 = __importDefault(require("mongoose"));
const createCategory = async (req, res) => {
    try {
        const { name, foodId } = req.body;
        const foodIdsAsObjectIds = Array.isArray(foodId)
            ? foodId.map((id) => new mongoose_1.default.Types.ObjectId(id))
            : [new mongoose_1.default.Types.ObjectId(foodId)];
        const existingCategory = await category_1.categoryModel.findOne({ name });
        if (existingCategory) {
            existingCategory.foodId.push(...foodIdsAsObjectIds);
            const updatedCategory = await existingCategory.save();
            res.status(200).json(updatedCategory);
        }
        else {
            const newCategory = await category_1.categoryModel.create({
                name,
                foodId: foodIdsAsObjectIds,
            });
            res.status(201).json(newCategory);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
exports.createCategory = createCategory;
const getAllCategories = async (req, res) => {
    try {
        const categories = await category_1.categoryModel.find().populate("foodId");
        res.status(200).json(categories);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllCategories = getAllCategories;
const getCategoryById = async (req, res) => {
    try {
        const category = await category_1.categoryModel.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getCategoryById = getCategoryById;
const updateCategoryById = async (req, res) => {
    try {
        const updatedCategory = await category_1.categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(updatedCategory);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.updateCategoryById = updateCategoryById;
const deleteCategoryById = async (req, res) => {
    try {
        const deletedCategory = await category_1.categoryModel.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(204).json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.deleteCategoryById = deleteCategoryById;
