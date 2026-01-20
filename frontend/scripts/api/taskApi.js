export async function getAllTask () {
  const data = await fetch('http://localhost:3000/tasks/api/list')
  return await data.json()
}

export async function addTask (task) {
  try {
    await fetch ('http://localhost:3000/tasks/api/add', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(task)
    })
  } catch (error) {
    console.error(error)
  }
}

export async function updateTask (taskDetails) {
  try {
    await fetch(`http://localhost:3000/tasks/api/${taskDetails.id}/update`, {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(taskDetails.toUpdate)
    })
    
  } catch (error) { 
    console.error(error)
  }
}

export async function deleteTask (id) {
  try {
    await fetch(`http://localhost:3000/tasks/api/${id}/delete`, {method : 'DELETE'})
  } catch (error) { 
    console.error(error)
  }
}

