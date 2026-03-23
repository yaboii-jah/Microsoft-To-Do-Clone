import { tasks } from "../models/taskModel.js"
import { errorResponse } from "../utils/responseFormat.js";
import { validationResult } from "express-validator";

export function bodyValidator (req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return res.status(422).send(new errorResponse(false, 'Request body is empty', 'NO_DATA_INPUT'));
  }

  next();
}

export async function dataEqualityChecker (req, res, next) {
  try {
    const result = tasks.findById(req.params.id)

    if(!result) {
      return res.status(404).send(new errorResponse(false, 'Data not found in the database', 'NOT_FOUND'))
    }
    
    next()
  } catch (error) {
    console.error(error)
    return res.status(500).send(new errorResponse(false, 'There is a problem checking data', 'INTERNAL_SERVER_ERROR'))
  }

}

export function validationResultChecker(req, res, next) { 
  const error = validationResult(req)
 
  if (error.isEmpty()) {
    return next();
  }

 const formattedErrors = error.array().reduce((acc, currentError) => {
    if (!acc[currentError.path]) {
      acc[currentError.path] = [];
    }

    acc[currentError.path].push(currentError.msg);
    return acc;
  }, {}); 

  return res.status(400).send(new errorResponse(false, formattedErrors, 'Bad Request'))
}