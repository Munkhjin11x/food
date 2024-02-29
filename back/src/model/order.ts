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
        enum:['waiting', 'inprogress','delivered'],
        default:'inprogress'
    },  
    createdDate:Date,
    district:String,
    khoroo:String,
    apartment:String,
    phone:Number,
    desc:String,
    payment:{
      type:String,
      enum:['Not Paid', 'Paid'],
      default:'Not Paid'
    }
})
const orderModel = mongoose.model('order',OrderSchema)
export {orderModel}