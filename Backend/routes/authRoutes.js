import { Router } from "express";
import { registerUser } from "../controllers/authController";

export const routes = new Router ();

//routes.post('/login', login) 
routes.post('/register', registerUser)
//routes.post('/logout', logout)