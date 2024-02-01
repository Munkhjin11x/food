import { createFood,
getAllFood ,
deleteFoodById,
updateFoodById} from "../controller/food"; 
import express from "express";
const food = express.Router()
food.route('/food').post(createFood).get(getAllFood).put(updateFoodById).delete(deleteFoodById)
export {food}