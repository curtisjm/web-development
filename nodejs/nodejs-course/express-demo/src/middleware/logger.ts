import { Request, Response } from 'express'

export default function log(req: Request, res: Response, next: () => void) {
    console.log('Logging...')
    next()
}
