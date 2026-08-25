document.addEventListener('DOMContentLoaded', () => {
  // Toggle Navegación Móvil
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('show');
    });
  }

  // Transición del Carrusel de Fondo (Hero Banner)
  const slides = document.querySelectorAll('.hero-bg-carousel .slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 5000; // Cambia cada 5 segundos

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, slideInterval);
  }
});
