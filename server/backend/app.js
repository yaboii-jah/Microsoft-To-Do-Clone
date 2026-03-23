import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';
import { routes as taskRoutes } from './routes/taskRoutes.js'
import { routes as authRoutes } from './routes/authRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import helmet from 'helmet';

dotenv.config();
const app = express();

await mongoose.connect(process.env.MONGO_URI)

app.use(helmet())
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(session({
  secret : process.env.SECRET_KEY,
  resave : false,
  saveUninitialized : false,
  cookie : { 
    maxAge : 3600000 * 24,
    httpOnly: true,
    sameSite: 'lax'
  },
  store: MongoStore.create({
    client: mongoose.connection.getClient()
  })

}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/api', authRoutes);
app.use('/tasks/api', taskRoutes);

const PORT = 3000

export function start() { 
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost ${PORT}`)
  })
}

