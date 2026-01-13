import { getAllTask } from "../api/taskApi.js";
import { setTasks, getTasks } from "../state/tasksState.js";
import { generateTasks } from "../ui/generateTasks.js";

async function Tasks () { 
  const tasks = await getAllTask()

  setTasks(tasks)
  generateTasks(getTasks())

}

Tasks();