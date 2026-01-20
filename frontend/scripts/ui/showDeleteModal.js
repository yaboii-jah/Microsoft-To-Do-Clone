export function showDeleteModal (task) {
  document.querySelector('.modal-box').innerHTML = `
    <div class="modal-header">
        <h2>Delete task</h2>
    </div>
    <div class="modal-content">
        <p>"${task.task}" will be permanently deleted</p>
    </div>
    <div class="modal-footer">
        <button class="modal-delete-btn modal-btn">Delete</button>
        <button class="modal-cancel-btn modal-btn">Cancel</button>
    </div>
  `
  document.querySelector('.modal').style.visibility = 'visible'
}