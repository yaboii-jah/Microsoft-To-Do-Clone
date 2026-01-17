export function checkCategory (event, tasks, formatDate) { 
  let filteredTask = []
  
    if (event === 'Tasks') return tasks
  
    if (event === 'Planned' || event === 'Important') {
      tasks.forEach((task) => {
        if (task.category === event) {
          filteredTask.push(task)
        }
      })
    }
  
    if (event === 'MyDay') {
      tasks.forEach((task) => {
        if (task.date === `${formatDate()}T00:00:00.000Z`) {
          filteredTask.push(task)
        }
      })
    }
  
    return filteredTask
}