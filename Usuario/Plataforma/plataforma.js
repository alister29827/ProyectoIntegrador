const slides = document.querySelectorAll('.carousel-background img');
let index = 0;

function showNextSlide() {
  slides.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
  index = (index + 1) % slides.length;
}

setInterval(showNextSlide, 4000); // cambia cada 4 segundos