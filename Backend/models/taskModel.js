import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  task : String,
  category : String,
  date : Date,
  status : String
})

// implement a proper error handling for process that requires sending request to an api/database

const tasks = mongoose.model('tasks', taskSchema)

export async function getTasks (filter = {}) {
  return await tasks.find(filter);
}

export async function addTask (task) {
  const result = await tasks.create(task)

  return result;
};

export async function removeTask (id) {
  await tasks.deleteOne({_id : id})
}

export async function updateTask (updatedTask, id) { 
  await tasks.updateOne(
    { _id : id },
    { $set : updatedTask}
  )
}


 