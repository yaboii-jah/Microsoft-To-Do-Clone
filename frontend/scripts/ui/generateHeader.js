export function generateHeaderUi (event) {
  document.querySelector('.header').innerHTML = `
    <img src="./assets/sidebar-icons/${event}-icon.svg" class="header-icon">
    <h2 class="header-title">${event}</h2>`
}