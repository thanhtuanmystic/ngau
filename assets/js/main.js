// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("fa-search", "fa-times");
  } else {
    searchBox.classList.replace("fa-times", "fa-search");
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".related-product-slider", {
    spaceBetween: 30,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    slidesPerView: calculateSlidesPerView(),
  });

  function calculateSlidesPerView() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 4.5;
    } else if (windowWidth >= 990) {
      return 3.5;
    } else if (windowWidth >= 768) {
      return 2.5;
    } else if (windowWidth >= 450) {
      return 2;
    } else {
      return 1.5;
    }
  }
  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = calculateSlidesPerView();
    swiper.update(); // Cập nhật Swiper
  });
  document
    .querySelector(".arrow-prev-lg")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
  document
    .querySelector(".arrow-next-lg")
    .addEventListener("click", function () {
      swiper.slideNext();
    });
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

// Product detail
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});
const nextBtn = document.querySelector(".product-detail-nav-icon-next");
const prevBtn = document.querySelector(".product-detail-nav-icon-prev");

nextBtn.addEventListener("click", () => {
  if (imgId < imgBtns.length) {
    imgId++;
    slideImage();
  }
});

prevBtn.addEventListener("click", () => {
  if (imgId > 1) {
    imgId--;
    slideImage();
  }
});
function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);
