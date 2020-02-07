"use strict";
// hamburger

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

// Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 768px
    320: {
      width: 600,
      slidesPerView: 2,
    },
    767: {
      width: 1196,
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
