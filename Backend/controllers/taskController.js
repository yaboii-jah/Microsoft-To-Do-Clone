import { tasks} from "../models/taskModel.js"
import { successResponse, errorResponse } from "../utils/responseFormat.js";
import { errorHandler } from "../utils/asyncErrorHandler.js";
import { matchedData } from 'express-validator'; 

export async function createTask (req, res) {
  const validatedData = matchedData(req)
  validatedData['userID'] = req.user[0]._id;

  const { success, data} = await errorHandler(() => tasks.create(validatedData))
  
  if (!success) {
    return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
  }
  return res.status(201).send(new successResponse(true, data, 'Successfully Added Data'))
}

export async function deleteTask (req, res) {
  const { id } = matchedData(req)
  const { success} = await errorHandler(() => tasks.deleteOne({_id : id}))
  
  if (!success) {
    return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
  }

  return res.status(204).send();
}

export async function updateTask (req, res) {
  const {success} = await errorHandler(() => tasks.updateOne(
      { _id : req.body },
      { $set : req.params}
  ))

  if (!success) {
    return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
  }
  return res.status(204).send();
}

export async function listTasks (req, res) {
  const {success, data} = await errorHandler(() => tasks.find({}))

  if(!success) {
    return res.status(500).send(new errorResponse(false, 'There is a problem with the server', 'INTERNAL_SERVER_ERROR'))
  }
  return res.status(200).send(new successResponse(true, data, 'Data Retrieved Successfully'))
}
