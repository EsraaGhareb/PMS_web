(function ($) {
  "use strict";

  AOS.init({
    delay: 400, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease-out-back", // default easing for AOS animations
  });

  if ($(window).width() < 560) {
    AOS.init({
      once: true,
    });
  }

  $(".navbar-toggler").click(function () {
    $("body").toggleClass("fixed-body");
  });
  $(window).on("resize", function (event) {
    if ($(window).width() > 992) {
      $("body").removeClass("fixed-body");
    }
  });

    $(".change-lang").click(function(){
      $("body").toggleClass("rtl");
    });
  // Preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut(2000);
  });
  // Sticky Menu
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".nav-wrapper ").addClass("sticky-menu").animate(
        {
          top: 0,
        },
        4000
      );
    } else {
      $(".nav-wrapper ").removeClass("sticky-menu").animate(
        {
          top: 0,
        },
        4000
      );
    }
  });

  // End Sticky Menu
  $('[data-toggle="tooltip"]').tooltip();
// sliders
 // check direction
 let rtl = false;
 if ($("body").css("direction") == "rtl") {
   rtl = true;
 }
$(".companies-slider").owlCarousel({
  items: 5,
  autoplay: !0,
  slideBy: 1,
  center: !0,
  autoplayHoverPause: !0,
  mouseDrag: !0,
  rtl: rtl,
  nav: !1,
  dots: !1,
  stagePadding: 10, 
  responsiveClass: !0,
  responsive: {
    0: { items: 1, nav: !1, loop: !0 },
    600: { items: 3, nav: !1, loop: !0 },
    1000: { items: 4, nav: !1, loop: !0 },
    1200: { items: 5, nav: !1, loop: !0 },
  },
});


})(jQuery);
 