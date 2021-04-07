$(document).ready(function () {

// Modal

// $(".js-modal").on("click", function (e) {
//     e.preventDefault();
//     var currentModal = $(this).attr("href");
//     $(currentModal + ", #js-overlay").fadeIn(500);
//     $("body").addClass("open-modal");

//   });


//   $("#js-overlay, .js-modal-close").on("click", function (e) {
//     e.preventDefault();
//     $(".modal, #js-overlay").fadeOut(100);
//     $("body").removeClass("open-modal");
//   });


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
  

});