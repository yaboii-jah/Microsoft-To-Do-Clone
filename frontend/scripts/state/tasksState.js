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

