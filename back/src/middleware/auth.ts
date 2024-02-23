import { NextFunction, Request, Response } from "express";
import { generateToken } from "./auth1";
import { userModel } from "../model/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key'

const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, phone_number, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone_number,
      role,
    });
    const savedUser = await newUser.save();

    const token = generateToken(savedUser._id);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (typeof password !== 'string') {
      return res.status(500).json({ message: 'Invalid password format' });
    }

    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { loginMiddleware, createUserMiddleware };