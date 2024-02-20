import mongoose from "mongoose";
const OrderSchema  = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'food delivery user',
        require:true
    },
    orderNumber:Number,
    foods: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'food'
        }
      ],
    totalPrice:Number,
    process:{
        type:String,
        enum:['ordered', 'inprogress','delivered'],
        default:'inprogress'
    },
    createdDate:Date,
    district:String,
    Khoroo:String,
    Apartment:String
})
const orderModel = mongoose.model('order',OrderSchema)
export {orderModel}