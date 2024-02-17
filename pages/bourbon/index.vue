<template>
  <div>
    <Transition name="fade" appear>
      <div class="relative" key="header">
        <transition name="topDown" appear>
          <header class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
            <BourbonNavvy @toggleExtras="toggleExtras" />
          </header>
        </transition>

        <Transition name="bounce2">
          <div>
            <main class="mainGrid"
              v-if="showExtras"
              :class="[{ showExtras: '' }, 'grid-cols-2' ]"
            >
            <!-- <div :class="[{ showExtras: 'grid-cols-1' }, 'grid-cols-2' ]"></div> -->

              <transition name="bounce3" appear>
                <div class="copyArea">
                  <BourbonHeadAndCopy key="copy"
                  @toggleExtras="toggleExtras" />
                </div>
              </transition>

              <transition name="bounce6" appear >
                <Skills key="skills" />
              </transition>

              <div class="slides" key="slides">
                <transition name="bounce4" appear>
                  <Carousel />
                </transition>
              </div>

              <transition name="bounce7" appear>
                <About key="about" />
              </transition>

              <transition name="bounce8" appear>
                <Quote key="quote" />
              </transition>

            </main>

            <main class="mainGrid" v-if="!showExtras">
              <component :is='ExtrasC' />
            </main>

          </div>
        </Transition>

        <footer class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
          <nav class="h-3" />
        </footer>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { useCopy } from "~/store/copy"
  import { ExtrasC } from '#components'
  const copy = useCopy()

  definePageMeta({
    title: 'Bourbon'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Bourbon`,
    bodyAttrs: {
      class: `bourbon`
    }
  })

  const showExtras = ref(true);

  // Method to toggle the visibility of the Extras section
  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";
  .mainGrid {
    @apply grid grid-cols-1 my-4 mr-6 ml-4 gap-x-0 gap-y-4;
  }

  .copyArea {
    @apply delay-[250ms] col-start-1 col-end-2 row-start-1 row-end-4 relative;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-span-full;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply mt-1 gap-y-0;
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

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }
  }
</style>
