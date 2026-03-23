import { successResponse, errorResponse } from "../utils/responseFormat.js";

export function login (req, res) {
  res.status(200).send(new successResponse(true, null, "User Successfully Log In"))
}

export function logout (req, res) {
  req.sessionStore.destroy((err) => {
    if (err) { 
      return res.status(500).send(new errorResponse(false, 'There is a problem destroying session', 'INTERNAL_SERVER_ERROR'))
    }
    res.clearCookie('connect.sid')
    res.sendStatus(204)
  })
}
