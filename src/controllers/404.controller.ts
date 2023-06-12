import {Request, Response} from 'express';

export default function notFound(req: Request, res: Response) {
    res.json({
        'error': 'Page not found.'
    });
}