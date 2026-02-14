import { findUser } from '../models/userModel.js'
import { errorHandler } from '../utils/asyncErrorHandler.js'
import { errorResponse } from '../utils/responseFormat.js'

export async function checkUser (req, res, next) {
    const {success, data} = await errorHandler(() => findUser({email : req.body.email}))
    
    if (!success) {
        return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
    }

    if (data) {
        return res.status(409).send(new errorResponse (false, 'Email Already Exist', 'DUPLICATION_ERROR'))
    }

    next()
}

export async function checkCredentials (req, res, next) { 
    const {success, data} = await errorHandler(() => findUser(req.body))
    
    if (!success) {
        return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
    }

    if (!data) {
        return res.status(401).send(new errorResponse (false, 'Invalid Credentials', 'UNAUTHORIZED_ERROR'))
    }

    req.user = data;
    next()
}

export function sessionStatus (req, res, next) {
    if (!req.session.user) {
       return res.status(401).send(new errorResponse(false, 'User is not authorized', 'UNAUTHORIZED_ERROR'))
    }
    console.log(req.session)
    console.log(req.sessionID)

    next()
}