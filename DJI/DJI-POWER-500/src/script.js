// VIDEOS

(() => {
        const videos = [
          {
            selector: ".video-01",
            htmlVideo: `
                  <video autoplay loop muted class="feature__image">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-power-500-1000/dobra-07-dji-power-500-1000-video-background.mp4" type="video/mp4"/>
                  </video>
                  `,
          },
          {
            selector: ".video-02",
            htmlVideo: `
                  <video autoplay loop muted class="feature__image" data-js="video">
                          <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-power-500-1000/dobra-10-dji-power-500-1000-video.mp4" type="video/mp4"/>
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