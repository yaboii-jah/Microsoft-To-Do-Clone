import { body } from "express-validator";

export const userValidator = {
  firstName : 
    body (['firstName', 'userName', 'lastName', 'status'])
      .exists().withMessage('Firstname field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Username')
      .isString().withMessage('Firstname must be a string'),

  password :
    body('password')
      .exists().withMessage('Password field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Password'),

  email :
    body('email')
      .exists().withMessage('Email field dont\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Email')
      .normalizeEmail()
      .isEmail().with('Must be a valid email address'),

  date :
    body('date')
      .exists().withMessage('Date field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Date')
      .isISO8601().withMessage('Date must be in ISO8601')
}     