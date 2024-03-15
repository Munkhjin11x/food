"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    userid: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'food delivery user',
        require: true
    },
    orderNumber: Number,
    foods: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'food'
        }
    ],
    totalPrice: Number,
    process: {
        type: String,
        enum: ['waiting', 'inprogress', 'delivered'],
        default: 'inprogress'
    },
    createdDate: Date,
    district: String,
    khoroo: String,
    apartment: String,
    phone: Number,
    desc: String,
    payment: {
        type: String,
        enum: ['Not Paid', 'Paid'],
        default: 'Not Paid'
    }
});
const orderModel = mongoose_1.default.model('order', OrderSchema);
exports.orderModel = orderModel;
