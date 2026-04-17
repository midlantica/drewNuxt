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
    @apply bg-[#1a2e1a];

    .wrapper {
      @apply w-[99.8%] bg-[#f0ebe0];

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
      @apply bg-[#0d0f14] shadow-none rounded-none;

      p {
        @apply my-0 mx-auto text-[#f0ebe0]/80 font-(family-name:--font-family-anthro-copy);
      }

      .flag {
        filter: brightness(0.7) contrast(1.2);
      }
    }

    .extrasWrapper {
      @apply bg-[#f5f0e8];

      h1 {
        @apply mt-6 mb-0 p-0 mx-auto text-[1.65em]! font-bold text-[#0d0f14] capitalize font-(family-name:--font-family-anthro-head);
      }

      p {
        @apply text-[1em] font-(family-name:--font-family-anthro-copy);
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
    @apply fill-[#c4603a] ease-out duration-500;
  }

  body.punk .box:hover .brickBack,
  body.punk .box:hover .brickCircles {
    @apply fill-[#f995d3] ease-out duration-500;
  }
</style>
