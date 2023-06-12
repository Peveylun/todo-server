import {Request, Response, Router} from "express";
import notFoundController from '../controllers/404.controller';

const notFoundRouter: Router = Router();

notFoundRouter.route('*').get(notFoundController)

export default notFoundRouter;