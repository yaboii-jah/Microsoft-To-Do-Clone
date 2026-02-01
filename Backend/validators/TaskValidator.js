import { param, body } from 'express-validator'; 
import { errorResponse } from '../utils/responseFormat.js';

export const addTaskValidator =  { 
  task : 
    body('task')
      .exists().withMessage('Task Field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Task'),

  category : 
    body('category')
      .exists().withMessage('Category Field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Category')
      .isString().withMessage('Category must be String'),

  date : 
    body('date')
      .exists().withMessage('Date Field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Date')
      .isISO8601().withMessage('Date must be in ISO8601'),

  status : 
    body('status')
      .exists().withMessage('Status Field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Status')
      .isString().withMessage('Status must be String')
}

export const routeParamsTaskValidator = [
  param('id')
    .exists().withMessage('Please Provide ID')
    .trim()
    .isMongoId().withMessage('Please Provide a Valid MongoID')
]

export async function updateTaskValidator (req, res, next) {
  const fields = Object.keys(req.body);
  
  const validators = []

  for (const field of fields) {
    validators.push(addTaskValidator[field])
  }

  if (validators.length === 0) { 
    return res.status(422).send(new errorResponse(false, 'Invalid fields to Update', 'NO_VALID_FIELDS'))
  }
  
  for (const validator of validators) {
    await validator.run(req)
  }

  next()
}
