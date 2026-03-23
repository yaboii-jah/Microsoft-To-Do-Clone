import { errorResponse } from '../utils/responseFormat.js'

export function sessionStatus (req, res, next) {
    if (!req.user) {
       return res.status(401).send(new errorResponse(false, 'User is not authorized', 'UNAUTHORIZED_ERROR'))
    }
    next()
}