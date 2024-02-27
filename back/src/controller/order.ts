
import { Request, Response } from "express";
import { orderModel } from "../model/order";
const createOrder = async (req: Request, res: Response) => {
    try {
        const newOrder = await orderModel.create(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error });
    }
};
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderModel.find().populate('userid');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const order = await orderModel.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error });
    }
};


const updateOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedOrder = await orderModel.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error });
    }
};


const getOrderByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const orders = await orderModel.find({ userid: userId }).populate('foods');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder, getOrderByUserId }
