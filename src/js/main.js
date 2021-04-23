$(document).ready(function () {

  // Modal

  $(".js-modal").on("click", function (e) {
    e.preventDefault();
    let currentModal = $(this).attr("href");
    $(currentModal + ", #js-overlay").fadeIn(500);
    $("body").addClass("open-modal");

  });


  $("#js-overlay, .js-modal-close").on("click", function (e) {
    e.preventDefault();
    $(".modal, #js-overlay").fadeOut(100);
    $("body").removeClass("open-modal");
  });


  let swiper = new Swiper('.slider-app', {
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    slidesPerView: true,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: false,
    lazyLoading: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
    }

  });

  let sliderThumb = new Swiper(".slider-thumb", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 15,
        direction: 'horizontal',
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 15,
        direction: 'vertical',
      },
    },
  });

  let sliderFoto = new Swiper(".slider-foto", {
    spaceBetween: 10,
    thumbs: {
      swiper: sliderThumb,
    },
  });

  $(".swipe").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-menu").toggleClass('show');
    $(".hidden-overlay").toggleClass('show');
  });

  
  $(".swipe-close").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-menu").toggleClass('show');
    $(".hidden-overlay").toggleClass('show');
  });

  $(".hidden-overlay").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
    $(".sidebar-menu").toggleClass('show');
  });

 
  $(".menu-parent-item").on("click", function (e) {
    e.preventDefault();
    $(this).find(".sub-menu").toggleClass('show');
  });



});

