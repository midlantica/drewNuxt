<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `corp`
    }
  })

  import Navvy from './components/Navvy'
  import HeadAndCopy from './components/HeadAndCopy'
  // import Skills from '../../components/Skills'
  // import About from '../../components/About'
  // import Quotes from '../../components/Quote'
  // import Carousel from '../../components/Carousel/Carousel'
</script>

<template>
  <transition name="fade" appear>
    <div>
      <transition name="topDown" appear>
        <header class="shadow-none">
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

          <transition name="bounce9" appear>
            <About />
          </transition>

          <transition name="bounce7" appear>
            <Skills />
          </transition>
        </main>
      </transition>

      <footer class="shadow-none">
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&display=swap');
  .mainGrid {
    @apply grid-cols-2 grid gap-y-2 gap-x-0 ml-4 mb-4 mr-6;

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-1 gap-y-2 mx-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1 mb-[-1em];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 -mt-4;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;

    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }
  }

  .skillsGrid {
    @apply col-start-1 col-end-2 row-start-2 row-end-2;

    @media (max-width: theme("screens.breakXlg")) {
      //
    }

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

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

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3 row-end-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }
  }
</style>
