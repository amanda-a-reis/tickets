import mongoose from "mongoose";

export interface ITicket {
    event: string,
    price: number,
    eventDate: Date,
    local: string,
    purchaseDate?: Date,
    owner?: mongoose.Types.ObjectId,
}