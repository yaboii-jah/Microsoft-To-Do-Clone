import { errorResponse } from '../utils/responseFormat'
import { Response, Request, NextFunction } from 'express'

export function sessionStatus (req : Request, res : Response, next : NextFunction) {
    if (!req.user) {
       return res.status(401).send(new errorResponse(false, 'User is not authorized', 'UNAUTHORIZED_ERROR'))
    }

    next()
}