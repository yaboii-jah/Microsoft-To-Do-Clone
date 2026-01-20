import { formatDate } from "../utils/formatDate.js";

let tasks = [];

export function setTasks (data) { 
  tasks = data;
}

export function getTasks (event, checkCategory) {
  return checkCategory(event, tasks, formatDate)
}

export function addTask (task, category) {
  const toBeAdded = { 
    task : task,
    category : category,
    date : `${formatDate()}T00:00:00.000Z`,
    status : "Pending"
  }

  tasks.push (toBeAdded)
  
  return toBeAdded
}

export function getAllTask () {
  return tasks;
}

export function getTaskByID (id) { 
  return  tasks.find(task => id === task._id)
}

export function updateTask (id, value, property) { 
  let toUpdate = {}

  const index = tasks.findIndex(task => task._id === id)
  tasks[index][property] = value
  toUpdate[property] = value

  return { id : id , toUpdate }
}

export function deleteTask (id) { 
  tasks = tasks.filter(task => task._id !== id)
  console.log(tasks)
}

