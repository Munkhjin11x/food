import {
    createFood,
    getAllFood,
    deleteFoodById,
    updateFoodById, getFoodId
} from "../controller/food";
import express from "express";
const food = express.Router()
food.route('/food').post(createFood).get(getAllFood).put(updateFoodById).delete(deleteFoodById)
food.get('/food/:id', getFoodId)
export { food }