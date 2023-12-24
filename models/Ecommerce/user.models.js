import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model("User", Schema);