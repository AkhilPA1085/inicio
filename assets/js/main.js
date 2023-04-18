// banner height
$('.banner').css('height', $(window).height());

// Precounter
new PureCounter();


var swiper = new Swiper(".whattheysaySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
    },
  });