export function findTaskIndex (id, data) {
  return [...data].findIndex(task => task.dataset.id === id)
}