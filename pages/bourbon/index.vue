<script setup>
  import { onMounted, nextTick } from 'vue';
  import { useCopy } from "~/store/copy"
  import { ExtrasC, BourbonNavvy, BourbonHeadAndCopy, Carousel, About, Skills, Quote } from '#components'

  const copy = useCopy()

  definePageMeta({
    title: 'Bourbon',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false,
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Bourbon`,
    bodyAttrs: {
      class: `bourbon`
    }
  })

  // const showContent = ref(true);
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

<template>
  <div class="grid grid-cols-2 gap-x-0 gap-y-3">

    <transition name="topDown" appear>
      <BourbonNavvy @toggleExtras="toggleExtras" />
    </transition>

    <Transition name="transMainGrid">
      <div class="grid grid-cols-2 col-start-1 col-end-3 px-4 grid-rows-auto gap-x-0 gap-y-2" v-if="showExtras">
        <transition name="bounce2" appear>
          <BourbonHeadAndCopy class="copyArea transHeadAndCopy" @toggleExtras="toggleExtras" />
        </transition>
        <transition name="bounce6" appear>
          <Skills class="skills" />
        </transition>
        <transition name="bounce4" appear>
          <Carousel class="slides" />
        </transition>
        <transition name="bounce7" appear>
          <About class="about" />
        </transition>
        <transition name="bounce8" appear>
          <Quote class="quoteBlock" />
        </transition>
      </div>
    </Transition>


    <Transition name="transMainGrid">
      <div class="grid w-full col-span-2 px-4 gap-x-0 gap-y-2" v-if="!showExtras">
        <component :is="ExtrasC" class="col-span-2" />
      </div>
    </Transition>

    <footer class="col-start-1 col-end-3 bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow h-3" />

  </div>
</template>


<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";

  .mainGrid {
    /* @apply grid grid-cols-2 my-4 mr-6 ml-4 gap-x-0 gap-y-4; */

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
    @apply col-start-1 col-end-2 row-start-1;

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
  .skills {
    @apply row-span-2 ;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-4 ;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-4 ;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-4 ;
    }
  }

  .about {
    @apply col-start-2 z-10;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply mt-1 gap-y-0;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }
  }

  :root {
    --timebase: 1s;
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

    10% {
      transform: scale(1.015);
      opacity: 1;
    }
    50% {
      transform: scale(.5);
      opacity: .5;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }


  .bounce-enter-active { animation: bounceIn calc(var(--timebase) * .25); }
  .bounce-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce2-enter-active { animation: bounceIn calc(var(--timebase) * .75); }
  .bounce2-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce3-enter-active { animation: bounceIn calc(var(--timebase) * 1); }
  .bounce3-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce4-enter-active { animation: bounceIn calc(var(--timebase) * 1.25); }
  .bounce4-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce5-enter-active { animation: bounceIn calc(var(--timebase) * 1.5); }
  .bounce5-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce6-enter-active { animation: bounceIn calc(var(--timebase) * 1.75); }
  .bounce6-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce7-enter-active { animation: bounceIn calc(var(--timebase) * 2.0); }
  .bounce7-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce8-enter-active { animation: bounceIn calc(var(--timebase) * 2.25); }
  .bounce8-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce9-enter-active { animation: bounceIn calc(var(--timebase) * 2.5); }
  .bounce9-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce10-enter-active { animation: bounceIn calc(var(--timebase) * 2.75); }
  .bounce10-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce11-enter-active { animation: bounceIn calc(var(--timebase) * 3); }
  .bounce11-leave-active { animation: bounceOut calc(var(--timebase) * .25); }

  .bounce12-enter-active { animation: bounceIn calc(var(--timebase) * 3.5); }
  .bounce12-leave-active { animation: bounceOut calc(var(--timebase) * .25); }


</style>
