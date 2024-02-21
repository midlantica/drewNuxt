<template>
  <!-- <div> -->

    <!-- HEADER -->
    <transition name="topDown" appear>
      <header class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
        <BourbonNavvy @toggleExtras="toggleExtras" />
      </header>
    </transition>

    <!-- CONTENT -->
    <transition name="bounce" appear>
      <main class="mainGrid" v-if="showExtras">

        <!-- <transition name="bounce2" appear> -->
          <BourbonHeadAndCopy class="copyArea" @toggleExtras="toggleExtras" />
        <!-- </transition> -->

        <!-- <transition name="bounce4" appear> -->
          <Skills class="skills" />
        <!-- </transition> -->

        <!-- <transition name="bounce5" appear> -->
          <Carousel class="slides" />
        <!-- </transition> -->

        <!-- <transition name="bounce6" appear> -->
          <About class="about" />
        <!-- </transition> -->

        <!-- <transition name="bounce7" appear> -->
          <Quote class="quoteBlock" />
        <!-- </transition> -->

      </main>
    </transition>

      <!-- EXTRAS CONTENT -->
    <transition name="fade" appear>
      <main v-if="!showExtras">
        <component :is="ExtrasC" class="extrasBlock" />
      </main>
    </transition>

    <!-- FOOTER -->
    <footer class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
      <nav class="h-3" />
    </footer>

  <!-- </div> -->
</template>

<script setup>
  import { onMounted, nextTick } from 'vue';
  import { useCopy } from "~/store/copy"
  import { ExtrasC, BourbonNavvy, BourbonHeadAndCopy, Carousel, About, Skills, Quote } from '#components'

  const copy = useCopy()

  const layoutCustomProps = useAttrs()
  console.log(layoutCustomProps.title)

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

  :root {
    --timebase: 1s;
  }

  .bounce-enter-from .copyArea,
  .bounce-enter-from .skills,
  .bounce-enter-from .slides,
  .bounce-enter-from .about,
  .bounce-enter-from .quoteBlock,
  .bounce-enter-from .extrasBlock
  {
    /* animation: bounceIn calc(var(--timebase) * .25); */
    /* animation-delay: 5s; */
    /* background: red; */
  }

  .bounce-enter-active .copyArea,
  .bounce-enter-active .skills,
  .bounce-enter-active .slides,
  .bounce-enter-active .about,
  .bounce-enter-active .quoteBlock,
  .bounce-enter-active .extrasBlock
  {
    /* animation: bounceIn calc(var(--timebase) * .25); */
    /* background: purple; */
  }

  .bounce-enter-to .copyArea,
  .bounce-enter-to .skills,
  .bounce-enter-to .slides,
  .bounce-enter-to .about,
  .bounce-enter-to .quoteBlock,
  .bounce-enter-to .extrasBlock
  {
    /* animation: bounceIn calc(var(--timebase) * .25); */
    /* background: yellow; */
  }

  .bounce-leave-from .copyArea,
  .bounce-leave-from .skills,
  .bounce-leave-from .slides,
  .bounce-leave-from .about,
  .bounce-leave-from .quoteBlock,
  .bounce-leave-from .extrasBlock
  {
    /* animation: bounceIn calc(var(--timebase) * .25); */
    /* background: red; */
  }

  .bounce-leave-active .copyArea,
  .bounce-leave-active .skills,
  .bounce-leave-active .slides,
  .bounce-leave-active .about,
  .bounce-leave-active .quoteBlock,
  .bounce-leave-active .extrasBlock
  {
    /* animation: bounceIn calc(var(--timebase) * .25); */
    /* background: purple; */
  }

  .bounce-leave-to .copyArea,
  .bounce-leave-to .skills,
  .bounce-leave-to .slides,
  .bounce-leave-to .about,
  .bounce-leave-to .quoteBlock,
  .bounce-leave-to .extrasBlock
  {
    animation: bounceOut .5s;
    /* background: blue; */
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scale(0);
      opacity: 0;
    }

    95% {
      transform: scale(1.015);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes bounceOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

</style>
