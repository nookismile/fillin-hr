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


  

  
});


document.addEventListener('DOMContentLoaded', () => {
  const pushmenu = document.getElementsByClassName('swipe');


  // получаем элемент с классом hidden-overley
  const hiddenOverley = document.querySelector('.hidden-overley');
  const btnClose = document.getElementsByClassName('swipe-close');

  // отслеживаем клик клика по оверлею
  hiddenOverley.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('show');
    document.querySelector('.sidebar-menu').classList.toggle('show');
    document.querySelector('body').classList.toggle('sidebar-opened');
    for (i = 0; i < pushmenu.length; i++) {
      pushmenu[i].classList.toggle('open');
    }
  });

  const pushmenuFunction = function () {
    document.querySelector('.swipe').classList.toggle('open');
    document.querySelector('.sidebar-menu').classList.toggle('show');
    document.querySelector('.hidden-overley').classList.toggle('show');
    document.body.classList.toggle('sidebar-opened')
  };

  // Отслеживаем клики кнопок с классом pushmenu 
  for (i = 0; i < pushmenu.length; i++) {
    pushmenu[i].addEventListener('click', pushmenuFunction, false);
  }

  // Получим все родительские элементы в меню
  const sidebarAccordeon = document.querySelectorAll('.sidebar-menu .menu-parent-item a:first-child');
  const accordeonFunction = function () {
    this.parentNode.querySelector('ul').classList.toggle('show');
    this.querySelector('span').classList.toggle('rotate');
  }
  // Отслеживаем клики родительских пунктов меню 
  for (i = 0; i < sidebarAccordeon.length; i++) {
    sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
  }



});