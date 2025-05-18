document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('.menu-close');
  const sideMenu = document.querySelector('.side-menu');

  // Open side menu
  toggleButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  // Close side menu
  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Close side menu when clicking outside
  window.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !toggleButton.contains(event.target)) {
      sideMenu.classList.remove('open');
    }
  });
});
