import { Router } from "express";
import { registerUser, login} from "../controllers/authController.js";
import { bodyValidator, validationResultChecker } from "../middlewares/TaskValidation.js";
import { userValidator } from "../validators/userValidator.js";
import { checkUser } from "../middlewares/authValidation.js";

export const routes = new Router ();

routes.post('/login', login) 
routes.post('/register', bodyValidator, Object.values(userValidator), validationResultChecker, checkUser, registerUser)
//routes.post('/logout', logout)