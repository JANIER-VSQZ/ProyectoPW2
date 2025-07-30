document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".img-slide");
  let index = 0;

 
  slides[index].classList.add("active");

  setInterval(() => {
    // esconde img
    slides[index].classList.remove("active");

    // prepara la siguiente
    index = (index + 1) % slides.length;

    // enseña la nueva
    slides[index].classList.add("active");
  }, 3000);
});
