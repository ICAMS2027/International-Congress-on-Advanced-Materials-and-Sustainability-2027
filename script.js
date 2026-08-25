
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const modal = document.getElementById("comingSoonModal");
  const modalClose = document.getElementById("modalClose");
  const modalButton = document.getElementById("modalButton");
  const futureActions = document.querySelectorAll(".future-action");
  const navLinks = document.querySelectorAll(".nav-link");

  // Header Scroll Effect
  function updateHeader() {
    if (header) {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // Mobile Menu Drawer
  function toggleMobileMenu() {
    if (!mainNav || !menuToggle) return;
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeMobileMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) menuToggle.addEventListener("click", toggleMobileMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

  // Modal Control
  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  futureActions.forEach((btn) => btn.addEventListener("click", openModal));

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalButton) modalButton.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) closeModal();
  });
});
