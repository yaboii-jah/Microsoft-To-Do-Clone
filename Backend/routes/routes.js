import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/controller.js'
import { bodyValidator, dataEqualityChecker } from '../middlewares/TaskValidation.js';

export const routes = new Router ();

routes.post('/api/add', bodyValidator, createTask);
routes.delete('/api/:id/delete', dataEqualityChecker, deleteTask);
routes.get('/api/list', listTasks)
routes.patch('/api/:id/update', bodyValidator, dataEqualityChecker, updateTask)