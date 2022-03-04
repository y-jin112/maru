
// swiper.js

$(window).on('scroll',function(){
  if($(window).scrollTop() > $('.txt').offset().top - $(window).height()){
    $('.txt').addClass('active') 
  }
})

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});


var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      slidesPerView: 3
      
    });
// const elmag = document.querySelector('.sub-menu > p:nth-of-type(3)');
// function mag_click(){
//   (display : block)
// };