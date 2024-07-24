// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};
// Hero banner slide
var swiper = new Swiper(".hero-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//  Xử lý toàn bộ slide
document.addEventListener("DOMContentLoaded", function () {
  function initializeSwiper(
    selector,
    options,
    resizeHandler,
    prevArrow,
    nextArrow
  ) {
    const swiper = new Swiper(selector, options);

    function calculateSlidesPerView() {
      const windowWidth = window.innerWidth;
      return resizeHandler(windowWidth);
    }

    swiper.params.slidesPerView = calculateSlidesPerView();
    swiper.update();

    window.addEventListener("resize", function () {
      swiper.params.slidesPerView = calculateSlidesPerView();
      swiper.update();
    });

    if (prevArrow) {
      document.querySelector(prevArrow).addEventListener("click", function () {
        swiper.slidePrev();
      });
    }

    if (nextArrow) {
      document.querySelector(nextArrow).addEventListener("click", function () {
        swiper.slideNext();
      });
    }
  }

  initializeSwiper(
    ".mySwiper",
    {
      spaceBetween: 10,
      loop: true,
    },
    function (windowWidth) {
      return windowWidth >= 500 ? 2.9 : 1.5;
    },
    ".arrow-prev",
    ".arrow-next"
  );

  initializeSwiper(
    ".loose-gemstone-slider",
    {
      spaceBetween: 30,
      loop: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
      },
    },
    function (windowWidth) {
      if (windowWidth >= 1200) return 4.5;
      if (windowWidth >= 990) return 3.5;
      if (windowWidth >= 768) return 2.5;
      if (windowWidth >= 450) return 2;
      return 1.5;
    },
    ".arrow-prev-lg",
    ".arrow-next-lg"
  );

  initializeSwiper(
    ".asian-fengshui-decoration-slider",
    {
      spaceBetween: 10,
      loop: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
      },
    },
    function (windowWidth) {
      if (windowWidth >= 1200) return 4.5;
      if (windowWidth >= 990) return 3.5;
      if (windowWidth >= 768) return 2.5;
      if (windowWidth >= 450) return 2;
      return 1.5;
    },
    ".arrow-prev-afd",
    ".arrow-next-afd"
  );
});

// JS Jewellery collection
$("#demo").RollingSlider({
  showArea: "#example",
  prev: "#jprev",
  next: "#jnext",
  moveSpeed: 300,
  autoPlay: false,
});

// Testimonials
$(document).on("ready", function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
