import {Request, Response} from 'express';
import {Todo} from "../models/todo.model";

export default {
    create: async (req: Request, res: Response) => {
        const todo = new Todo(req.body);

        await todo.save();
        res.json(todo);
    },
    read: async (req: Request, res: Response) => {
        const todos = await Todo.find({});

        res.send(todos);
    },
    update: async (req: Request, res: Response) => {
        await Todo.findOneAndUpdate({key: req.query.key}, {text: req.body.text});

        res.json({
            message: 'Updated'
        });
    },
    delete: async (req: Request, res: Response) => {
        await Todo.find({key: req.body.key}).deleteOne();

        console.log(req.body.key);

        res.json({
            message: 'Deleted'
        });
    }
}