"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodId = exports.updateFoodById = exports.deleteFoodById = exports.getAllFood = exports.createFood = void 0;
const food_1 = require("../model/food");
const cloudinary_1 = require("cloudinary");
const timestamp = new Date().toISOString().replace(/:/g, '-');
const randomString = Math.random().toString(36).substring(7);
const public_id = `food_${timestamp}_${randomString}`;
cloudinary_1.v2.config({
    cloud_name: 'diya98wp7',
    api_key: '665393682697878',
    api_secret: 'yXGtzGT06vdq1qenfrW5MRC3OlI',
});
const createFood = async (req, res) => {
    try {
        const cloudinaryResponse = await cloudinary_1.v2.uploader.upload(req.body.image, {
            folder: 'foodzurg',
            public_id: public_id
        });
        const newFoodItem = await food_1.foodModel.create({
            name: req.body.name,
            ingredient: req.body.ingredient,
            price: req.body.price,
            image: cloudinaryResponse.secure_url,
            discount: req.body.discount
        });
        res.status(201).json(newFoodItem);
    }
    catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createFood = createFood;
const getAllFood = async (req, res) => {
    try {
        const allFoodItems = await food_1.foodModel.find();
        res.status(200).json(allFoodItems);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getAllFood = getAllFood;
const getFoodId = async (req, res) => {
    try {
        const foodGetId = await food_1.foodModel.findById(req.params.id);
        if (!foodGetId) {
            return res.status(404).json({ error: 'food not found' });
        }
        res.status(200).json(foodGetId);
    }
    catch (error) {
        res.status(500).json({ error: 'aldaa' });
    }
};
exports.getFoodId = getFoodId;
const updateFoodById = async (req, res) => {
    const { foodItemId } = req.params;
    try {
        const updatedFoodItem = await food_1.foodModel.findByIdAndUpdate(foodItemId, req.body, { new: true });
        if (updatedFoodItem) {
            res.status(200).json(updatedFoodItem);
        }
        else {
            res.status(404).json({ error: 'Food item not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.updateFoodById = updateFoodById;
const deleteFoodById = async (req, res) => {
    const { foodItemId } = req.params;
    try {
        const deletedFoodItem = await food_1.foodModel.findByIdAndDelete(foodItemId);
        console.log('Deleted Food Item:', deletedFoodItem);
        if (deletedFoodItem) {
            res.status(200).json(deletedFoodItem);
        }
        else {
            console.log('Food item not found');
            res.status(404).json({ error: 'Food item not found' });
        }
    }
    catch (error) {
        console.error('Error deleting food item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.deleteFoodById = deleteFoodById;
