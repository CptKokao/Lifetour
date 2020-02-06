"use strict";
// hamburger

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

// Swiper
var swiper = new Swiper(".swiper-container", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 768px
    320: {
      width: 'auto',
      slidesPerView: 1,
      spaceBetween: 20
    },
    767: {
      width: 1196,
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
