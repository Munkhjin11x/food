import mongoose  from "mongoose";
const foodSchema = new mongoose.Schema({
    name:String,
    image:String,
    ingeredient:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    }
})
const foodModel = mongoose.model('food',foodSchema)
export {foodModel}