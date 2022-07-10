import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.reports-slider ', {

  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 35,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  breakpoints: {
    600: {
      spaceBetween: 32,
      slidesPerView: "auto",
    },
  }
});