import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  userID : String,
  task : String,
  category : String,
  date : Date,
  status : String
})

export const tasks = mongoose.model('tasks', taskSchema)




 