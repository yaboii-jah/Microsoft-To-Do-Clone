import { addUser } from "../models/userModel.js";

export async function registerUser (req, res) { 
  await addUser(req.body)
  res.status(204).send({success : true})
}

export async function login (req, res) {
  req.session.visited = true
  req.session.user = req.user
  console.log(req.sessionID)
  res.status(200).send({success : true})
}


// req.session => get session object
// req.sessionID => get session id 
// req.session.visited = true  => make the session id permanent unless manually change