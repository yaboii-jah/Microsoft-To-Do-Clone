import { getAllTask } from "../api/taskApi.js";
import { setTasks} from "../state/tasksState.js";
import { generateTasks, generateNewAddedTask } from "../ui/generateTasks.js";
import { categoriesEventListener } from "../events/categoriesEvent.js";
import { addTaskEventListener } from "../events/addTaskEvent.js";

async function Tasks () { 
  const tasks = await getAllTask()
  setTasks(tasks)

  categoriesEventListener(generateTasks)
  addTaskEventListener(generateNewAddedTask)
}

Tasks();