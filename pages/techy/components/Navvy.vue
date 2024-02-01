<template>
  <nav class="flex flex-col items-center content-center justify-center w-full flex-nowrap grow">
    <div class="w-full mastMain bg-techy-mango">
      <div class="mx-auto my-0 text-center masty">
        <div class="DHmast">
          <NuxtLink to="/ExtrasTechy" class="drewHeadPic jelloHorizontal" />
          <NuxtLink to="/techy" class="svgArt mastDrew">
            <mastDrew />
          </NuxtLink>
          <NuxtLink to="/techy" class="svgArt mastHarper">
            <mastHarper />
          </NuxtLink>
        </div>

        <div class="block jobDesc">
          <h2>{{ copy.uiuxDesigner }} + </h2>
          <h2>{{ copy.vizDesigner }}</h2>
        </div>
      </div>

      <div class="bar">
        <div class="contact">
          <p class="email">
            <a :href="`mailto:` + `${copy.druEmail}`">{{ copy.druEmail }}</a>
          </p>
          <p class="resume">
            <a :href="`${copy.portfolio}`" target="_blank">PDF Resume</a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style scoped>
  nav .mastMain {
    /* // */

    .masty {
      /* // */

      .DHmast {
        @apply grid grid-cols-[2fr_4fr_7fr] items-center my-0 mx-auto pt-4 gap-8;

        @media (max-width: theme("screens.breakXlg")) {
          @apply grid-cols-[auto_auto] justify-center gap-2;
        }

        @media (max-width: theme("screens.breakLg")) {
          /* // */
        }

        @media (max-width: theme("screens.breakSm")) {
          /* // */
        }

        @media (max-width: theme("screens.breakXsm")) {
          /* // */
        }

        @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {
          @apply pt-4;
        }

        a.drewHeadPic {
          @apply col-start-1 col-end-2 row-start-1 row-end-3 w-[92px] h-[109px] pt-4 pr-4 pb-0 pl-4 bg-no-repeat bg-cover justify-self-end bg-[url('/img/drew_mug_dig.png')];

          @media (max-width: theme("screens.breakXlg")) {
            @apply col-start-1 col-end-2 row-start-1 row-end-2 w-[92px] h-[109px] mt-0 mr-2 mb-0 ml-0 justify-self-end;
          }

          @media (max-width: theme("screens.breakSm")) {
            @apply w-[64px] h-[75px];
          }

          @media (max-width: theme("screens.breakXsm")) {
            @apply w-[46px] h-[55px] m-0;
          }

          @media (max-width: theme("screens.breakXxsm")) {
            @apply h-[55px] m-0;
          }
        }

        a.svgArt {
          @apply h-[5.9em];

          @media (max-width: theme("screens.breakXlg")) {
            @apply h-[11.5vw];
          }

          @media (max-width: theme("screens.breakLg")) {
            @apply h-[14vw];
          }

          @media (max-width: theme("screens.breakSm")) {
            @apply h-[14vw];
          }

          @media (max-width: theme("screens.breakXsm")) {
            @apply h-[14vw];
          }
        }

        a.mastDrew {
          @apply col-start-2 col-end-3 row-start-1 row-end-3 w-[19em];

          @media (max-width: theme("screens.breakXlg")) {
            @apply col-start-2 col-end-3 row-start-1 row-end-1 self-end mb-[-1em] w-[40vw];
          }

          @media (max-width: theme("screens.breakLg")) {
            /* // */
          }

          @media (max-width: theme("screens.breakSm")) {
            /* // */
          }

          @media (max-width: theme("screens.breakXsm")) {
            @apply w-[56vw] mb-0 ;
          }
        }

        a.mastHarper {
          @apply col-start-3 col-end-4 row-start-1 row-end-3 w-[25.3em];

          @media (max-width: theme("screens.breakXlg")) {
            @apply col-start-1 col-end-3 row-start-2 row-end-3 w-[50vw];
          }

          @media (max-width: theme("screens.breakLg")) {
            /* // */
          }

          @media (max-width: theme("screens.breakSm")) {
            @apply ml-0 mt-0;
          }

          @media (max-width: theme("screens.breakXsm")) {
            @apply w-[77vw] h-[20vw];
          }
        }
      }
    }
  }

  nav .jobDesc {
    @apply mt-[-1em] mr-0 mb-4 ml-[11.1em] text-left;

    @media (max-width: theme("screens.breakXlg")) {
      @apply my-4 mx-0 text-center;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply my-0 mx-0 mb-4 text-center;
    }

    @media (max-width: theme("screens.breakSm")) {
      /* // */
    }

    h2 {
      @apply font-techyHead text-techy-blueTech m-0 font-normal lowercase text-[1.6em] leading-[1.1em] tracking-[.03em] inline;

      @media (max-width: theme("screens.breakXlg")) {
        @apply inline text-[3.3vw] mt-[-3px];

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply inline text-[3.7vw] mt-[-3px];

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply text-[5.8vw];
      }
    }
  }

  nav .bar {
    @apply col-start-1 col-end-3 row-start-3 row-end-4 bg-techy-blueTech text-base-ivory py-[.5vh] px-4;

    .contact {
      @apply font-normal text-base-ivory flex flex-row flex-wrap justify-center items-center content-center grow w-1/2;

      @media (max-width: theme("screens.breakXlg")) {
        @apply w-full;
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply w-full;
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply w-full;
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply w-full;
      }

      p {
        @apply font-techyCopy font-medium tracking-[.09em] text-base-ivory text-[1.3em] leading-10 ml-2;

        >a {
          @apply no-underline text-base-ivory/[.9] underline-offset-4;

          &:hover {
            @apply underline;
          }
        }

        @media (max-width: theme("screens.breakLg")) {
          @apply justify-center text-[1.2em] tracking-[.1em];
        }

        @media (max-width: theme("screens.breakSm")) {
          @apply tracking-[.09em] ;
        }

        @media (max-width: theme("screens.breakXsm")) {
          @apply justify-center text-[1.1em] tracking-[.07em] leading-8 text-center;
        }
      }
    }
  }
</style>
