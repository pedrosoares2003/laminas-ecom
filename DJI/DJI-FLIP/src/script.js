function showGallery(category, button, fatherClassName) {
  const allGalleries = document.querySelectorAll(`.${fatherClassName} .showcase__gallery`);
  const allButtons = document.querySelectorAll(`.${fatherClassName} .category-button`);
  const allDescriptions = document.querySelectorAll(`.${fatherClassName} .descriptions .feature__description`);

  // Oculta todas as galerias
  allGalleries.forEach((gallery) => {
    gallery.style.display = "none";
  });

  // Exibe a galeria correspondente
  const activeGallery = document.querySelector(`.${fatherClassName} .showcase__gallery--${category}`);
    if (activeGallery) {
      activeGallery.style.display = "flex";
    }
  
  // Exibe a descrição correspondente
  const activeDescription = document.querySelector(`.${fatherClassName} .descriptions .feature__description--${category}`);
    if (activeDescription) {
      activeDescription.style.display = "inline";
    }

  // Remove a classe "active" de todos os botões
  allButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Adiciona a classe "active" ao botão clicado
  button.classList.add("active");

  // Remove a classe "active" de todos as descrições
  allDescriptions.forEach((desc) => {
    desc.classList.remove("active");
  });

  // 
  allDescriptions.forEach((desc) => {
    desc.style.display = "none";
  });
  activeDescription.classList.add("active");
  activeDescription.style.display = "flex";
}

// Ativar carrossel dobra-12
var swiper = new Swiper(".dobra-12 .carrossel", {
  navigation: {
    nextEl: ".dji-lamina .swiper-button-next",
    prevEl: ".dji-lamina .swiper-button-prev",
  },
  breakpoints: {
        991: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 60
        },
        767: {
                slidesPerView: 1.2,
                centeredSlides: true,
                spaceBetween: 40
        }
  },
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Ativar carrossel dobra-13
var swiper = new Swiper(".buttons-carousel", {
        breakpoints: {
                1135: {
                        slidesPerView: 5
                },
                991: {
                        slidesPerView: 4.5
                },
                767: {
                        slidesPerView: 3.5
                },
                580: {
                        slidesPerView: 2.5
                },
                490: {
                        slidesPerView: 1.5
                }
        },
        spaceBetween: 0,
        slidesPerView: 1.3,
        freeMode: true,
        watchSlidesProgress: true 
});


// Videos
const videos = [
  {
        selector: ".video-1",
        htmlVideo: `
        <h4 class="feature__title">
                Vídeos em 4K/60 fps em HDR
        </h4>
        <video autoplay loop class="gallery__image" muted data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-2-dji-flip-5-video.mp4" type="video/mp4"/>
        </video>
        `,
  },
  {
        selector: ".video-2",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-4-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-3",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-7-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-4",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-8-dji-flip-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-5",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-8-dji-flip-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-6",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-7",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-8",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-[22px] luby-overflow-hidden luby-w-full luby-max-w-[1198px]">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-3.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-9",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-4.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-10",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-5.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-11",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-10-dji-flip-video-6.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-12",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-14-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-13",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-15-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-14",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-16-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-15",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-17-dji-flip-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-16",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-18-dji-flip-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-17",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-18-dji-flip-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-18",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-18-dji-flip-video-3.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-19",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-flip/dobra-18-dji-flip-video-4.mp4" type="video/webm"/>
        </video>
        `,
  },
];

videos.forEach((video) => {
  const videoContainerEl = document.querySelector(video.selector);
          if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
});