import { successResponse, errorResponse } from "../utils/responseFormat";
import { Request, Response } from "express";

export function login (req : Request, res : Response) {

  res.redirect('http://localhost:5173/tasks/myday')
}

export function logout (req : Request, res : Response) {
  req.session.destroy((err) => {
    if (err) {  
      return res.status(500).send(new errorResponse(false, 'There is a problem destroying session', 'INTERNAL_SERVER_ERROR'))
    }
  
    res.clearCookie('connect.sid')
    return res.sendStatus(204)
  })
}




