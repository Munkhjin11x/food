import mongoose from "mongoose";
const OrderSchema  = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'food delivery user',
        require:true
    },
    orderNumber:Number,
    foods:Array,
    totalPrice:Number,
    process:{
        enum:['ordered', 'inprogress','delivered']
    },
    createdDate:Date,
    district:String,
    Khoroo:String,
    Apartment:String
})
const orderModel = mongoose.model('order',OrderSchema)
export {orderModel}