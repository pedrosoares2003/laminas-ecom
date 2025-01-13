(() => {
    const videos = [
      {
        selector: ".video-1",
        htmlVideo: `
              <video autoplay loop muted>
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/4k-120fps.mp4" type="video/mp4"/>
              </video>
              `,
      },
      {
        selector: ".video-2",
        htmlVideo: `
              <video autoplay loop muted class="luby-h-full sm:luby-h-auto luby-max-w-none sm:luby-max-w-full" data-js="video">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/color-performance.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-3",
        htmlVideo: `
              <video autoplay loop muted class="luby-w-full luby-max-w-[1440px] luby-rounded-[3.2px] sm:luby-rounded-[12px]" data-js="video">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/4K-UHD-120fps.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-4",
        htmlVideo: `
              <video autoplay loop muted class="sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/horizonSteady.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-5",
        htmlVideo: `
              <video autoplay loop muted class="sm:luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/rockSteady.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-6",
        htmlVideo: `
              <video autoplay loop muted class="sm:luby-rounded-[22px] luby-overflow-hidden luby-w-full luby-max-w-[1198px]">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/vibrant-colors-underwater.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-7",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden lg:luby-w-[65%] 2xl:luby-w-full luby-max-w-[289.961px] sm:luby-max-w-[712px]">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/magnetic-design.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-8",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden lg:luby-w-[65%] 2xl:luby-w-full luby-max-w-[240.276px] sm:luby-max-w-[590px]">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/native-vertical-recording.webm" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-9",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-[9px] sm:luby-rounded-[22px] luby-overflow-hidden luby-max-w-[1194px] luby-w-full">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/customizable-modes.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-10",
        htmlVideo: `
              <video autoplay loop muted class="luby-w-[144%] sm:luby-w-full !luby-max-w-none">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/waterproof.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-11",
        htmlVideo: `
              <video autoplay loop muted class="lg:luby-w-[116%] lg:luby-max-w-none">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/battery.mp4" type="video/mp4">
              </video>
              `,
      },
      {
        selector: ".video-12",
        htmlVideo: `
              <video autoplay loop muted class="luby-overflow-hidden luby-rounded-[9px] sm:luby-rounded-[22px] luby-w-full !luby-max-w-[271px] sm:!luby-max-w-[591px]">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/temperatures.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-13",
        htmlVideo: `
              <video autoplay loop muted class="luby-overflow-hidden sm:luby-rounded-[22px] luby-w-full !luby-max-w-[342.481px] sm:!luby-max-w-[712px] luby-self-center lg:luby-self-start">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/AI-elfie-stick-removal.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-14",
        htmlVideo: `
              <video autoplay loop muted class="luby-overflow-hidden luby-rounded-[9px] sm:luby-rounded-[22px] luby-w-full !luby-max-w-[1440px]">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/gps.mp4" type="video/mp4">
              </video>
              `,
      },
      {
        selector: ".video-15",
        htmlVideo: `
              <video autoplay loop muted>
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/noise-reduction.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-16",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/voice-command.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-17",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/voice-control.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-18",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/one-touch-editing.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-19",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/various-models.mp4" type="video/webm"/>
              </video>
              `,
      },
      {
        selector: ".video-20",
        htmlVideo: `
              <video autoplay loop muted class="luby-rounded-xl lg:luby-rounded-[34px] luby-overflow-hidden">
                      <source src="https://mkt.multilaser.com.br/emkt/mkt/2024/dji-videos/dji-osmo-action-4/wireless.mp4" type="video/webm"/>
              </video>
              `,
      },
    ];
  
    videos.forEach((video) => {
      const videoContainerEl = document.querySelector(video.selector);
      if (videoContainerEl) videoContainerEl.innerHTML = video.htmlVideo;
    });
  })()