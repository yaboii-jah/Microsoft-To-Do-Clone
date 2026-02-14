import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';
import { routes as taskRoutes } from './routes/taskRoutes.js'
import { routes as authRoutes } from './routes/authRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

dotenv.config();
const app = express();

await mongoose.connect(process.env.MONGO_URI)

app.use(cors());
app.use(cookieParser('secret'))
app.use(express.json())
app.use(morgan('dev'))
app.use(session({
  secret : process.env.SECRET_KEY,
  resave : false,
  saveUninitialized : false,
  cookie : { 
    maxAge : 300000,
    signed : true
  }
}))

app.use('/auth/api', authRoutes)
app.use('/tasks/api', taskRoutes);

export function start() { 
  app.listen(3000, () => {
    console.log('Listening at http://localhost')
  })
}