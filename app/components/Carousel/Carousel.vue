<template>
  <div v-show="showCarousel" class="projectBox">
    <div class="projectBox__top">
      <transition name="bounce4" appear>
        <a
          v-if="backButtonView"
          class="carouselArrow flash"
          @click="viewCarousel()"
        >
          ﹤ back
        </a>
      </transition>
      <p class="projectHead" @click="viewCarousel()">
        Projects - {{ selectedViewTxt }}
      </p>
    </div>

    <component :is="selectedView">
      <transition name="bounce" appear>
        <div class="miniGallery">
          <div v-for="item in projects" :key="item">
            <a @click="selectCarousel(item[1], item[2])">
              <div class="box" :class="item[3]">
                <component :is="item[0]" />
                <p>{{ item[2] }}</p>
              </div>
            </a>
          </div>
        </div>
      </transition>
    </component>
  </div>
</template>

<script setup>
  import { ref, shallowRef } from 'vue';

  import IconUiux from './icons/iconUiux.vue';
  import IconMobile from './icons/iconMobile.vue';
  import IconKiosk from './icons/iconKiosk.vue';
  import IconGraphics from './icons/iconGraphics.vue';
  import IconPrint from './icons/iconPrint.vue';
  import IconMisc from './icons/iconMisc.vue';

  import uiux01 from './uiux01.vue';
  import mobile02 from './mobile02.vue';
  import kiosk03 from './kiosk03.vue';
  import graphics04 from './graphics04.vue';
  import print05 from './print05.vue';
  import misc06 from './misc06.vue';

  const backButtonView = ref(false);
  const selectedView = shallowRef('Carousel');
  const selectedViewTxt = ref('Select one...');

  const showCarousel = ref(false);

  const projects = shallowRef([
    [IconUiux, uiux01, 'UI/UX Design', 'Uiux'],
    [IconMobile, mobile02, 'Mobile', 'Mobile'],
    [IconKiosk, kiosk03, 'Kiosk', 'Kiosk'],
    [IconGraphics, graphics04, 'Graphics', 'Graphics'],
    [IconPrint, print05, 'Print', 'Print'],
    [IconMisc, misc06, 'Misc.', 'Misc']
  ]);

  const selectCarousel = (i, x) => {
    selectedView.value = i;
    selectedViewTxt.value = x;
    backButtonView.value = true;
  };

  const viewCarousel = () => {
    selectedView.value = 'Carousel';
    selectedViewTxt.value = 'Select one...';
    backButtonView.value = false;
  };

  onMounted(() => {
    showCarousel.value = true;
  });
</script>

