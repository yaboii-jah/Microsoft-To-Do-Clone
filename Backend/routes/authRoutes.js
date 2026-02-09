import { Router } from "express";
import { registerUser, login} from "../controllers/authController.js";

export const routes = new Router ();

routes.post('/login', login) 
routes.post('/register', registerUser)
//routes.post('/logout', logout)