export function updateTask (index, task) {
  document.querySelectorAll('.task')[index].innerHTML = task.task
}