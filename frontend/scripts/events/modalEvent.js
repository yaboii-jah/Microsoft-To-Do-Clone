import { deleteTask } from "../state/tasksState.js";
import { deleteTask as deleteTaskApi } from "../api/taskApi.js";
import { closeDeleteModal } from "../ui/closeDeleteModal.js";
import { deleteTaskUi } from "../ui/deleteTaskUi.js";
import { findTaskIndex } from "../logic/findIndex.js";

export function deleteBtn (id) {
  document.querySelector('.modal-delete-btn').addEventListener('click', async () => {
    deleteTask(id)
    await deleteTaskApi(id)
    deleteTaskUi(findTaskIndex(id, document.querySelectorAll('.task-container')))
    closeDeleteModal()
    document.querySelector('.drawer-container').innerHTML = '';
  })
}

export function cancelBtn () {
  document.querySelector('.modal-cancel-btn').addEventListener('click', () => {
    closeDeleteModal()
  })
}