//import { addUser } from "../models/userModel.js";
import { successResponse, errorResponse } from "../utils/responseFormat.js";

export async function login (req, res) {
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
