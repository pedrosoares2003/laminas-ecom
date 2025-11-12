// Carrossel
var swiper = new Swiper(".dobra-08", {
        breakpoints: {
                1699: {
                        slidesPerView: 5
                },
                991: {
                        slidesPerView: 3,
                        centeredSlides: false
                },
                428: {
                        slidesPerView: 1,
                        centeredSlides: true
                }
        },
        spaceBetween: 20,
        slidesPerView: 1,
        freeMode: false,
        watchSlidesProgress: false,
        preventClicksPropagation: false,
        preventClicks: false
});