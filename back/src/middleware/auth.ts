import { NextFunction, Request, Response } from "express";
import { generateToken } from "./auth1";
import { userModel } from "../model/user"; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const createUserMiddleware = async (req:Request, res:Response, next:NextFunction) => {
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
const loginMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const hashedPassword = await bcrypt.compare(password, user.password);
      if (!hashedPassword) {
        return res.status(401).send("Username or password incorrect");
      }
     
      const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' });

      res.locals.token = token; 
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
 export{ loginMiddleware ,createUserMiddleware };