import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';
import { routes as taskRoutes } from './routes/taskRoutes'
import { routes as authRoutes } from './routes/authRoutes';
import mongoose from 'mongoose';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import helmet from 'helmet';

dotenv.config();
const app = express();

app.use(helmet())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())
app.use(morgan('dev'))
app.use(session({
  secret : process.env.SECRET_KEY!,
  resave : false,
  saveUninitialized : false,
  cookie : { 
    maxAge : 3600000 * 24,
    httpOnly: true,
    sameSite: 'lax',
    secure : false
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI!
  })

}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/api', authRoutes);
app.use('/tasks/api', taskRoutes);

const PORT = 3000

export async function start() {
  await mongoose.connect(process.env.MONGO_URI!)

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
}

