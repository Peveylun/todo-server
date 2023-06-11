import {Router, Request, Response} from 'express';
import indexController from '../controllers/index.controller';

const indexRouter: Router = Router();

indexRouter.route('/')
    .get(indexController.get);

export default indexRouter;