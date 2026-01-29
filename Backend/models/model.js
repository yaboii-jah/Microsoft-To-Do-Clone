import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  _id : String,
  task : String,
  category : String,
  date : Date,
  status : String
})

const tasks = mongoose.model('tasks', taskSchema)

export async function getTasks (filter = {}) {
  return await tasks.find(filter);
}

export async function addTask (task, id) {
  task['_id'] = id
  await tasks.create(task)

  return await getTasks({_id : id});
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


 