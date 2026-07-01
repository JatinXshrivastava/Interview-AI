import mongoose from "mongoose";

const tokenBlackListSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    })

export const tokenBlackListModel = mongoose.model("blacklistToken" , tokenBlackListSchema )