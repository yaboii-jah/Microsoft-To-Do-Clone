import { successResponse, errorResponse } from "../utils/responseFormat.js";

export function login (req, res) {
  res.redirect('http://localhost:5173/tasks/myday')
}

export function logout (req, res) {
  req.session.destroy((err) => {
    if (err) { 
      return res.status(500).send(new errorResponse(false, 'There is a problem destroying session', 'INTERNAL_SERVER_ERROR'))
    }
  
    res.clearCookie('connect.sid')
    return res.sendStatus(204)
  })
}




