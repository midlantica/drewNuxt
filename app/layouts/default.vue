<template>
  <div class="wrapper">
    <Tabs class="z-50 h-8 top-0" />
    <slot class="h-8 top-8" />
  </div>
</template>

<script setup></script>

<style>
  @reference "../assets/css/tailwind.css";

  .wrapper {
    @apply relative max-w-(--breakpoint-break-xlg) my-0 mx-auto;
  }

  .extrasWrap {
    a {
      @apply basis-auto grow box-border text-center items-center no-underline text-black;

      img.portThumbs {
        @apply w-100 h-auto border-2 border-solid border-black/10 text-base-ivory transition-opacity duration-1000 ease-in-out;

        &:hover {
          @apply border-2 border-solid border-black text-base-accent-red;
        }
      }

      p {
        @apply inline-block text-center mt-2 text-[0.85em] text-black mb-4 max-w-100 pb-0 border-b border-solid border-transparent;

        &:hover {
          @apply underline;
        }
      }

      &:hover p {
        @apply text-base-accent-red underline;
      }

      &:hover img {
        @apply shadow-none cursor-pointer border-b-2 border-solid border-b-base-accent-red;
      }
    }
  }

  body.bourbon {
    @apply bg-base-back-black;

    .wrapper {
      @apply w-[99.8%] bg-[url('/img/bg/graphy_2.png')] bg-repeat;

      @media (max-width: 1024px) {
        @apply w-[99.8%];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%];
      }

      @media (max-width: 320px) {
        @apply w-[99.8%];
      }
    }

    .about > p {
      @apply w-[99.8%] my-1 mx-auto text-[.82em] font-(family-name:--font-family-bourbon-copy);

      @media (max-width: 1024px) {
        @apply w-[99.8%] text-[1.65vw];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%] text-[1.85vw];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%] text-[2.5vw];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%] text-[3vw];
      }
    }

    .extrasWrapper {
      h1 {
        @apply pt-4 text-bourbon-accent-red! text-[1.75em]! font-light antialiased font-(family-name:--font-family-bourbon-head);
      }
    }
  }

  body.modern {
    @apply h-[calc(100%)] bg-[hsl(320,100%,9%)];

    .wrapper {
      @apply w-[99.8%] flex flex-col grow max-w-(--breakpoint-break-xlg) min-h-195 pb-14 bg-[hsl(320,100%,9%)] bg-[url('/img/bg/bg_bak_dk4.webp')] bg-cover;

      @media (max-width: 1024px) {
        @apply w-[99.8%];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%];
      }

      @media (max-width: 320px) {
        @apply w-[99.8%];
      }

      header,
      footer {
        @apply shadow-none;
      }
    }

    .about {
      @apply w-1/2 my-0 mx-auto bg-linear-to-b from-[#d71d5b] to-[#8b133b];
    }

    .extras {
      @apply bg-[#2e001f];

      .flexxy a p {
        @apply text-white border-b border-solid border-[hsla(0,0%,100%,.5)] font-(family-name:--font-family-modern-subhead);
      }
    }

    .extrasWrapper {
      @apply mt-3;

      & h1 {
        @apply text-white! text-[1.5rem]! leading-normal capitalize antialiased bg-transparent tracking-wider font-(family-name:--font-family-modern-copy);
      }

      & a {
        &:hover {
          p {
            @apply text-white underline;
          }
        }

        img.portThumbs {
          @apply border border-white;

          &:hover {
            @apply border border-modern-ruby;
          }
        }

        p {
          @apply text-white;

          &:hover {
            @apply underline border-base-white;
          }
        }
      }
    }
  }

  body.groovy {
    @apply bg-base-back-black;

    .wrapper {
      @apply w-[99.8%] bg-linear-to-b from-white via-[#fff5cb] via-85% to-[#fff5cb];

      @media (max-width: 1024px) {
        @apply w-[99.8%];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%];
      }

      @media (max-width: 320px) {
        @apply w-[99.8%];
      }
    }

    .about > p {
      @apply text-[0.8em] tracking-wider font-(family-name:--font-family-groovy-copy);
    }

    .extrasWrapper {
      @apply mt-6!;

      h1 {
        @apply pt-0 text-groovy-red-dk text-[1.5em]! font-semibold capitalize bg-transparent mt-0 mb-0 font-(family-name:--font-family-groovy-head);
      }

      p {
        @apply text-[1em] font-(family-name:--font-family-groovy-copy);
      }
    }
  }

  body.techy {
    @apply bg-base-back-black;

    .wrapper {
      @apply w-[99.8%] bg-[#fffdf4];

      @media (max-width: 1024px) {
        @apply w-[99.8%];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%];
      }

      @media (max-width: 320px) {
        @apply w-[99.8%];
      }
    }

    .about {
      @apply bg-[#ffe268] shadow-none;

      p {
        @apply my-0 mx-auto font-(family-name:--font-family-techy-copy);
      }
    }

    .contact {
      @apply flex gap-x-4 gap-y-4;
    }

    .extrasWrapper {
      @apply bg-[#fffff1];

      h1 {
        @apply mt-6 mb-0 p-0 mx-auto text-[1.65em]! font-medium text-techy-blue-tech capitalize font-(family-name:--font-family-techy-head);
      }

      p {
        @apply text-[1em] font-(family-name:--font-family-techy-copy);
      }
    }
    .contact {
      @apply flex w-full m-0 gap-x-4 gap-y-1;

      @media (max-width: 1024px) {
        @apply m-0;
      }
    }
  }

  body.corp {
    @apply bg-base-back-black;

    .wrapper {
      @apply w-[99.8%] bg-[url(/img/bg/white_paper_patt-01.webp)] bg-repeat;

      @media (max-width: 1024px) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: 840px) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: 630px) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: 430px) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: 320px) {
        /* @apply w-[99.8%]; */
      }
    }

    .extrasWrapper {
      h1 {
        @apply text-corp-blue-dark text-[1.5em]! bg-transparent font-semibold capitalize mt-0 font-(family-name:--font-family-corp-head);
      }

      p {
        @apply text-[1em] font-(family-name:--font-family-corp-copy);
      }
    }

    .about p {
      @apply text-[1em] font-(family-name:--font-family-corp-copy);
    }
  }

  body.anthro {
    /* CRT scanlines on the full viewport */
    background-color: #0a1a0a;
    background-image:
      /* Phosphor glow: faint green bloom from top */
      radial-gradient(
        ellipse 120% 40% at 50% -5%,
        rgba(0, 80, 0, 0.4) 0%,
        transparent 100%
      ),
      /* Scanlines: 3px dark band every 6px */
      repeating-linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0px,
          rgba(0, 0, 0, 0) 1px,
          rgba(0, 0, 0, 0.75) 6px,
          rgba(0, 0, 0, 0.75) 0px
        );
    background-size:
      100% 100%,
      100% 6px;
    background-attachment: fixed;

    .wrapper {
      @apply w-[99.8%];
      background: transparent;

      @media (max-width: 1024px) {
        @apply w-[99.8%];
      }

      @media (max-width: 840px) {
        @apply w-[99.8%];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%];
      }

      @media (max-width: 320px) {
        @apply w-[99.8%];
      }
    }

    .about {
      @apply shadow-none rounded-none;
      background: #050d05;
      border: 1px solid #1a3a1a;
      box-shadow: 0 0 12px rgba(51, 255, 51, 0.08);

      p {
        @apply my-0 mx-auto;
        color: #33ff33;
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.82rem;
        line-height: 1.53;
        text-shadow:
          0 0 4px rgba(51, 255, 51, 0.5),
          0 0 10px rgba(51, 255, 51, 0.15);
      }

      .flag {
        filter: opacity(0.7);
      }
    }

    .extrasWrapper {
      background: #050d05;
      border-top: 1px solid #1a3a1a;

      h1 {
        @apply mt-6 mb-0 p-0 mx-auto text-[1.2em]!;
        color: #33ff33;
        font-family: 'Doto', 'Share Tech Mono', monospace !important;
        text-shadow: 0 0 8px rgba(51, 255, 51, 0.6);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      p {
        @apply text-[0.75em];
        color: #88cc88;
        font-family: 'Share Tech Mono', monospace;
      }

      a {
        border: 1px solid #1a3a1a;

        &:hover p {
          color: #33ff33;
        }

        img.portThumbs {
          filter: saturate(0.2) brightness(0.7) sepia(0.3) hue-rotate(80deg);
          border: 1px solid #1a3a1a;

          &:hover {
            filter: saturate(0.4) brightness(0.9) sepia(0.2) hue-rotate(80deg);
            border-color: #33ff33;
          }
        }

        p {
          color: #88cc88;
        }
      }
    }
  }

  body.punk {
    @apply w-full bg-base-back-black;

    .wrapper {
      @apply w-[99.8%] bg-repeat bg-center bg-[url(/img/bg/circles.svg),url(/img/bg/Drew-punk-back.webp)] bg-size-[102%_640%,100%_100%];

      @media (max-width: 840px) {
        @apply w-[99.8%] bg-size-[102%_640%,130%_90%] bg-position-[center_center];
      }

      @media (max-width: 630px) {
        @apply w-[99.8%] bg-size-[102%_600%,120%_100%] bg-position-[center_center,-3em_11em];
      }

      @media (max-width: 430px) {
        @apply w-[99.8%] bg-size-[102%_600%,250%_100%] bg-position-[center_center,-3em_3em];
      }
    }

    .about > p {
      @apply text-[.8em] font-(family-name:--font-family-punk-copy);

      @media (max-width: 1024px) {
        @apply text-[1.65vw];
      }

      @media (max-width: 840px) {
        @apply text-[1.85vw];
      }

      @media (max-width: 630px) {
        @apply text-[2.5vw];
      }

      @media (max-width: 430px) {
        @apply text-[3vw];
      }
    }

    .extrasWrapper {
      h1 {
        @apply mt-4 text-black text-[1.5rem]! font-semibold leading-normal capitalize antialiased bg-white/70 px-2 font-(family-name:--font-family-modern-subhead);
      }

      p {
        @apply text-black font-(family-name:--font-family-punk-copy);
      }

      a {
        @apply bg-punk-red shadow-xs;

        &:hover p {
          @apply text-yellow-200 shadow-black no-underline;
        }

        img.portThumbs {
        }

        p {
          @apply text-white bg-punk-red py-[.15rem] px-1;

          &:hover {
            @apply border-base-white;
          }
        }
      }
    }
  }

  body.modern .box:hover .brickBack,
  body.modern .box:hover .brickCircles {
    @apply fill-[#d51b5b] ease-out duration-500;
  }

  body.modern .iconSVG {
    g {
      @apply stroke-[1px] stroke-white/75 ease-out duration-300;
    }
  }

  body.modern .box:hover g {
    @apply stroke-[1px] stroke-white ease-out duration-300;
  }

  body.bourbon .box:hover .brickBack,
  body.bourbon .box:hover .brickCircles {
    @apply fill-[#ffd12d] ease-out duration-500;
  }

  body.groovy .box:hover .brickBack,
  body.groovy .box:hover .brickCircles {
    @apply fill-[#ffdd4b] ease-out duration-500;
  }

  body.techy .box:hover .brickBack,
  body.techy .box:hover .brickCircles {
    @apply fill-[#ffdd00] ease-out duration-500;
  }

  body.corp .box:hover .brickBack,
  body.corp .box:hover .brickCircles {
    @apply fill-[#95d5ff] ease-out duration-500;
  }

  body.anthro .box:hover .brickBack,
  body.anthro .box:hover .brickCircles {
    @apply fill-[#33ff33] ease-out duration-500;
  }

  /* ── Anthro: Carousel / Project Box ── */
  body.anthro .projectBox {
    background: #050d05;
    border: 2px solid #33ff33;
    box-shadow:
      0 0 0 1px #0a1a0a,
      0 0 16px rgba(51, 255, 51, 0.2),
      4px 4px 0 #000;
    border-radius: 0;

    .projectBox__top {
      border-bottom: 1px solid #1a3a1a;
      padding-bottom: 4px;
      margin-bottom: 4px;
    }

    .projectHead {
      color: #33ff33 !important;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 0.65rem !important;
      letter-spacing: 0.14em !important;
      text-shadow: 0 0 5px rgba(51, 255, 51, 0.6);
      text-transform: uppercase !important;
    }

    .carouselArrow {
      background: #0a1a0a !important;
      color: #ffd000 !important;
      border: 1px solid #ffd000 !important;
      border-radius: 0 !important;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.6rem;
      box-shadow: 2px 2px 0 #000;
      padding: 2px 8px !important;
      display: flex !important;
      align-items: center !important;

      &:hover {
        background: #1a2a0a !important;
        color: #33ff33 !important;
        border-color: #33ff33 !important;
      }
    }

    .projectBox__top {
      display: flex !important;
      align-items: center !important;
      min-height: 28px !important;
    }

    .projectHead {
      font-size: 0.748rem !important;
      margin: auto !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    p {
      color: #88cc88;
      font-family: 'Share Tech Mono', monospace;
    }
  }

  body.anthro .miniGallery div .box {
    background: transparent !important;
    border: 1px solid #33ff33 !important;
    border-radius: 0 !important;
    padding-top: 1.2rem !important;
    padding-bottom: 1.2rem !important;

    svg.iconSVG {
      /* Gold stroke lines */
      stroke: #ffd000 !important;
      fill: transparent !important;
      filter: drop-shadow(0 0 3px rgba(255, 208, 0, 0.6))
        drop-shadow(0 0 6px rgba(255, 208, 0, 0.3)) !important;
      transition: filter 0.2s ease !important;

      * {
        stroke: #ffd000 !important;
        fill: transparent !important;
      }
    }

    p {
      color: #88cc88 !important;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 0.65rem !important;
      letter-spacing: 0.08em;
    }

    &:hover {
      border-color: #33ff33 !important;
      background: #0a1a0a !important;
      box-shadow:
        0 0 8px rgba(51, 255, 51, 0.2),
        2px 2px 0 #000;

      svg.iconSVG {
        /* Neon green halo on hover */
        stroke: #33ff33 !important;
        fill: transparent !important;
        filter: drop-shadow(0 0 4px rgba(51, 255, 51, 0.9))
          drop-shadow(0 0 10px rgba(51, 255, 51, 0.7))
          drop-shadow(0 0 20px rgba(51, 255, 51, 0.4)) !important;

        * {
          stroke: #33ff33 !important;
          fill: transparent !important;
        }
      }

      p {
        color: #33ff33 !important;
      }
    }
  }

  /* ── Anthro: Modal ── */
  body.anthro #modal .modal {
    background: #050d05 !important;
    border: 2px solid #33ff33 !important;
    border-radius: 0 !important;
    box-shadow:
      0 0 0 1px #0a1a0a,
      6px 6px 0 #000,
      0 0 20px rgba(51, 255, 51, 0.15) !important;
    overflow: visible !important;

    /* Hard title bar — taller, flex row with X at right end */
    &::before {
      content: '▶ SKILL_INFO.EXE';
      display: flex;
      align-items: center;
      background: linear-gradient(180deg, #1a4a1a 0%, #0d2a0d 100%);
      border-bottom: 1px solid #33ff33;
      padding: 10px 48px 10px 12px; /* right padding leaves room for X */
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.14em;
      color: #33ff33;
      text-shadow: 0 0 5px rgba(51, 255, 51, 0.7);
      min-height: 36px;
    }

    h4 {
      color: #ffd000 !important;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 1.08rem !important;
      letter-spacing: 0.08em;
      text-shadow: 0 0 6px rgba(255, 208, 0, 0.6);
    }

    p {
      color: #88cc88 !important;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 0.9rem !important;
      line-height: 1.8 !important;
      text-shadow: 0 0 2px rgba(51, 255, 51, 0.15);
    }

    a {
      color: #ffd000 !important;
      text-shadow: 0 0 4px rgba(255, 208, 0, 0.5);

      &:hover {
        color: #33ff33 !important;
      }
    }

    /* X button: sits inside the title bar at the right end */
    .closeBtn {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
      width: 36px !important;
      height: 36px !important;
      background: transparent !important;
      border: none !important;
      border-left: 1px solid #33ff33 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: #33ff33 !important;

      /* Hide the SVG xOut icon, show a plain text × instead */
      svg {
        display: none !important;
      }

      &::after {
        content: '✕';
        font-family: 'Share Tech Mono', monospace;
        font-size: 1rem;
        color: #33ff33;
        text-shadow: 0 0 6px rgba(51, 255, 51, 0.8);
        line-height: 1;
      }

      &:hover::after {
        color: #ffd000;
        text-shadow: 0 0 8px rgba(255, 208, 0, 0.9);
      }
    }
  }

  /* ── Anthro: Quote — 50% transparent neon green bar ── */
  body.anthro .quoteBlock {
    padding-top: 0.4rem !important;
    padding-bottom: 0.4rem !important;
    min-height: auto !important;
    width: 100% !important;
    background: rgba(51, 255, 51, 0.5) !important;
    box-shadow: 0 0 16px rgba(51, 255, 51, 0.3) !important;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    letter-spacing: -0.05rem;

    p {
      color: #000 !important;
      font-family: 'Share Tech Mono', monospace !important;
      font-size: 0.9rem !important;
      text-shadow: none !important;
    }

    cite {
      color: #003300 !important;
      font-style: italic;
    }

    .arrowBtn {
      color: #000 !important;
      font-weight: bold;

      &:hover {
        color: #003300 !important;
      }
    }
  }

  /* ── Anthro: About box ── */
  body.anthro .aboutWrapper .about {
    background: rgba(51, 255, 51, 0.5) !important;
    border: 1px solid #33ff33 !important;
    border-radius: 0 !important;
    box-shadow:
      0 0 12px rgba(51, 255, 51, 0.3),
      3px 3px 0 #000 !important;
    position: relative;
    overflow: hidden;

    p {
      color: #000 !important;
      text-shadow: none !important;
    }

    /* Scanline overlay */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 3px,
        rgba(0, 0, 0, 0.06) 3px,
        rgba(0, 0, 0, 0.06) 4px
      );
      z-index: 1;
    }
  }

  /* ── Anthro: Skills dock ── */
  body.anthro .skillsGrid svg {
    filter: none !important;

    &:hover {
      filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.9)) !important;
    }
  }

  body.punk .box:hover .brickBack,
  body.punk .box:hover .brickCircles {
    @apply fill-[#f995d3] ease-out duration-500;
  }
</style>
