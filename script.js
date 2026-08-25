document.addEventListener('DOMContentLoaded', () => {

  // Menú Hamburguesa Móvil
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

});
