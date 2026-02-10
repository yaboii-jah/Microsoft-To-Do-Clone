import { body } from "express-validator";

export const userValidator = {
  username : 
    body('username')
      .exists().withMessage('Username field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Username'),

  password :
    password('password')
      .exists().withMessage('Password field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Password')
}     