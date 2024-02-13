<template>
  <div class="wrapper">
    <Tabs />
    <slot />
  </div>
</template>

<script setup>

</script>

<style>
  .wrapper {
    @apply relative max-w-screen-breakXlg my-0 mx-auto;
  }

  .extrasWrap {

    a {
      @apply basis-auto grow box-border text-center items-center no-underline text-black ;

      img.portThumbs {
        @apply w-[400px] h-auto border-2 border-solid border-black/10 text-base-ivory transition-opacity duration-1000 ease-in-out;

        &:hover {
          @apply border-2 border-solid border-black text-base-accentRed;
        }
      }

      p {
        @apply inline-block text-center mt-2 text-[0.85em] text-black mb-4 max-w-[400px] pb-0 border-b border-solid border-transparent;

        &:hover {
          @apply underline;
        }
      }

      &:hover p {
        @apply text-base-accentRed underline;
      }

      &:hover img {
        @apply shadow-none cursor-pointer border-b-2 border-solid border-b-base-accentRed;
      }
    }
  }

  body.bourbon {
    @apply bg-base-backBlack;

    .wrapper {
      @apply w-[99.8%] bg-[url('/img/bg/graphy_2.png')] bg-repeat;

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXxsm")) {
        @apply w-[99.8%];
      }
    }

    .about > p {
      @apply w-[99.8%] my-1 mx-auto font-bourbonCopy text-[.82em];

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-[99.8%] text-[1.65vw];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%] text-[1.85vw];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%] text-[2.5vw];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%] text-[3vw];
      }
    }

    .extrasWrapper {

      h1 {
        @apply pt-4 font-bourbonHead text-bourbon-accentRed text-[1.75em] font-light antialiased;
      }
    }

  }

  body.modern {
    @apply h-[calc(100%)] bg-[hsl(320,100%,9%)];

    .wrapper {
      @apply w-[99.8%] flex flex-col grow max-w-screen-breakXlg min-h-[780px] pb-14 bg-[hsl(320,100%,9%)] bg-[url('/img/bg/bg_bak_dk4.jpeg')] bg-cover;

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXxsm")) {
        @apply w-[99.8%];
      }

      header,
      footer {
        @apply shadow-none;
      }
    }

    .about {
      @apply w-1/2 my-0 mx-auto bg-gradient-to-b from-[#d71d5b] to-[#8b133b];
    }

    .extras {
      @apply bg-[#2e001f];

      .flexxy a p {
        @apply text-white font-modernSubhead border-b border-solid border-[hsla(0,0%,100%,.5)];
      }
    }

    .extrasWrapper {

      & h1 {
        @apply text-white font-modernCopy text-[1.2rem] leading-normal capitalize antialiased bg-transparent tracking-wider;
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
    @apply bg-base-backBlack;

    .wrapper {
      @apply w-[99.8%] bg-gradient-to-b from-white via-[#fff5cb] via-85% to-[#fff5cb];

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXxsm")) {
        @apply w-[99.8%];
      }
    }

    .about > p {
      @apply text-[0.8em] tracking-wider font-groovyCopy;
    }

    .extrasWrapper {
      @apply !mt-6;

      h1 {
        @apply pt-0 text-groovy-redDk text-[1.5em] font-semibold capitalize font-groovyHead bg-transparent mt-0 mb-0;
      }

      p {
        @apply text-[1em] font-groovyCopy;
      }
    }
  }

  body.techy {
    @apply bg-base-backBlack;

    .wrapper {
      @apply w-[99.8%] bg-[#fffdf4];

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%];
      }

      @media (max-width: theme("screens.breakXxsm")) {
        @apply w-[99.8%];
      }
    }

    .about {
      @apply bg-[#ffe268] shadow-none;

      p {
        @apply my-0 mx-auto font-techyCopy;
      }
    }

    .contact {
      @apply flex gap-x-4 gap-y-4;
    }

    .extrasWrapper {
      @apply bg-[#fffff1];

      h1 {
        @apply font-techyHead mt-6 mb-0 p-0 mx-auto text-[1.65em] font-medium text-techy-blueTech capitalize;
      }

      p {
        @apply font-techyCopy text-[1em];
      }
    }
    .contact {
      @apply flex w-full m-0 gap-x-4 gap-y-1;

      @media (max-width: theme("screens.breakXlg")) {
        @apply m-0;
      }
    }

  }

  body.corp {
    @apply bg-base-backBlack;

    .wrapper {
      @apply w-[99.8%] bg-[url(/img/bg/white_paper_patt-01.jpg)] bg-repeat;

      @media (max-width: theme("screens.breakXlg")) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: theme("screens.breakLg")) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: theme("screens.breakSm")) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: theme("screens.breakXsm")) {
        /* @apply w-[99.8%]; */
      }

      @media (max-width: theme("screens.breakXxsm")) {
        /* @apply w-[99.8%]; */
      }
    }

    .extrasWrapper {

      h1 {
        @apply font-corpHead text-corp-blueDark text-[1.5em] bg-transparent font-semibold capitalize mt-0;
      }

      p {
        @apply text-[1em] font-corpCopy;
      }
    }

    .about p {
      @apply text-[1em] font-corpCopy;
    }
  }

  body.punk {
    @apply w-full bg-base-backBlack;

    .wrapper {
      @apply w-[99.8%] bg-repeat bg-center bg-[url(/img/bg/circles.svg),_url(/img/bg/Drew-punk-back.jpg)] bg-[length:_102%_640%,100%_100%];

      @media (max-width: theme("screens.breakLg")) {
        @apply w-[99.8%] bg-[length:_102%_640%,130%_90%] bg-[center_center];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-[99.8%] bg-[length:_102%_600%,120%_100%] bg-[center_center,-3em_11em];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-[99.8%] bg-[length:_102%_600%,250%_100%] bg-[center_center,-3em_3em];
      }
    }

    .about > p {
      @apply font-punkCopy text-[.8em];

      @media (max-width: theme("screens.breakXlg")) {
        @apply text-[1.65vw];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply text-[1.85vw];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply text-[2.5vw];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply text-[3vw];
      }
    }

    .extrasWrapper {

      h1 {
        @apply mt-4 text-black text-[1.25rem] font-semibold leading-normal capitalize antialiased font-modernSubhead bg-white/70 px-2;
      }

      p {
        @apply font-punkCopy text-black;
      }

      a {
        @apply bg-punk-red shadow;

        &:hover p {
          @apply text-yellow-200 shadow-black no-underline;
        }

        img.portThumbs {

        }

        p {
          @apply text-white bg-punk-red py-[.15rem] px-[.25rem];

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

  body.punk .box:hover .brickBack,
  body.punk .box:hover .brickCircles {
    @apply fill-[#f995d3] ease-out duration-500;
  }

</style>