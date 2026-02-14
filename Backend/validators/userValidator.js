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
      .isEmail().withMessage('Must be a valid email address')
      .normalizeEmail(),

  date :
    body('date')
      .exists().withMessage('Date field don\'t exist')
      .trim()
      .notEmpty().withMessage('Invalid Value on Date')
      .isISO8601().withMessage('Date must be in ISO8601')
}  

export async function logInValidator (req, res, next) {
  const fields = Object.keys(req.body);
  
  const validators = []

  for (const field of fields) {
    if (field === 'email' || field === 'password') {
      validators.push(userValidator[field])
    }
  }

  if (validators.length === 0) { 
    return res.status(422).send(new errorResponse(false, 'Invalid fields to Check', 'NO_VALID_FIELDS'))
  }
  
  for (const validator of validators) {
    await validator.run(req)
  }

  next()
}
