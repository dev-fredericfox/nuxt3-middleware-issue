import type { IncomingMessage, ServerResponse } from 'http'
import { useCookie } from 'h3';

export default async (req: IncomingMessage, res: ServerResponse,next) => {
    if (req.url.includes('/api/privateEndpoint')) {
    console.log(req.headers.cookie)
    const token = useCookie(req, 'test');
    console.log(token)
    const message = `I am the middleware. My received cookie is: ${token}`
    res.end(message)
    }
    next()
}