import express from 'express'
import cors from 'cors';
import { routes as taskRoutes } from './routes/taskRoutes.js'
import { routes as authRoutes } from './routes/authRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();

await mongoose.connect('mongodb+srv://jahmelldorias17_db_user:SlxtRhY4BVL94W6T@cluster0.o8utnrs.mongodb.net/?appName=Cluster0')

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


app.use('/tasks/api', taskRoutes);
app.use('/auth/api', authRoutes)

export function start() { 
  app.listen(3000, () => {
    console.log('Listening at http://localhost')
  })
}