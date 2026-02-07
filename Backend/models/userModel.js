import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  username : String,
  password : String,
  date : Date,
  status : String
})

const users = mongoose.model('users', userSchema)

export async function addUser (user) {
  return await users.create(user);
}

