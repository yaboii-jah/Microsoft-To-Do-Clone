import { addTask, getTasks, getAllTask } from "../state/tasksState.js"
import { addTask as addApi } from "../api/taskApi.js"
import { getHeaderValue } from "../ui/getHeaderValue.js"
import { partialShowTaskDrawerEventListener } from "./taskContainerEvent.js"

export function addTaskEventListener (generateNewAddedTask) {
  const addInputElement =  document.querySelector('.add-task-input')
  addInputElement.addEventListener('keyup', async (event) => {
    if (event.key === 'Enter') {
      const updatedTask =  await addApi(addTask(addInputElement.value, getHeaderValue()))
      generateNewAddedTask(updatedTask)
      partialShowTaskDrawerEventListener(document.querySelectorAll('.task-container'), updatedTask[0])
    }
  })  
}