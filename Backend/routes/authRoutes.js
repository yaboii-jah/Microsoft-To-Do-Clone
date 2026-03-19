import { Router } from "express";
import { login, logout} from "../controllers/authController.js";
import { checkUser } from "../middlewares/authValidation.js";
import { sessionStatus } from "../middlewares/authValidation.js";
import passport from "passport";
import '../strategies/googleStrategy.js'; 
export const routes = new Router ();

routes.get('/google', passport.authenticate('google', { scope: ["profile", "email"], session: true}))
routes.get('/google/callback', passport.authenticate('google'), login )
routes.post('/logout', sessionStatus, logout)