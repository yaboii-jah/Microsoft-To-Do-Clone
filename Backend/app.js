import express from 'express'
import cors from 'cors';
import { routes as taskRoutes } from './tasks/routes.js'
import mongoose from 'mongoose';

const app = express();

await mongoose.connect('mongodb+srv://jahmelldorias17_db_user:SlxtRhY4BVL94W6T@cluster0.o8utnrs.mongodb.net/?appName=Cluster0')

app.use(cors());

app.use(express.json())


app.use('/tasks', taskRoutes);

export function start() { 
  app.listen(3000, () => {
    console.log('Listening at http://localhost')
  })
}