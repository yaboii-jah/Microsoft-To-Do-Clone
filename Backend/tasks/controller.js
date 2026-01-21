import { addTask, removeTask, getTasks, updateTask as update, filterTask} from "./model.js"
import { randomUUID } from 'node:crypto';

export async function createTask (req, res) {
  if (req.body.task === '') { 
    return res.status(422).send('No Data Input')
  }

  const taskID = randomUUID()
  console.log(taskID)
  res.send(await addTask(req.body, taskID))
}

export async function deleteTask (req, res) {
  const task = await getTasks({_id : req.params.id})
 
  if (task.length === 0) { 
    return res.status(404).send('Not Found')
  } 

  res.send(await removeTask(req.params.id));
}

export async function updateTask (req, res) {
  if (req.body.task === '') { 
    return res.status(422).send('No Data Input')
  }

  const task = await getTasks({_id : req.params.id})

  if (task.length === 0) { 
    return res.status(404).send('Not Found')
  } 
   
  res.send(await update(req.body, req.params.id))
}

export async function listTasks (req, res) {
  if (Object.keys(req.query).length !== 0) {
    const filteredTask = await filterTask(req.query)

    if (filteredTask.length !== 0) {
      return res.send(filteredTask)
    }
    return res.status(404).send('Not Found')
  }

  res.send(await getTasks())
}