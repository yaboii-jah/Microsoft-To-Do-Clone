export async function generateTasks (tasks) {
  console.log('hi')
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

export async function generateNewAddedTask (updatedTask) {
  document.querySelector('.tasks').insertAdjacentHTML( 'beforeend',
    `<div class="task-container" data-id = "${updatedTask[0]._id}"><img src="./assets/main-content-icons/circle-icon.svg" class="task-check non-check"><span class="task">${updatedTask[0].task}</span><img src="./assets/main-content-icons/star-icon.svg" class="task-check non-marked"></div>`
  )
}