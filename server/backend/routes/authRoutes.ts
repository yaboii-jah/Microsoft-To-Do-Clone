import { Router } from "express";
import { login, logout} from "../controllers/authController";
import { sessionStatus } from "../middlewares/authValidation";
import passport from "passport";
import '../strategies/googleStrategy.js'; 

export const routes = Router ()!;

routes.get('/google', passport.authenticate('google', { scope: ["profile", "email"]}))
routes.get('/google/callback', passport.authenticate('google'), login )
routes.post('/logout', sessionStatus, logout)