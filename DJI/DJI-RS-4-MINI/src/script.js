// VIDEOS

(() => {
        const videos = [
          {
            selector: ".video-01",
            htmlVideo: `
                  <video autoplay loop muted>
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-02-dji-rs-4-mini-video.mp4" type="video/mp4"/>
                  </video>
                  `,
          },
          {
            selector: ".video-02",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-h-full sm:luby-h-auto luby-max-w-none sm:luby-max-w-full" data-js="video">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-02-dji-rs-4-mini-video-2.mp4" type="video/mp4"/>
                  </video>
                  `,
          },
          {
            selector: ".video-03",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-h-full sm:luby-h-auto luby-max-w-none sm:luby-max-w-full" data-js="video">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-04-dji-rs-4-mini-video.mp4" type="video/mp4"/>
                  </video>
                  `,
          },
          {
            selector: ".video-04",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                           <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-05-dji-rs-4-mini-video.mp4" type="video/mp4"/>
                  </video>
                  `,
          },
          {
            selector: ".video-05",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-06-dji-rs-4-mini-video-1.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-06",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style sm:luby-rounded-[22px] luby-overflow-hidden luby-w-full luby-max-w-[1198px]">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-06-dji-rs-4-mini-video-2.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-07",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden lg:luby-w-[65%] 2xl:luby-w-full luby-max-w-[289.961px] sm:luby-max-w-[712px]">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-06-dji-rs-4-mini-video-3.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-08",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden lg:luby-w-[65%] 2xl:luby-w-full luby-max-w-[240.276px] sm:luby-max-w-[590px]">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-07-dji-rs-4-mini-video.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-09",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden luby-max-w-[1194px] luby-w-full">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-08-dji-rs-4-mini-video.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-10",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-w-[144%] sm:luby-w-full !luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-09-dji-rs-4-mini-video.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-11",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-12-dji-rs-4-mini-video.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-12",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-13-dji-rs-4-mini-video.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-13",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-14-dji-rs-4-mini-video.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-14",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style luby-w-[144%] sm:luby-w-full !luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-15-dji-rs-4-mini-video-1.mp4" type="video/webm"/>
                  </video>
                  `,
          },
          {
            selector: ".video-15",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-15-dji-rs-4-mini-video-2.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-16",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-16-dji-rs-4-mini-video-background.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-17",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-rs-4-mini/dobra-17-dji-rs-4-mini-video.mp4" type="video/mp4">
                  </video>
                  `,
          },
          {
            selector: ".video-18",
            htmlVideo: `
                  <video autoplay loop muted class="dji-videos-style-full lg:luby-w-[116%] lg:luby-max-w-none">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-osmo-mobile-7/dobra-14-dji-osmo-mobile-7-showcase-video-4.mp4" type="video/mp4">
                  </video>
                  `,
          }
        ];
      
        videos.forEach((video) => {
          const videoContainerEl = document.querySelector(video.selector);
          if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
        });
      })()

// FUNÇÃO PARA SHOWCASE
var divShowcase = document.querySelectorAll('section.feature__showcase');

const showGallery = (dobra) => {
        var showcaseDobra;
        var buttonContainer;
        var descriptionContainer;

        for (let i = 0; i < dobra.children.length; i++) {
                if (dobra.children[i].classList.value == 'showcase') {
                        showcaseDobra = dobra.children[i];
                }

                if (dobra.children[i].classList.value == 'button-container') {
                        buttonContainer = dobra.children[i];
                }

                if (dobra.children[i].classList.value == 'swiper button-container') {
                        buttonContainer = dobra.children[i];
                }

                if (dobra.children[i].classList.value == 'description-container') {
                        descriptionContainer = dobra.children[i];
                }
        };
        var buttonWithSwipper = buttonContainer.children[0];

        // Caso Buttons tenham Swipper
        if (buttonWithSwipper) {
                buttonWithSwipper.childNodes.forEach((button) => {

                        button.addEventListener('click', () => {
                                var number = button.classList[2].slice(18, 19);

                                // SHOWCASE
                                showcaseDobra.childNodes.forEach((showcase) => {
                                        if (showcase.classList != undefined) {
                                                // Retirando todos os showcases
                                                showcase.setAttribute('style', 'display: none;');
                                                
                                                // Mostrando o showcase do botão clicado de acordo com o número
                                                if (showcase.className.includes(number)) {
                                                        showcase.removeAttribute('style');

                                                }
                                        }
                                });

                                // BUTTONS
                                        // Retirando todos os buttons ativos
                                for (let i = 0; i < buttonWithSwipper.childNodes.length; i++) {
                                        if (buttonWithSwipper.children[i] != undefined) {
                                                buttonWithSwipper.children[i].classList.remove('active');
                                        }
                                }

                                        // Adicionando a classe active no botão clicado
                                if (button.className.includes(number)) {
                                        button.className = button.className + " active";
                                }

                                // DESCRIPTION
                                descriptionContainer.childNodes.forEach((description) => {
                                        if (description.classList != undefined) {
                                                // Retirando todos os descriptions
                                                description.classList.remove('active');

                                                // Mostrando o description do botão clicado de acordo com o número
                                                if (description.className.includes(number)) {
                                                        description.className = description.className + " active";
                                                }
                                        }
                                });
                        });
                });
        }

        buttonContainer.childNodes.forEach((button) => {

                button.addEventListener('click', () => {
                        var number = button.classList[1].slice(18, 19);

                        // SHOWCASE
                        showcaseDobra.childNodes.forEach((showcase) => {
                                if (showcase.classList != undefined) {
                                        // Retirando todos os showcases
                                        showcase.setAttribute('style', 'display: none;');
                                        
                                        // Mostrando o showcase do botão clicado de acordo com o número
                                        if (showcase.className.includes(number)) {
                                                showcase.removeAttribute('style');

                                        }
                                }
                        });

                        // BUTTONS
                                // Retirando todos os buttons ativos
                        for (let i = 0; i < buttonContainer.childNodes.length; i++) {
                                if (buttonContainer.children[i] != undefined) {
                                        buttonContainer.children[i].classList.remove('active');
                                }
                        }

                                // Adicionando a classe active no botão clicado
                        if (button.className.includes(number)) {
                                button.className = button.className + " active";
                        }

                        // DESCRIPTION
                        descriptionContainer.childNodes.forEach((description) => {
                                if (description.classList != undefined) {
                                        // Retirando todos os descriptions
                                        description.classList.remove('active');

                                        // Mostrando o description do botão clicado de acordo com o número
                                        if (description.className.includes(number)) {
                                                description.className = description.className + " active";
                                        }
                                }
                        });
                });
        });
}

divShowcase.forEach((showcase) => {
        showGallery(showcase);
});

// Carrossel
var swiper = new Swiper(".dobra-11 .button-container", {
        breakpoints: {
                767: {
                        slidesPerView: 3
                },
                500: {
                        slidesPerView: 2.3
                }
        },
        spaceBetween: 0,
        slidesPerView: 1.7,
        freeMode: true,
        watchSlidesProgress: true 
});