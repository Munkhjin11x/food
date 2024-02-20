import express from 'express';


import { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../controller/order';

const order = express.Router();
order.route('/order').post(createOrder).get(getAllOrders)
order.route('order/:id').get(getOrderById).put(updateOrder).delete(deleteOrder)
export { order};
