import './assets/scss/all.scss';



var swiper = new Swiper(".blog-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-blog-next",
        prevEl: ".swiper-blog-prev",
      },
      grid: {
        rows: 1,
        fill: 'row',
      }
    }
  }
});