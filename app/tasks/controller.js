import { addTask, removeTask, getTasks, checkForEquality, findTask, updateTask as update, filterTask} from "./model.js"

export async function createTask (req, res) { 
  const task = await checkForEquality(req.body)

  if (task.length !== 0) {
    return res.status(409).send('Duplicate Data')
  }

  if (req.body.task === '') { 
    return res.status(422).send('No Data Input')
  } 

  res.send(await addTask(req.body))
}

export async function deleteTask (req, res) {
  const task = await findTask(req.params.id)
 
  if (task.length === 0) { 
    return res.status(404).send('Not Found')
  } 

  res.send(await removeTask(req.params.id));
}

export async function updateTask (req, res) {
  const task = await findTask(req.params.id)

  if (task.length === 0) { 
    return res.status(404).send('Not Found')
  } 
   
  res.send(await update(req.body, req.params.id))
}

export async function listTasks (req, res) {
  if (req.query) {
    const filteredTask = await filterTask(req.query)

    if (filteredTask.length !== 0) {
      return res.send(filteredTask)
    }

    return res.status(404).send('Not Found')
  }

  res.send(await getTasks())
}