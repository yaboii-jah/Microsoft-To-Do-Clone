import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  userName : String,
  password : String,
  email : String,
  date : Date,
  status : String
})

const users = mongoose.model('users', userSchema)

export async function addUser (user) {
  return await users.create(user);
}

export async function checkUser (user) {
  return await users.findOne(user)
}

