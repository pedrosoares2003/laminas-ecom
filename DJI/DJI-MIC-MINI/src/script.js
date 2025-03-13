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


// Videos
const videos = [
  {
        selector: ".video-1",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-06-dji-mic-mini-video.mp4" type="video/mp4"/>
        </video>
        `,
  },
  {
        selector: ".video-2",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-07-dji-mic-mini-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-3",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-07-dji-mic-mini-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-4",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-09-dji-mic-mini-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-5",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-15-dji-mic-mini-video-1.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-6",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-15-dji-mic-mini-video-2.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-7",
        htmlVideo: `
        <video autoplay loop muted class="video__play showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-15-dji-mic-mini-video-3.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-8",
        htmlVideo: `
        <video autoplay loop muted class="video__play showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-16-dji-mic-mini-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-9",
        htmlVideo: `
        <video autoplay loop muted class="video__play showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mic-mini/dobra-18-dji-mic-mini-video.mp4" type="video/webm"/>
        </video>
        `,
  }
];

videos.forEach((video) => {
  const videoContainerEl = document.querySelector(video.selector);
          if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
});