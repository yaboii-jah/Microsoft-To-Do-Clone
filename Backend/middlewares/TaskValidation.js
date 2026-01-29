import { getTasks } from "../models/model.js"
import { errorResponse } from "../utils/responseFormat.js";

export function bodyValidator (req, res, next) { 
  if (req.body.task === '') { 
    return res.status(422).send(new errorResponse(false, 'Request body is null', 'NO_DATA_INPUT'));
  }

  next();
}

export async function dataEqualityChecker (req, res, next) {
  const task = await getTasks({_id : req.params.id});
  console.log(task)
  if (task.length === 0) { 
    return res.status(404).send(new errorResponse(false, 'Data not Found', 'NOT_FOUND'));
  } 

  req.task = task;
  next();
}
