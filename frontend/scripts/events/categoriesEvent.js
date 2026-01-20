import { getTasks } from "../state/tasksState.js"
import { generateHeaderUi } from "../ui/generateHeader.js"
import { checkCategory } from "../logic/checkCategory.js"
import { showTaskDrawerEventListener } from "./taskContainerEvent.js" 

export function categoriesEventListener (generateTask) {
  const events = ['MyDay', 'Important', 'Planned', 'Assigned', 'Tasks']
  
  events.forEach((event, index) => {
    document.querySelectorAll('.categories')[index].addEventListener('click', () => {
      generateHeaderUi(event)
      generateTask(getTasks(event, checkCategory))
      showTaskDrawerEventListener()
    })  
  })
}