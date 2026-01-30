import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/controller.js'
import { bodyValidator, dataEqualityChecker, validationResultChecker } from '../middlewares/TaskValidation.js';
import { addTaskValidator } from '../validators/TaskValidator.js';

export const routes = new Router ();

routes.post('/api/add', bodyValidator, addTaskValidator, validationResultChecker, createTask)
routes.delete('/api/:id/delete', dataEqualityChecker, deleteTask)
routes.get('/api/list', listTasks)
routes.patch('/api/:id/update', bodyValidator, dataEqualityChecker, updateTask)