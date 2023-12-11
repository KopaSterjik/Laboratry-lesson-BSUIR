var mySwiper = new Swiper('.swiper-container', {
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Анимация
document.addEventListener("DOMContentLoaded", function (event) {
  var elements = document.querySelectorAll(".element");
  elements.forEach(function (el) {
    el.classList.add("visible");
  });
});