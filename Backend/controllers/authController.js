import { addUser } from "../models/userModel.js";

export async function registerUser (req, res) { 
  await addUser(req.body)

  res.status(204).send({success : true})
}