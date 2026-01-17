import { addTask, getTasks, getAllTask } from "../state/tasksState.js"
import { addTask as addApi } from "../api/taskApi.js"
import { getHeaderValue } from "../ui/getHeaderValue.js"
import { checkCategory } from "../logic/checkCategory.js"

export function addTaskEventListener (generateTask) {
  const addInputElement =  document.querySelector('.add-task-input')
  addInputElement.addEventListener('keyup', async (event) => {
    if (event.key === 'Enter') {
      await addApi(addTask(addInputElement.value, getHeaderValue()))
      generateTask(getTasks(getHeaderValue(), checkCategory))
    }
  })  
}