import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    foodId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
        require: true
    }]
})
const categoryModel = mongoose.model('category', categorySchema)
export { categoryModel }