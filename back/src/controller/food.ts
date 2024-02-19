import { Request, Response } from "express";
import { foodModel } from "../model/food";
import {v2 as cloudinary} from 'cloudinary';
const timestamp = new Date().toISOString().replace(/:/g, '-');
const randomString = Math.random().toString(36).substring(7);
const public_id = `food_${timestamp}_${randomString}`;
          
cloudinary.config({
    cloud_name: 'diya98wp7',
    api_key: '665393682697878',
    api_secret: 'yXGtzGT06vdq1qenfrW5MRC3OlI',
  });
  const createFood = async (req: Request, res: Response) => {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(req.body.image, {
        folder: 'foodzurg',
        public_id: public_id
      });
      const newFoodItem = await foodModel.create({
        name: req.body.name,
        ingredient: req.body.ingredient,
        price: req.body.price,
        image: cloudinaryResponse.secure_url,
        discount:req.body.discount
      });
      res.status(201).json(newFoodItem);
    } catch (error) {
      console.error('Error creating food item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const getAllFood = async (req: Request, res: Response) => {
    try {
      const allFoodItems = await foodModel.find();
      res.status(200).json(allFoodItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const getFoodId = async (req: Request, res: Response)=>{
    try {
      const foodGetId = await foodModel.findById(req.params.id)                         
      if (!foodGetId) {
        return res.status(404).json({error:'food not found'})
      }
      res.status(200).json(foodGetId)
    } catch ( error) {
      res.status(500).json({error:'aldaa'})
    }
  }
  const updateFoodById = async (req: Request, res: Response) => {
    const { foodItemId } = req.params;
    try {
      const updatedFoodItem = await foodModel.findByIdAndUpdate(
        foodItemId,
        req.body,
        { new: true }
      );
      if (updatedFoodItem) {
        res.status(200).json(updatedFoodItem);
      } else {
        res.status(404).json({ error: 'Food item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteFoodById = async (req: Request, res: Response) => {
    const { foodItemId } = req.params;
    try {
      const deletedFoodItem = await foodModel.findByIdAndDelete(foodItemId);
      console.log('Deleted Food Item:', deletedFoodItem);
  
      if (deletedFoodItem) {
        res.status(200).json(deletedFoodItem);
      } else {
        console.log('Food item not found');
        res.status(404).json({ error: 'Food item not found' });
      }
    } catch (error) {
      console.error('Error deleting food item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
 export {createFood,getAllFood,deleteFoodById,updateFoodById,getFoodId}