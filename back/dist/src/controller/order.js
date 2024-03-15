"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderByUserId = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const order_1 = require("../model/order");
const createOrder = async (req, res) => {
    try {
        const newOrder = await order_1.orderModel.create(req.body);
        res.status(201).json(newOrder);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.createOrder = createOrder;
const getAllOrders = async (req, res) => {
    try {
        const orders = await order_1.orderModel.find().populate('userid').populate('foods');
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.getAllOrders = getAllOrders;
const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await order_1.orderModel.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.getOrderById = getOrderById;
const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedOrder = await order_1.orderModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOrder = await order_1.orderModel.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.deleteOrder = deleteOrder;
const getOrderByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await order_1.orderModel.find({ userid: userId }).populate('foods');
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.getOrderByUserId = getOrderByUserId;
