import { addUser, checkUser } from "../models/userModel.js";

export async function registerUser (req, res) { 
  await addUser(req.body)
  res.status(204).send({success : true})
}

export async function login (req, res) {
  const result = await checkUser(req.body)
   
  if (!result) { 
    return  res.status(404).send({success : false})
  }

 
}
