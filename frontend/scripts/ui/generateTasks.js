export async function generateTasks (tasks) {
  let html = '';
  tasks.forEach((task) => {
    html += `
      <div class="task-container" data-id = "${task._id}"><img src="./assets/main-content-icons/circle-icon.svg" class="task-check non-check"><span class="task">${task.task}</span><img src="./assets/main-content-icons/star-icon.svg" class="task-check non-marked"></div>
    `
  })
  document.querySelector('.drawer-container').innerHTML = '';
  document.querySelector('.tasks').innerHTML = html;
  document.querySelector('.add-task-input').value = '';
}