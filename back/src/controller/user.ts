
import { Request, Response } from "express";
import { userModel } from "../model/user";
import bcrypt from "bcrypt"

const createUser = async (req:Request, res:Response) => {
    try {
      const { name, email, password, phone_number,role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
        phone_number,
        role,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }; 
const getAllUsers = async (req:Request, res:Response) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user:any = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const hashedPassword = await bcrypt.compare(password, user.password);
      if (!hashedPassword) {
        return res.status(401).send("Username or password incorrect");
      }
      res.status(200).json({...user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

const updateUserById = async (req:Request, res:Response) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updatedUserData,
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error( error);
    res.status(500).json({ error });
  }
};

const deleteUserById = async (req:Request, res:Response) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error( error);
    res.status(500).json({error});
  }
};

export {
  createUser,
  getAllUsers,
login,
  updateUserById,
  deleteUserById,
};
