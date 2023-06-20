import mongoose from "mongoose";

export interface ITodoModel extends mongoose.Document {
    key: string,
    text: string
}

const TodoSchema = new mongoose.Schema({
    key: {type: String, unique: true, required: true},
    text: {type: String, required: true}
});

export const Todo = mongoose.model<ITodoModel>("Todo", TodoSchema);