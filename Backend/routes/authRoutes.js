import { Router } from "express";
import { registerUser, login, logout, providerLogin} from "../controllers/authController.js";
import { bodyValidator, validationResultChecker } from "../middlewares/TaskValidation.js";
import { userValidator, logInValidator } from "../validators/userValidator.js";
import { checkUser } from "../middlewares/authValidation.js";
import { sessionStatus } from "../middlewares/authValidation.js";
import passport from "passport";
import { hashPassword } from "../utils/hashPassword.js";
import '../strategies/googleStrategy.js'; 
import '../strategies/googleStrategy.js'

export const routes = new Router ();


routes.post('/login/local', bodyValidator, logInValidator, validationResultChecker, passport.authenticate("local"), login) 
routes.get('/login/google', passport.authenticate('google', { scope: ["profile", "email"]}))
routes.get('/google/callback', passport.authenticate('google'), providerLogin )
routes.post('/register', bodyValidator, Object.values(userValidator), validationResultChecker, checkUser, hashPassword, registerUser)
routes.post('/logout', sessionStatus, logout)