export function updateTask (index, task) {
  console.log(index, task)
  document.querySelectorAll('.task')[index].innerHTML = task.task
}