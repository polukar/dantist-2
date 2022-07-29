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


const swiperProd = new Swiper('.production__slider  ', {

  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 35,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.production__slider .next-circle',
    prevEl: '.production__slider .prev-circle',
  },
});



var doctorSliderNav = new Swiper(".doctor__slider-nav", {
  spaceBetween: 30,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.doctor__slider-nav .next-circle',
    prevEl: '.doctor__slider-nav .prev-circle',
  },
  breakpoints: {
    980: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }
});


var doctorSlider = new Swiper(".doctors__slider", {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: doctorSliderNav,
  },
});


