import { Router } from 'express';
import { createTask, deleteTask, listTasks, updateTask } from '../controllers/taskController'
import { bodyValidator, dataEqualityChecker, validationResultChecker} from '../middlewares/TaskValidation';
import { addTaskValidator, routeParamsTaskValidator, updateTaskValidator } from '../validators/TaskValidator';
import { sessionStatus } from '../middlewares/authValidation.js';

export const routes = Router();
routes.use(sessionStatus)

routes.post('/add', bodyValidator, Object.values(addTaskValidator), validationResultChecker, createTask)
routes.delete('/:id/delete', routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, deleteTask)
routes.get('/list', listTasks)
routes.patch('/:id/update', bodyValidator, updateTaskValidator, routeParamsTaskValidator, validationResultChecker, dataEqualityChecker, updateTask)