<style scoped>
  @reference "../../assets/css/tailwind.css";
  :root {
    --carouselFade: 0.5s;
  }

  .projectBox {
    @apply bg-[#f2f2f2] rounded p-2 relative lowercase clear-both;

    .projectBox__top {
      @apply flex flex-row flex-nowrap items-start h-6 mb-1 relative z-20;

      .projectHead {
        @apply text-[0.9em] text-center normal-case m-auto cursor-pointer mt-[-2px];

        div a {
          @apply cursor-pointer;
        }
      }
    }
  }

  .carouselArrow {
    @apply text-[.7rem] text-gray-600 border-none rounded-sm border-l-[10px] bg-black/10 pt-[.2rem] pr-2 pb-[.16rem] pl-[.4rem] m-0 font-sans cursor-pointer absolute drop-shadow-[2px_2px_2px_hsla(0,0%,100%,0.5)];
    /* filter: drop-shadow(1px 1px 1px black); */

    &:hover {
      @apply bg-black/20 text-black;
    }
  }

  .miniGallery {
    @apply w-full flex flex-row flex-wrap justify-center items-center content-center;

    div {
      @apply flex-auto no-underline cursor-pointer text-center;

      a {
        @apply flex;

        .box {
          @apply flex flex-col flex-nowrap items-center content-center justify-center text-center m-auto bg-white border border-solid text-black/50 min-w-[130px] shadow-[0px_2px_2px_-3px_black] stroke-black/50 relative;

          svg.iconSVG {
            @apply stroke-[1px] stroke-black/50 relative w-auto fill-transparent;
          }

          p {
            @apply w-full text-black/50 text-[0.85em] normal-case text-center tracking-wider relative;
          }

          &:hover {
            @apply relative;

            p {
              @apply ease-in-out duration-100 top-[-5px];
            }

            svg.iconSVG {
              @apply ease-in-out duration-100 w-auto top-[-5px];
            }
          }
        }
      }
    }
  }

  body.modern {
    .projectBox {
      @apply bg-transparent;

      @media (max-width: 1024px) {
      }

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
      }

      @media (max-width: 430px) {
      }

      .projectBox__top {
        @apply mb-3;

        .projectHead {
          @apply mt-[2px];
        }
      }

      p {
        @apply text-white text-[.85rem] text-center lowercase tracking-[0em];
        font-family: var(--font-family-modern-copy);
      }

      .carouselArrow {
        @apply rounded-xl text-white/70 bg-transparent pt-[.15rem] pr-[.85rem] pb-[.2rem] pl-[.75rem] drop-shadow-none text-center border border-white/20 border-solid;

        &:hover {
          @apply text-white bg-black/80;
        }
      }
    }

    .miniGallery {
      @apply bg-none gap-4;

      .box {
        @apply max-w-[150px] h-[168px] rounded-xl top-0 bg-transparent border border-solid border-transparent relative;

        svg.iconSVG {
          @apply w-auto top-0 relative ease-in-out duration-200;
        }

        p {
          @apply font-extralight text-white text-[.85rem] lowercase text-center mt-[4px] mx-0 mb-0 top-0 relative ease-in-out duration-200;
          font-family: var(--font-family-modern-copy);
        }

        @media (max-width: 1024px) {
          @apply min-h-min;
        }

        &:hover {
          @apply rounded-xl border border-solid border-[#FFFFFF80] shadow-[0px_0px_1rem_0px_#d71d5b];

          svg.iconSVG {
            @apply ease-in-out duration-200 top-[-5px];
          }

          p {
            @apply font-extralight text-white text-[.85rem] relative lowercase text-center mt-[4px] mx-0 mb-0 top-[-5px];
            font-family: var(--font-family-modern-copy);
          }
        }
      }
    }
  }

  body.bourbon {
    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,_0%,_0%,_90%)];

      @media (max-width: 1024px) {
      }

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
      }

      @media (max-width: 430px) {
      }

      p {
        @apply text-gray-800 font-medium lowercase;
        font-family: var(--font-family-bourbon-copy);
      }

      .projectHead {
        @apply mt-[1px] tracking-wide;
        font-family: var(--font-family-bourbon-copy);
      }
    }

    .miniGallery .box {
      @apply h-[185px] border-gray-300 relative top-0;

      svg.iconSVG {
        @apply w-auto relative top-0;
      }

      p {
        @apply text-[.85rem] text-gray-800 text-center tracking-normal lowercase relative top-0;
        font-family: var(--font-family-bourbon-copy);

        a {
          @apply text-gray-800;
        }
      }

      &:hover {
        @apply ease-in-out duration-200 relative;

        svg.iconSVG {
          @apply ease-in-out duration-200 top-[-5px];
        }

        p {
          @apply ease-in-out duration-200 top-[-5px];
        }
      }
    }
  }

  body.groovy {
    .projectBox {
      @apply shadow-[0px_6px_0px_0px_hsl(0,_0%,_0%,_25%)];

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
      }

      @media (max-width: 430px) {
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply mt-[1px];
        font-family: var(--font-family-groovy-copy);
      }

      .carouselArrow {
        @apply text-black;

        &:hover {
          @apply text-white bg-groovy-red-dk;
        }
      }
    }

    .miniGallery div .box {
      @apply h-[170px] border-gray-300 relative top-0;

      svg.iconSVG {
        @apply w-auto relative top-0;
      }

      p {
        @apply text-gray-800 text-[.85rem] relative top-0;
        font-family: var(--font-family-groovy-copy);
      }

      &:hover {
        @apply ease-in-out duration-200;

        svg.iconSVG {
          @apply ease-in-out duration-200 top-[-5px];
        }

        p {
          @apply text-center text-gray-800 ease-in-out duration-200 top-[-5px];
          font-family: var(--font-family-groovy-copy);
        }
      }
    }
  }

  body.techy {
    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,_0%,_0%,_90%)] rounded-none;

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
      }

      @media (max-width: 430px) {
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply uppercase mt-[1px];
        font-family: var(--font-family-techy-copy);
      }

      .carouselArrow {
        @apply text-[.7rem] text-black;
        /* filter: drop-shadow(1px 1px 1px black); */

        &:hover {
          @apply text-white bg-techy-blue-tech;
        }
      }
    }

    .miniGallery div .box {
      @apply h-[170px] border border-solid border-gray-200 relative top-0;
      /* @apply h-[167px] border border-solid border-gray-200 relative top-0; */

      svg.iconSVG {
        @apply w-auto ease-in-out relative top-0;
      }

      p {
        @apply text-gray-800 text-[.85rem] text-center ease-in-out relative top-0;
        font-family: var(--font-family-groovy-copy);
      }

      &:hover {
        @apply border-2 border-solid border-techy-mango ease-in-out duration-200 top-0;

        svg.iconSVG {
          @apply ease-in-out duration-200 top-[-5px];
        }

        p {
          @apply text-center text-gray-800 ease-in-out duration-200 top-[-5px];
          font-family: var(--font-family-groovy-copy);
        }
      }
    }
  }

  body.corp {
    .projectBox {
      @apply bg-base-off-white shadow-[0px_1px_1px_0px_hsl(0,_0%,_0%,_50%)];

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
        min-height: 386px;
      }

      @media (max-width: 430px) {
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply mt-[1px];
        font-family: var(--font-family-corp-head);
      }

      .carouselArrow {
        @apply text-corp-blue-dark bg-corp-blue-dark/5 tracking-[0.05em] shadow-none rounded-sm border border-corp-blue-dark/70 border-solid;

        &:hover {
          @apply text-white bg-[hsla(205,98%,17%,0.85)];
        }
      }
    }

    .miniGallery div .box {
      @apply h-[183px] border border-solid border-[#D7E7F3] relative ease-in-out duration-200 top-0;

      svg.iconSVG {
        @apply w-auto ease-in-out duration-200 relative top-0;
      }

      p {
        @apply tracking-wider text-center text-gray-800 text-[.85rem] ease-in-out relative duration-200 top-0;
        font-family: var(--font-family-corp-copy);
      }

      &:hover {
        @apply border border-solid border-[#abcbe3] ease-in-out duration-200 top-0;

        svg.iconSVG {
          @apply ease-in-out duration-200 top-[-5px];
        }

        p {
          @apply ease-in-out duration-200 top-[-5px];
        }
      }
    }
  }

  body.punk {
    .projectBox {
      @apply rounded-none bg-white/70;
      @apply shadow-[0px_1px_1px_0px_hsl(0,_0%,_0%,_50%)];

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      @media (max-width: 840px) {
      }

      @media (max-width: 630px) {
      }

      @media (max-width: 430px) {
      }

      p {
        @apply text-base-black;
      }

      .projectHead {
        @apply mt-[1px];
        font-family: var(--font-family-punk-copy);
      }

      .carouselArrow {
        @apply text-white bg-punk-magenta pt-[.1rem] pr-[.5rem] pb-[.2rem] pl-[.4rem] shadow-none rounded-sm;

        &:hover {
          @apply bg-punk-magenta/80;
        }
      }
    }

    .miniGallery {
      @apply top-0;

      div .box {
        @apply h-[183px] border-gray-300;

        svg.iconSVG {
          @apply w-auto ease-in-out duration-200 relative top-0;
        }

        p {
          @apply text-center text-gray-800 tracking-wider text-[.85rem] ease-in-out relative duration-200 top-0;
          font-family: var(--font-family-punk-copy);
        }

        &:hover {
          @apply border border-solid border-[#abcbe3] ease-in-out duration-200 top-0;

          svg.iconSVG {
            @apply ease-in-out duration-200 top-[-5px];
          }

          p {
            @apply ease-in-out duration-200 top-[-5px];
          }
        }
      }
    }
  }

  @keyframes carouselFader {
    0% {
      scale: 0;
      opacity: 0;
    }

    50% {
      scale: 0;
      opacity: 0;
    }

    95% {
      scale: 1;
      opacity: 1;
    }

    100% {
      scale: 1;
      opacity: 1;
    }
  }
</style>
