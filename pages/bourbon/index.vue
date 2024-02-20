<template>
  <div>

    <!-- HEADER -->
    <transition name="topDown" appear>
      <header class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow relative">
        <BourbonNavvy @toggleExtras="toggleExtras" />
      </header>
    </transition>

    <!-- CONTENT -->
    <transition name="nested" appear>
      <div class="bounce2">
        <main class="mainGrid" v-if="showExtras">

          <!-- REGULAR CONTENT -->
          <transition name="bounce3" appear>
            <BourbonHeadAndCopy class="copyArea" @toggleExtras="toggleExtras" />
          </transition>

          <transition name="bounce4" appear>
            <Skills />
          </transition>

          <transition name="bounce9" appear>
            <Carousel class="slides" />
          </transition>

          <transition name="bounce7" appear>
            <About />
          </transition>

          <transition name="bounce8" appear>
            <Quote />
          </transition>

        </main>

        <!-- EXTRAS CONTENT -->
        <main v-if="!showExtras">
          <component :is='ExtrasC' />
        </main>

      </div>
    </transition>

    <!-- FOOTER -->
    <!-- <transition name="" appear> -->
      <footer class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
        <nav class="h-3" />
      </footer>
    <!-- </transition> -->

  </div>
</template>

<script setup>
  import { onMounted, nextTick } from 'vue';
  import { useCopy } from "~/store/copy"
  import { ExtrasC, BourbonNavvy, BourbonHeadAndCopy, Carousel, About, Skills, Quote } from '#components'

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

  onMounted(async () => {
    await nextTick();
    showExtras.value = true;
    // Your code that relies on the rendered template goes here
  });

  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";
  .mainGrid {
    @apply grid grid-cols-2 my-4 mr-6 ml-4 gap-x-0 gap-y-4;

    @media (max-width: theme("screens.breakXlg")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: theme("screens.breakLg")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: theme("screens.breakSm")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }
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

  .nested-enter-active .bounce3,
  .nested-leave-active .bounce3 {
    transition: all 0.3s ease-in-out;
  }

  .nested-enter-from :has([class^="bounce"]),
  .nested-leave-to :has([class^="bounce"]) {
    transform: translateX(30px);
    opacity: 0;
  }


  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
  }

  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
