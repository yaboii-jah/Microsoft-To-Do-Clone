import { findUser } from '../models/userModel.js'
import { errorHandler } from '../utils/asyncErrorHandler.js'
import { errorResponse } from '../utils/responseFormat.js'

export function checkUser (req, res, next) {
    const {success, data} =  errorHandler(() => findUser({email : req.body.email}))
    
    if (!success) {
        return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
    }

    if (data) {
        return res.status(409).send(new errorResponse (false, 'Email Already Exist', 'DUPLICATION_ERROR'))
    }

    next()
}