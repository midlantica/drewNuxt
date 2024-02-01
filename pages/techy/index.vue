<script setup>
 import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `techy`
    }
  })

  import Navvy from './components/Navvy'
  import HeadAndCopy from './components/HeadAndCopy'
  // import Skills from '../../components/Skills'
  // import About from '../../components/About'
  // import Quote from '../../components/Quote.vue'
  // import Carousel from '../../components/Carousel/Carousel'
</script>

<template>
  <transition name="fade" appear>
    <div>
      <transition name="topDown" appear>
        <header class="shadow-none text-base-ivory bg-techy-mango">
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <main class="mainGrid">
          <transition name="bounce3" appear>
            <div class="copyArea">
              <HeadAndCopy />
            </div>
          </transition>

          <transition name="bounce4" appear>
            <div class="slides">
              <Carousel />
            </div>
          </transition>

          <transition name="bounce8" appear>
            <About />
          </transition>

          <transition name="bounce10" appear>
            <Skills />
          </transition>
        </main>
      </transition>

      <footer class="shadow-none text-base-ivory bg-techy-mango">
        <Quote />
      </footer>
    </div>
  </transition>
</template>

<style scoped>
  .mainGrid {
    @apply grid-cols-[7fr_6fr] grid mt-0 mx-6 mb-2 gap-y-4 gap-x-0;

    @media (min-width: theme("screens.breakXlg")) and (min-device-width: theme("screens.breakMd")) {
      @apply grid-cols-[7fr_6fr] mt-0 mx-4 mb-2;
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-1 mt-0 mx-4 mb-2;
    }

    /* // IPAD LANDSCAPE */
    @media (min-device-width: theme("screens.breakMd")) and (max-device-width: theme("screens.breakXlg")) and (orientation: landscape) {
      @apply grid-cols-1 mt-0 mx-6 mb-2;
    }

    /* // IPAD PRO LANDSCAPE */
    @media (min-width: theme("screens.breakXlg")) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply grid-cols-[7fr_6fr] mt-0 mx-6 mb-2;
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    /* // IPAD LANDSCAPE */
    @media (min-device-width: theme("screens.breakMd")) and (max-device-width: theme("screens.breakXlg")) and (orientation: landscape) {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    /* // IPAD PRO LANDSCAPE */
    @media (min-width: theme("screens.breakXlg")) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 -mt-20;

    /* // IPAD LANDSCAPE */
    @media (min-device-width: theme("screens.breakMd")) and (max-device-width: theme("screens.breakXlg")) and (orientation: landscape) {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5.5em];
    }

    /* // IPAD PRO LANDSCAPE */
    @media (min-width: theme("screens.breakXlg")) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5rem];
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 top-0 mt-0;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 mt-0;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 mt-0;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    /* // IPAD LANDSCAPE */
    @media (min-device-width: theme("screens.breakMd")) and (max-device-width: theme("screens.breakXlg")) and (orientation: landscape) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2;
    }

    /* // IPAD PRO LANDSCAPE */
    @media (min-width: theme("screens.breakXlg")) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-2 col-end-3 row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }

  .skillsGrid {
    @apply col-span-full row-start-3 row-end-4;

    /* // IPAD LANDSCAPE */
    @media (min-device-width: theme("screens.breakMd")) and (max-device-width: theme("screens.breakXlg")) and (orientation: landscape) {
      @apply col-span-full row-start-3 row-end-4;
    }

    /* // IPAD PRO LANDSCAPE */
    @media (min-width: theme("screens.breakXlg")) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-span-full row-start-3 row-end-4;
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-start-3 row-end-3;
    }
  }

</style>