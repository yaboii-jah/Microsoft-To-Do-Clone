import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  task : String,
  category : String,
  date : Date,
  status : String
})

const tasks = mongoose.model('tasks', taskSchema)

export async function getTasks (filter = {}) {
  return await tasks.find(filter);
}

export async function addTask (task) {
  const date = new Date(task.date)
  
  const taskToBeAdded = {
    task : task.task,
    category : task.category,
    date : date,
    status : task.status
  }

  await tasks.create(taskToBeAdded)

  return await getTasks(taskToBeAdded);
};

export async function checkForEquality (taskToCheck) { 
  return await tasks.find({task: taskToCheck.task})
}

export async function findTask (id) { 
  return await tasks.findById({_id : id})
}

export async function removeTask (id) {
  await tasks.deleteOne({_id : id})
}

export async function updateTask (updatedTask, id) { 
  await tasks.updateOne(
    { _id : id },
    { $set : updatedTask}
  )
}

export async function filterTask (filters) {
  return await tasks.find(filters)
}

 