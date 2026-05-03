import { tasks} from "../models/taskModel.js"
import { successResponse, errorResponse } from "../utils/responseFormat.js";
import { Request, Response } from "express";
import { matchedData } from 'express-validator'; 

export async function createTask (req: Request, res: Response) {
  const validatedData = matchedData(req)
  const finalizedData = {
    ...validatedData,
    ['userID'] : req.user?._id
  }
  
  try {
    const result = await tasks.create(finalizedData)
    return res.status(201).send(new successResponse(true, result, 'Successfully created data'))

  } catch (error) {
    console.error(error)
    return res.status(500).send(new errorResponse(false, 'There is a problem with creating data', 'INTERNAL_SERVER_ERROR'))
  }
}

export async function deleteTask (req: Request, res: Response) {
  const { id } = matchedData(req)

  try {
    await tasks.deleteOne({_id : id})
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(500).send(new errorResponse(false, 'There is a problem with deleting data', 'INTERNAL_SERVER_ERROR'))
  }
}

export async function updateTask (req: Request, res: Response) {
  try {
    const result = await tasks.findOneAndUpdate(
      { _id : req.params.id },
      { $set : req.body},
      { new : true}
    )

    if (!result) {
      return res.status(404).send(new errorResponse(false, 'Data not found', 'NOT_FOUND'))
    }

    return res.status(200).send(new successResponse(true, result, 'Successfully updated data'))

  } catch (error) {
    console.error(error)
    return res.status(500).send(new errorResponse(false, 'There is a problem with updating data', 'INTERNAL_SERVER_ERROR'))
  }
}

export async function listTasks (req: Request, res: Response) {
  try {
    const result = await tasks.find({})
    
    if (result.length === 0 ) return res.status(200).send(new successResponse(false, null, 'Cannot find any data'))

    return res.status(200).send(new successResponse(true, result, 'Successfully retrieved data'))

  } catch (error) {
    console.error(error)
    return res.status(500).send(new errorResponse(false, 'There is a problem with retrieving data', 'INTERNAL_SERVER_ERROR'))
  }
}
