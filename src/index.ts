import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import logger from "./middlewares/logger";
import Database from "./misc/db";

import indexRouter from "./routes/index.router";
import notFoundRouter from './routes/404.router';
import todoRouter from './routes/todo.router';

dotenv.config();

new Database(process.env.MONGO_URI)
    .init()
    .catch(err => console.log(err));

const app: Express = express();
// @ts-ignore

const PORT: string | number = process.env.PORT ? process.env.PORT : 8080;

app.use('*', logger);
app.use(express.json());

app.use('/', indexRouter);

app.use('/api/', todoRouter);

app.use('*', notFoundRouter);

app.listen(PORT);