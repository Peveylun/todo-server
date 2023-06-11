import mongoose from "mongoose";

export interface IIndexModel extends mongoose.Document {
    key: string,
    message: string
}

const indexSchema = new mongoose.Schema({
    key: {type: String, unique: true},
    message: String
});

export const Index = mongoose.model<IIndexModel>("Index", indexSchema);