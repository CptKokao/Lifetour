'use strict';
// hamburger

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

// Swiper
var swiper = new Swiper('.swiper-container', {
  width: 1196,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   // when window width is >= 768px
  //   320: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //   },
  //   767: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //   },
  //   1023: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //   }
  // }
});

mySwiper.appendSlide('<div class="swiper-slide">Slide 10"</div>')


