import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:String,
    foodId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'food',
        require:true
    }
})