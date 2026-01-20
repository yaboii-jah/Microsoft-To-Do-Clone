export function closeDeleteModal () {
  document.querySelector('.modal-box').innerHTML = ''
  document.querySelector('.modal').style.visibility = 'hidden'
}