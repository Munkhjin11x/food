import express from "express";
import {
    createUser,
    getAllUsers,
    login,
    updateUserById,
    deleteUserById,
} from "../controller/user";
const user = express.Router()
user.route('/').get(getAllUsers).post(createUser)
user.route('/user').post(login).put(updateUserById).delete(deleteUserById)
export { user }