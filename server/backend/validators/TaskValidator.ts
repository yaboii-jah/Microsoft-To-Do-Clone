import { param, body, ValidationChain } from 'express-validator'; 
import { errorResponse } from '../utils/responseFormat.js';
import { Request, Response, NextFunction } from 'express';

export const addTaskValidator =  { 
  task : 
    body('task')
      .exists({ checkFalsy: true }).withMessage('Task Field don\'t exist')
      .isString().withMessage('Task must be a string')
      .trim()
      .notEmpty().withMessage('Invalid Value on Task'),

  category : 
    body('category')
      .exists({ checkFalsy: true }).withMessage('Category Field don\'t exist')
      .isString().withMessage('Category must be String') 
      .trim()
      .notEmpty().withMessage('Invalid Value on Category'),

  date : 
    body('date')
      .exists({ checkFalsy: true }).withMessage('Date Field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Date')
      .isISO8601().withMessage('Date must be in ISO8601'),

  status : 
    body('status')
      .exists({ checkFalsy: true }).withMessage('Status Field don\'t exist')
      .isIn(['Pending', 'Completed'])
      .trim()
      .notEmpty().withMessage('Invalid Value on Status')
}

export const routeParamsTaskValidator = [
  param('id')
    .trim()
    .isMongoId().withMessage('Please Provide a Valid MongoID')
]

export async function updateTaskValidator (req: Request, res: Response, next: NextFunction) {
  const fields = Object.keys(req.body) as Array<keyof typeof addTaskValidator>
  
  const validators : ValidationChain[] = []

  for (const field of fields) {
    if (field in addTaskValidator) {
      validators.push(addTaskValidator[field])
    }
  }

  if (validators.length === 0) { 
    return res.status(422).send(new errorResponse(false, 'Invalid fields to Update', 'NO_VALID_FIELDS'))
  }
  
  for (const validator of validators) {
    await validator.run(req)
  }

  next()
}
