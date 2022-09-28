import mongoose from "mongoose";
import { ITicket } from './InterfaceTicket'

const ticketSchema = new mongoose.Schema<ITicket>({
    event: {type: String, required: true},
    price: {type: Number, required: true},
    eventDate: {type: Date, required: true},
    local: {type: String, required: true},
    purchaseDate: {type: Date},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
})

export default mongoose.model("Ticket", ticketSchema)