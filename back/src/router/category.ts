import {createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById}from "../controller/category"
import express  from "express"
const category = express.Router()
category.route('/').post(createCategory).get(getAllCategories).put(updateCategoryById).delete(deleteCategoryById)
export{category}