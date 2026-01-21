import { formatDate } from "../utils/formatDate.js";

let tasks = [];

export function setTasks (data) { 
  tasks = data;
}

  export function setTaskByID () {

}

export function getTasks (event, checkCategory) {
  return checkCategory(event, tasks, formatDate)
}

export function addTask (addedTask) {
  tasks.push (addedTask)
  console.log(tasks)
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

