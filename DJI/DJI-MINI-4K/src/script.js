// Videos
const videos = [
  {
        selector: ".video-1",
        htmlVideo: `
        <video autoplay loop class="showcase__gallery-image" muted data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-04-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-2",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-06-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-3",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-07-dji-mini-4k-video-background.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-4",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-08-dji-mini-4k-video.webm" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-5",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery-image" data-js="video">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-09-dji-mini-4k-video.webm" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-6",
        htmlVideo: `
        <video autoplay loop muted class="showcase__gallery--image">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-10-dji-mini-4k-video.webm" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-7",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-11-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-8",
        htmlVideo: `
        <video autoplay loop muted class="video__play sm:luby-rounded-[22px] luby-overflow-hidden luby-w-full luby-max-w-[1198px]">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-12-dji-mini-4k-video-background.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-9",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-13-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-10",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-15-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  },
  {
        selector: ".video-11",
        htmlVideo: `
        <video autoplay loop muted class="video__play">
                <source src="https://mkt.multilaser.com.br/emkt/mkt/2025/dji-videos/videos-dji-mini-4k/dobra-17-dji-mini-4k-video.mp4" type="video/webm"/>
        </video>
        `,
  }
];

videos.forEach((video) => {
  const videoContainerEl = document.querySelector(video.selector);
          if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
});