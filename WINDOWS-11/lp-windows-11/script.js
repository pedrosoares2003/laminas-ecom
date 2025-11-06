// Carrossel
var swiper = new Swiper(".dobra-08", {
        breakpoints: {
                1699: {
                        slidesPerView: 5
                },
                991: {
                        slidesPerView: 3
                }
        },
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: false,
        watchSlidesProgress: false 
});