import { updateTask as updateTaskApi} from "../api/taskApi.js"
import { updateTask, getTaskByID} from "../state/tasksState.js"
import { updateTask as updateTaskUi } from "../ui/updateTask.js"
import { findTaskIndex } from "../logic/findIndex.js"
import { showDeleteModal } from "../ui/showDeleteModal.js"
import { deleteBtn, cancelBtn } from "./modalEvent.js"

export function updateTaskEvent () {
  const updateInputElement = document.querySelector('.update-task-input')
  updateInputElement.addEventListener('keyup', async (event) => {
    const taskID = updateInputElement.dataset.id;

    if ( event.key === 'Enter') {
      await updateTaskApi(updateTask(taskID, updateInputElement.value, 'task'))
      updateTaskUi(findTaskIndex(taskID, document.querySelectorAll('.task-container')), getTaskByID(taskID))
    }
  })
}

export function deleteTaskEvent () { 
  const deleteTaskElement = document.querySelector('.remove-btn')
  deleteTaskElement.addEventListener('click', () => {
    showDeleteModal(getTaskByID(deleteTaskElement.dataset.id))
    deleteBtn(deleteTaskElement.dataset.id)
    cancelBtn()
  })
}

export function closeDrawer () {
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.drawer-container').innerHTML = '';
  })
}