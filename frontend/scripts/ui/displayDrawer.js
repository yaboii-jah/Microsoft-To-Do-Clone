export function displayDrawer (task) {
  document.querySelector('.drawer-container').innerHTML = `
  <div class="drawer">
    <div class="drawer-content">
      <div class="drawer-header">
        <img src="./assets/drawer-icons/close-icon.svg" class="close-btn sidebar-icon">
      </div>
      <div class="drawer-update-task">
        <textarea class="update-task-input" data-id="${task._id}">${task.task}</textarea>
        <img src="./assets/main-content-icons/star-icon.svg" class="task-check non-marked">
      </div>
      <div class="drawer-addMyDay task-drawer">
        <img src="./assets/sidebar-icons/MyDay-icon.svg" class="sidebar-icon">
        <span class="add-to-myday drawer-title">Add to My Day</span>
      </div>
      <div class="drawer-set-time"> 
        <div class="drawer-add-file task-drawer">
          <img src="./assets/drawer-icons/remindme-icon.svg" class="sidebar-icon">
          <span class="add-to-myday drawer-title">Remind me</span>
        </div>
        <div class="drawer-add-file task-drawer">
          <img src="./assets/drawer-icons/duedate-icon.svg" class="sidebar-icon">
          <span class="add-to-myday drawer-title">Add due date</span>
        </div>
        <div class="drawer-add-file task-drawer">
          <img src="./assets/drawer-icons/repeat-icon.svg" class="sidebar-icon">
          <span class="add-to-myday drawer-title">Repeat</span>
        </div>
      </div>
      <div class="drawer-add-file task-drawer">
        <img src="./assets/sidebar-icons/newlist-icon.svg" class="sidebar-icon">
        <span class="add-to-myday drawer-title">Add file</span>
      </div>
      <textarea class="add-note-input" placeholder="Add note"></textarea>
    </div>
    <div class="drawer-task-delete">
      <span class="created">Created on Thu, 16 Jan</span>
      <img src="./assets/drawer-icons/remove-icon.svg" class="sidebar-icon remove-btn">
    </div>
  </div>
  `
}