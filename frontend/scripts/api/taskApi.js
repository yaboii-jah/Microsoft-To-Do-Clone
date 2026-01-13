export async function getAllTask () { 
  const data = await fetch('http://localhost:3000/tasks/api/list')
  return await data.json()
}