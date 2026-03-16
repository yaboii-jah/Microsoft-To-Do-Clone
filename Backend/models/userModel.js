import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  userName : String,
  password : String,
  email : String,
  googleId : String,
  avatar : String,
  date : Date,
  status : String
})

export const users = mongoose.model('users', userSchema)

export async function addUser (user) {
  return await users.create(user);
}

export async function findUser (user) {
  return await users.findOne(user)
}

