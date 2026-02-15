import { addUser } from "../models/userModel.js";
import { successResponse, errorResponse } from "../utils/responseFormat.js";
import { errorHandler } from "../utils/asyncErrorHandler.js";

export async function registerUser (req, res) { 
  const {success} = await errorHandler(() => addUser(req.body))

  if (!success) {
    return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
  }

  res.status(201).send(new successResponse(true, null, "Successfully Register User"))
}

export async function login (req, res) {
  req.session.user = req.user
  res.status(200).send(new successResponse(true, null, "User Successfully Log In"))
}

export async function logout (req, res) {
  req.sessionStore.destroy(req.sessionID, (err) => {
    if (err) { 
      return res.status(500).send(new errorResponse(false, 'There is a problem destroying session', 'INTERNAL_SERVER_ERROR'))
    } 

    res.sendStatus(204)
  })
}


// req.session => get session object
// req.sessionID => get session id 
// req.session.visited = true  => make the session id permanent unless manually change