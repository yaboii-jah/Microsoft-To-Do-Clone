import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/controller.js'
import { bodyValidator, dataEqualityChecker, validationResultChecker } from '../middlewares/TaskValidation.js';
import { addTaskValidator, routeParamsTaskValidator, updateTaskValidator } from '../validators/TaskValidator.js';

export const routes = new Router ();

routes.post('/api/add', bodyValidator, Object.values(addTaskValidator), validationResultChecker, createTask)
routes.delete('/api/:id/delete', routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, deleteTask)
routes.get('/api/list', listTasks)
routes.patch('/api/:id/update', bodyValidator, updateTaskValidator, routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, updateTask)