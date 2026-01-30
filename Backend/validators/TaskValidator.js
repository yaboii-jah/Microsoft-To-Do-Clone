import { query, body } from 'express-validator'; 

export const addTaskValidator = [
  body('task')
    .exists().withMessage('Task Field don\'t exist')
    .notEmpty().withMessage('Invalid Value on Task'),

  body('category')
     .exists().withMessage('Category Field don\'t exist')
    .notEmpty().withMessage('Invalid Value on Category')
    .isString().withMessage('Category must be String'),

  body('date')
    .exists().withMessage('Date Field don\'t exist')
    .notEmpty().withMessage('Invalid Value on Date')
    .isISO8601().withMessage('Date must be in ISO8601'),

  body('status')
    .exists().withMessage('Status Field don\'t exist')
    .notEmpty().withMessage('Invalid Value on Status')
    .isString().withMessage('Status must be String')
]