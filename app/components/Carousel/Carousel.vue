<template>
  <div v-show="showCarousel" class="projectBox">
    <div class="projectBox__top">
      <transition name="bounce4" appear>
        <a
          v-if="selectedView"
          class="carouselArrow flash"
          @click="clearSelection()"
        >
          ﹤ back
        </a>
      </transition>
      <p class="projectHead" @click="clearSelection()">
        Projects - {{ selectedViewTxt }}
      </p>
    </div>

    <div class="carouselStage @container">
      <transition name="bounce" appear>
        <component
          :is="selectedView"
          v-if="selectedView"
          class="carouselStageInner"
        />
        <div v-else class="miniGallery carouselStageInner">
          <div v-for="item in projects" :key="item[2]">
            <a @click="selectCarousel(item[1], item[2])">
              <div class="box" :class="item[3]">
                <component :is="item[0]" />
                <p>{{ item[2] }}</p>
              </div>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import { ref, shallowRef, markRaw } from 'vue';

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

  // null = show gallery; a component = show that slideshow
  const selectedView = shallowRef(null);
  const selectedViewTxt = ref('Select one...');
  const showCarousel = ref(false);

  const projects = markRaw([
    [markRaw(IconUiux), markRaw(uiux01), 'UI/UX Design', 'Uiux'],
    [markRaw(IconMobile), markRaw(mobile02), 'Mobile', 'Mobile'],
    [markRaw(IconKiosk), markRaw(kiosk03), 'Kiosk', 'Kiosk'],
    [markRaw(IconGraphics), markRaw(graphics04), 'Graphics', 'Graphics'],
    [markRaw(IconPrint), markRaw(print05), 'Print', 'Print'],
    [markRaw(IconMisc), markRaw(misc06), 'Misc.', 'Misc']
  ]);

  function selectCarousel(component, label) {
    selectedView.value = component;
    selectedViewTxt.value = label;
  }

  function clearSelection() {
    selectedView.value = null;
    selectedViewTxt.value = 'Select one...';
  }

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
    @apply bg-[#f2f2f2] rounded-xs p-2 relative lowercase clear-both;

    .projectBox__top {
      @apply flex flex-row flex-nowrap items-start h-6 mb-1 relative z-20;

      .projectHead {
        @apply text-[0.9em] text-center normal-case m-auto cursor-pointer -mt-0.5;

        div a {
          @apply cursor-pointer;
        }
      }
    }
  }

  .carouselStage {
    @apply grid;

    > * {
      grid-area: 1 / 1;
    }
  }

  .bounce-enter-active,
  .bounce-leave-active {
    @apply pointer-events-none;
  }

  .carouselArrow {
    @apply text-[.7rem] text-gray-600 border-none rounded-xs border-l-10 bg-black/10 pt-[.2rem] pr-2 pb-[.16rem] pl-[.4rem] m-0 font-sans cursor-pointer absolute drop-shadow-[2px_2px_2px_hsla(0,0%,100%,0.5)];

    &:hover {
      @apply bg-black/20 text-black;
    }
  }

  .miniGallery {
    @apply w-full grid grid-cols-1;

    @container (min-width: 360px) {
      @apply grid-cols-2;
    }

    @container (min-width: 420px) {
      @apply grid-cols-3;
    }

    @container (min-width: 700px) {
      @apply grid-cols-6;
    }

    div {
      @apply no-underline cursor-pointer text-center;

      a {
        @apply flex h-full;

        .box {
          @apply flex flex-col flex-nowrap items-center content-center justify-center text-center w-full bg-white border text-black/50 shadow-[0px_2px_2px_-3px_black] stroke-black/50 relative;

          svg.iconSVG {
            @apply stroke-[1px] stroke-black/50 relative w-auto fill-transparent;
          }

          p {
            @apply w-full text-black/50 text-[0.85em] normal-case text-center tracking-wider relative;
          }

          &:hover {
            @apply relative;

            p {
              @apply ease-in-out duration-100 -top-1.25;
            }

            svg.iconSVG {
              @apply ease-in-out duration-100 w-auto -top-1.25;
            }
          }
        }
      }
    }
  }

  body.modern {
    .carouselStage {
      min-height: 360px;
      align-items: start;
    }

    .projectBox {
      @apply bg-transparent;

      .projectBox__top {
        @apply mb-3;

        .projectHead {
          @apply mt-0.5;
        }
      }

      p {
        @apply text-white text-[.85rem] text-center lowercase tracking-[0em] font-(family-name:--font-family-modern-copy);
      }

      .carouselArrow {
        @apply rounded-xl text-white/70 bg-transparent pt-[.15rem] pr-[.85rem] pb-[.2rem] pl-3 drop-shadow-none text-center;
        border: 1px solid hsla(0, 0%, 100%, 0.2) !important;

        &:hover {
          @apply text-white bg-black/80;
          border-color: hsla(0, 0%, 100%, 0.25) !important;
        }
      }
    }

    .miniGallery {
      @apply flex flex-wrap justify-center bg-none gap-4;

      div {
        @apply flex-auto max-w-none;
      }

      .box {
        @apply max-w-37.5 h-42 rounded-xl top-0 bg-transparent border border-transparent relative;

        svg.iconSVG {
          @apply w-auto top-0 relative ease-in-out duration-200;
        }

        p {
          @apply font-extralight text-white text-[.85rem] lowercase text-center mt-1 mx-0 mb-0 top-0 relative ease-in-out duration-200 font-(family-name:--font-family-modern-copy);
        }

        @media (max-width: 1024px) {
          @apply min-h-min;
        }

        &:hover {
          @apply rounded-xl border border-[#FFFFFF80] shadow-[0px_0px_1rem_0px_#d71d5b];

          svg.iconSVG {
            @apply ease-in-out duration-200 -top-1.25;
          }

          p {
            @apply font-extralight text-white text-[.85rem] relative lowercase text-center mt-1 mx-0 mb-0 -top-1.25 font-(family-name:--font-family-modern-copy);
          }
        }
      }
    }
  }

  body.bourbon {
    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,0%,0%,90%)];

      p {
        @apply text-gray-800 font-medium lowercase font-(family-name:--font-family-bourbon-copy);
      }

      .projectHead {
        @apply mt-px tracking-wide font-(family-name:--font-family-bourbon-copy);
      }

      .carouselArrow {
        @apply text-white bg-bourbon-accent-red shadow-none border-bourbon-accent-red;

        &:hover {
          @apply text-white bg-bourbon-accent-red/80;
        }
      }
    }

    .miniGallery .box {
      @apply h-[183px] border-gray-300 relative top-0;

      svg.iconSVG {
        @apply w-auto relative top-0;
      }

      p {
        @apply text-[.85rem] text-gray-800 text-center tracking-normal lowercase relative top-0 font-(family-name:--font-family-bourbon-copy);

        a {
          @apply text-gray-800;
        }
      }

      &:hover {
        @apply ease-in-out duration-200 relative;

        svg.iconSVG {
          @apply ease-in-out duration-200 -top-1.25;
        }

        p {
          @apply ease-in-out duration-200 -top-1.25;
        }
      }
    }
  }

  body.groovy {
    .projectBox {
      @apply shadow-[0px_6px_0px_0px_hsl(0,0%,0%,25%)];

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply mt-px font-(family-name:--font-family-groovy-copy);
      }

      .carouselArrow {
        @apply text-white bg-groovy-red border-groovy-red;

        &:hover {
          @apply text-white bg-groovy-red/80;
        }
      }
    }

    .miniGallery div .box {
      @apply h-[170px] border-gray-300 relative top-0;

      svg.iconSVG {
        @apply w-auto relative top-0;
      }

      p {
        @apply text-gray-800 text-[.85rem] relative top-0 font-(family-name:--font-family-groovy-copy);
      }

      &:hover {
        @apply ease-in-out duration-200;

        svg.iconSVG {
          @apply ease-in-out duration-200 -top-1.25;
        }

        p {
          @apply text-center text-gray-800 ease-in-out duration-200 -top-1.25 font-(family-name:--font-family-groovy-copy);
        }
      }
    }
  }

  body.techy {
    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,0%,0%,90%)] rounded-none;

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply uppercase mt-px font-(family-name:--font-family-techy-copy);
      }

      .carouselArrow {
        @apply text-[.7rem] text-white bg-techy-blue-tech border-techy-blue-tech;

        &:hover {
          @apply text-white bg-techy-blue-tech/80;
        }
      }
    }

    .miniGallery div .box {
      @apply h-[167px] border border-gray-200 relative top-0;

      svg.iconSVG {
        @apply w-auto ease-in-out relative top-0;
      }

      p {
        @apply text-gray-800 text-[.85rem] text-center ease-in-out relative top-0 font-(family-name:--font-family-groovy-copy);
      }

      &:hover {
        @apply border-2 border-techy-mango ease-in-out duration-200 top-0;

        svg.iconSVG {
          @apply ease-in-out duration-200 -top-1.25;
        }

        p {
          @apply text-center text-gray-800 ease-in-out duration-200 -top-1.25 font-(family-name:--font-family-groovy-copy);
        }
      }
    }
  }

  body.corp {
    .projectBox {
      @apply bg-base-off-white shadow-[0px_1px_1px_0px_hsl(0,0%,0%,50%)];

      @media (max-width: 630px) {
        @apply min-h-[386px];
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply mt-px font-(family-name:--font-family-corp-head);
      }

      .carouselArrow {
        @apply text-white bg-corp-blue-dark tracking-wider shadow-none rounded-xs border border-corp-blue-dark;

        &:hover {
          @apply text-white bg-[hsla(205,98%,17%,0.85)];
        }
      }
    }

    .miniGallery div .box {
      @apply h-[183px] border border-[#D7E7F3] relative ease-in-out duration-200 top-0;

      svg.iconSVG {
        @apply w-auto ease-in-out duration-200 relative top-0;
      }

      p {
        @apply tracking-wider text-center text-gray-800 text-[.85rem] ease-in-out relative duration-200 top-0 font-(family-name:--font-family-corp-copy);
      }

      &:hover {
        @apply border border-[#abcbe3] ease-in-out duration-200 top-0;

        svg.iconSVG {
          @apply ease-in-out duration-200 -top-1.25;
        }

        p {
          @apply ease-in-out duration-200 -top-1.25;
        }
      }
    }
  }

  body.anthro {
    .projectBox {
      position: relative;
      z-index: 20;
      background: #050d05;
      border: 2px solid #33ff33;
      box-shadow:
        0 0 0 1px #0a1a0a,
        0 0 16px rgba(51, 255, 51, 0.2),
        4px 4px 0 #000;
      border-radius: 0;
      padding-top: 0.3rem;
      padding-bottom: 0.5rem;
    }

    .miniGallery {
      @apply grid-cols-2;

      @container (max-width: 300px) {
        @apply grid-cols-1;
      }

      @container (min-width: 420px) {
        @apply grid-cols-3;
      }

      @container (min-width: 700px) {
        @apply grid-cols-6;
      }
    }
  }

  body.punk {
    .projectBox {
      @apply rounded-none bg-white/70 shadow-[0px_1px_1px_0px_hsl(0,0%,0%,50%)];

      @media (max-width: 1024px) {
        @apply min-h-min;
      }

      p {
        @apply text-base-black;
      }

      .projectHead {
        @apply mt-px font-(family-name:--font-family-punk-copy);
      }

      .carouselArrow {
        @apply text-white bg-punk-magenta pt-[.1rem] pr-2 pb-[.2rem] pl-[.4rem] shadow-none rounded-xs;

        &:hover {
          @apply bg-punk-magenta/80;
        }
      }
    }

    .miniGallery {
      @apply top-0;

      div .box {
        @apply h-[183.5px] border-gray-300;

        svg.iconSVG {
          @apply w-auto ease-in-out duration-200 relative top-0;
        }

        p {
          @apply text-center text-gray-800 tracking-wider text-[.85rem] ease-in-out relative duration-200 top-0 font-(family-name:--font-family-punk-copy);
        }

        &:hover {
          @apply border border-[#abcbe3] ease-in-out duration-200 top-0;

          svg.iconSVG {
            @apply ease-in-out duration-200 -top-1.25;
          }

          p {
            @apply ease-in-out duration-200 -top-1.25;
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
