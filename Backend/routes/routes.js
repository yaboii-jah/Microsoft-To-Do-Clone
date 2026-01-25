import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/controller.js'

export const routes = new Router ();

routes.post('/api/add', createTask);
routes.delete('/api/:id/delete', deleteTask);
routes.get('/api/list', listTasks)
routes.patch('/api/:id/update', updateTask)