import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    phone_number: Number,
    avatar_img: Buffer,
    role: {
        enum: ['admin', 'user']
    }
})
const userModel = mongoose.model('food delivery user', UserSchema)
export { userModel }