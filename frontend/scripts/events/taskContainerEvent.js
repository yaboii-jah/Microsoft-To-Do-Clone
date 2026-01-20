import { displayDrawer } from "../ui/displayDrawer.js"
import { getTaskByID } from "../state/tasksState.js"
import * as drawerEvents from "./drawerEvent.js"

export function showTaskDrawerEventListener () {
  document.querySelectorAll('.task-container').forEach((taskContainer) => {
    const taskID = taskContainer.dataset.id 
    taskContainer.addEventListener('click', () => {
      displayDrawer(getTaskByID(taskID))
      drawerEvents.updateTaskEvent()
      drawerEvents.deleteTaskEvent()
    })
  })

}