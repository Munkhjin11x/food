"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const express_1 = __importDefault(require("express"));
const order_1 = require("../controller/order");
const order = express_1.default.Router();
exports.order = order;
order.route('/order').post(order_1.createOrder).get(order_1.getAllOrders);
order.route('/order/:id').get(order_1.getOrderById).put(order_1.updateOrder).delete(order_1.deleteOrder);
order.route('/userOrder/:userId').get(order_1.getOrderByUserId);
