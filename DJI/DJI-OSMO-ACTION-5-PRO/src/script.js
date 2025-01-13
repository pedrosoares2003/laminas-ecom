function showGallery(category, button, fatherClassName) {
  const allGalleries = document.querySelectorAll(`.${fatherClassName} .showcase__gallery`);
  const allButtons = document.querySelectorAll(`.${fatherClassName} .category-button`);
  const allDescriptions = document.querySelectorAll(`.${fatherClassName} .feature__description`);

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
  const activeDescription = document.querySelector(`.${fatherClassName} .feature__description--${category}`);
    if (activeDescription) {
      activeDescription.style.display = "flex";
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

// Ativar carrossel
var swiper = new Swiper(".dobra-07-1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Videos
const videos = [
  {
        selector: ".video-1",
        htmlVideo: `
        <h4 class="feature__title">
                Poderosa<br />
                estabilização com
                HorizonSteady<br />
                em 360°
        </h4>
        <video autoplay loop class="gallery__image gallery__image-02" muted data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-2-dji-osmo-action-5-pro-carousel-video.mp4" type="video/mp4"/>
        </video>
        `,
  },
  {
        selector: ".video-2",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-4-dji-osmo-action-5-pro-carousel-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-3",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-4-dji-osmo-action-5-pro-carousel-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-4",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-4-dji-osmo-action-5-pro-carousel-video-3.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-5",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image showcase__gallery--photos">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-5-dji-osmo-action-5-pro-carousel-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-6",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery--pre ">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-5-dji-osmo-action-5-pro-carousel-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-7",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-7-1-dji-osmo-action-5-pro-carousel-slide-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-8",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-[22px] luby-overflow-hidden luby-w-full luby-max-w-[1198px]">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-7-1-dji-osmo-action-5-pro-carousel-slide-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-9",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-7-1-dji-osmo-action-5-pro-carousel-slide-3.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-10",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-9-dji-osmo-action-5-pro-carousel-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-11",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-9-dji-osmo-action-5-pro-carousel-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-12",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-11-dji-osmo-action-5-pro-carousel-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-13",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-11-dji-osmo-action-5-pro-carousel-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-14",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-14-dji-osmo-action-5-pro-carousel-slide-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-15",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-14-dji-osmo-action-5-pro-carousel-slide-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-16",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-action-5-pro/dobra-14-dji-osmo-action-5-pro-carousel-slide-3.mp4" type="video/webm"/>
        </video>
        `,
  },
];

videos.forEach((video) => {
  const videoContainerEl = document.querySelector(video.selector);
          if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
});