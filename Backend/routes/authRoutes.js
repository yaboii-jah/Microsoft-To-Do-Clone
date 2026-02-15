import { Router } from "express";
import { registerUser, login, logout} from "../controllers/authController.js";
import { bodyValidator, validationResultChecker } from "../middlewares/TaskValidation.js";
import { userValidator, logInValidator } from "../validators/userValidator.js";
import { checkUser, checkCredentials } from "../middlewares/authValidation.js";

export const routes = new Router ();

routes.post('/login', bodyValidator, logInValidator, validationResultChecker, checkCredentials, login) 
routes.post('/register', bodyValidator, Object.values(userValidator), validationResultChecker, checkUser, registerUser)
routes.post('/logout', logout)