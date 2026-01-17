export async function getAllTask () {
  const data = await fetch('http://localhost:3000/tasks/api/list')
  return await data.json()
}

export async function addTask (task) {
  try {
    await fetch ('http://localhost:3000/tasks/api/add', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body : JSON.stringify(task)
    })
  } catch (error) {
    console.error(error)
  }
 
}

