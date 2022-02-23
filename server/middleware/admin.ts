import * as functions from 'firebase-functions';
import type { IncomingMessage, ServerResponse } from 'http'
import { useCookie } from 'h3';

export default async (req: IncomingMessage, res: ServerResponse,next) => {
    if (req.url.includes('/api/privateEndpoint')) {
    const token = useCookie(req, 'test');
    const message = `I am the middleware. My received cookie is: ${token}`
    
    console.log(req.headers.cookie)
    console.log(token)
    functions.logger.log('header cookie',req.headers.cookie);
    functions.logger.log('Token:',token);

    res.end(message)
    }
    next()
}