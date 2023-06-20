import {Request, Response, Router} from 'express';
import todoController from "../controllers/todo.controller";
const todoRouter: Router = Router();

todoRouter.get('/', (req: Request, res: Response) => {
        todoController.read(req, res)
            .catch(e => console.log(e));
    })
    .post('/', (req: Request, res: Response) => {
        todoController.create(req, res)
            .catch(e => console.log(e));
    })
    .put('/', (req: Request, res: Response) => {
        todoController.update(req, res)
            .catch(e => console.log(e));
    })
    .delete('/', (req: Request, res: Response) => {
        todoController.delete(req, res)
            .catch(e => console.log(e));
    });

export default todoRouter