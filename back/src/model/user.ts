import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    phone_number: Number,
    avatar_img: Buffer,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})
const userModel = mongoose.model('food delivery user', UserSchema)
export { userModel }