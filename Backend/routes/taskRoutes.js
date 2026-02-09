import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/taskController.js'
import { bodyValidator, dataEqualityChecker, validationResultChecker, cookieValidator } from '../middlewares/TaskValidation.js';
import { addTaskValidator, routeParamsTaskValidator, updateTaskValidator } from '../validators/TaskValidator.js';

export const routes = new Router ();


routes.post('/add', cookieValidator, bodyValidator, Object.values(addTaskValidator), validationResultChecker, createTask)
routes.delete('/:id/delete', routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, deleteTask)
routes.get('/list', listTasks)
routes.patch('/:id/update', bodyValidator, updateTaskValidator, routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, updateTask)