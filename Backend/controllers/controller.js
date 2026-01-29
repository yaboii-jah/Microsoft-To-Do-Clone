import { addTask, removeTask, getTasks, updateTask as update} from "../models/model.js"
import { randomUUID } from 'node:crypto';
import { successResponse } from "../utils/responseFormat.js";

export async function createTask (req, res) {
  const taskID = randomUUID()
  const addedTask = await addTask(req.body, taskID)
  res.status(201).send(new successResponse(true, addedTask, 'Successfully Added Data'))
}

export async function deleteTask (req, res) {
  await removeTask(req.params.id)
  res.status(204).send(new successResponse(true, '', 'Data Deleted Successfully'));
}

export async function updateTask (req, res) {
  await update(req.body, req.params.id)
  res.status(204).send(new successResponse(true, '', 'Data Updated Successfully'))
}

export async function listTasks (req, res) {
  const tasks = await getTasks()
  return res.status(200).send(new successResponse(true, tasks, 'Data Retrieved Successfully'))
}