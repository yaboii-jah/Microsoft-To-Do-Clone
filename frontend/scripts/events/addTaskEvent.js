import { addTask} from "../state/tasksState.js"
import { addTask as addApi } from "../api/taskApi.js"
import { getHeaderValue } from "../ui/getHeaderValue.js"
import { partialShowTaskDrawerEventListener } from "./taskContainerEvent.js"
import { formatDate } from "../utils/formatDate.js";

export function addTaskEventListener (generateNewAddedTask) {
  const addInputElement =  document.querySelector('.add-task-input')
  addInputElement.addEventListener('keyup', async (event) => {
    if (event.key === 'Enter') {
      const addedTask =  await addApi({
        task : addInputElement.value,
        category : getHeaderValue(),
        date : `${formatDate()}T00:00:00.000Z`,
        status : "Pending"
      })

      if (addedTask) {
        addTask(addedTask[0])
        generateNewAddedTask(addedTask[0])
        partialShowTaskDrawerEventListener(document.querySelectorAll('.task-container'), addedTask[0])
        addInputElement.value = ''
      }
    }
  })  
}