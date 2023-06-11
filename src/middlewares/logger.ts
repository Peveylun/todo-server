import {Request, Response} from 'express';

export default function logger(req: Request, res: Response, next: any) {
    console.log(`Request url: ${req.protocol + '://' + req.get('host') + req.originalUrl}`);
    next();
}