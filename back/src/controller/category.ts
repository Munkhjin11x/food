import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, foodId } = req.body;

      const foodIdsAsObjectIds = Array.isArray(foodId)
        ? foodId.map((id: string) => new mongoose.Types.ObjectId(id))
        : [new mongoose.Types.ObjectId(foodId)];

      const existingCategory = await categoryModel.findOne({ name });

      if (existingCategory) {
        existingCategory.foodId.push(...foodIdsAsObjectIds);

        const updatedCategory = await existingCategory.save();

        res.status(200).json(updatedCategory);
      } else {
        const newCategory = await categoryModel.create({
          name,
          foodId: foodIdsAsObjectIds,
        });

        res.status(201).json(newCategory);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.find().populate("foodId");

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
