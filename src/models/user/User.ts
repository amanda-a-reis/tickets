import mongoose from "mongoose";
import { IUser } from "./InterfaceUser";

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true, maxLength: 50 },
    email: {type: String, required: true, unique: true, maxlength: 50},
    password: {type: String, required: true, maxlength: 200, minlength: 50},
    phone: {type: String, maxlength: 11, minlength: 11},
    address: {type: String, maxlength: 50},
    creditCard: {type: String, maxlength: 16, minlength: 13},
    createdAt: {type: Date, required: true},
})

export default mongoose.model('User', userSchema)