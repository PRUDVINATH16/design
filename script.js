const slides = ["Image 1", "Image 2", "Image 3"];
let currentIndex = 0;

const text = document.getElementById("carousel-text");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function updateCarousel() {
  text.textContent = slides[currentIndex];

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});
