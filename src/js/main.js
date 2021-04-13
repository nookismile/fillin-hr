$(document).ready(function () {

// Modal

$(".js-modal").on("click", function (e) {
    e.preventDefault();
    var currentModal = $(this).attr("href");
    $(currentModal + ", #js-overlay").fadeIn(500);
    $("body").addClass("open-modal");

  });


  $("#js-overlay, .js-modal-close").on("click", function (e) {
    e.preventDefault();
    $(".modal, #js-overlay").fadeOut(100);
    $("body").removeClass("open-modal");
  });


  $(".choice__link").on("click", function (e) {
    e.preventDefault();
    var currentModal = $(this).attr("href");
    $(currentModal + ", #js-overlay").fadeIn(500);
    $("body").addClass("open-modal");
  });

  $("#js-overlay, .choice-window__close").on("click", function (e) {
    e.preventDefault();
    $(".country__window, #js-overlay").fadeOut(100);
    $("body").removeClass("open-modal");
  });


  let swiper = new Swiper('.slider-app',{
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
  

});