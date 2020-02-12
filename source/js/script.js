"use strict";
// hamburger

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

// Swiper
var swiper = new Swiper(".tour__swiper-container", {
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

// Swiper
var swiper = new Swiper(".training__swiper-container", {
  width: 1196,
  slidesPerView: 5,
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

// Swiper
var swiper = new Swiper(".gallery__swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
