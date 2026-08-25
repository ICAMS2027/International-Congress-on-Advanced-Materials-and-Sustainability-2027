// Funcionalidades globales para ICAMS 2027
document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Hamburguesa Móvil
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // 2. Carrusel de Fondo en el Hero Banner
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    const intervalTime = 5000; // Cambia la imagen cada 5 segundos (5000ms)

    setInterval(() => {
      // Ocultar la diapositiva actual
      slides[currentSlide].classList.remove('active');

      // Avanzar al siguiente índice (vuelve a 0 al llegar al final del arreglo)
      currentSlide = (currentSlide + 1) % slides.length;

      // Mostrar la nueva diapositiva con fundido
      slides[currentSlide].classList.add('active');
    }, intervalTime);
  }

});
