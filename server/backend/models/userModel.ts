import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 email : String,
 username : String,
 googleId : String,
 avatar : String
})

export const users = mongoose.model('users', userSchema)