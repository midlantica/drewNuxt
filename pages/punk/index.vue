<template>

  <transition name="topDown" appear>
    <PunkNavvy @toggleExtras="toggleExtras" :showContent="showContent" />
  </transition>

  <main class="mainGrid" v-if="showExtras">
    <transition name="bounce2" appear>
      <PunkHeadAndCopy class="copyArea" 
        @toggleExtras="toggleExtras" 
        :showContent="showContent" 
      />
    </transition>

    <transition name="bounce4" appear>
      <Carousel class="slides" />
    </transition>

    <transition name="bounce6" appear>
      <Skills />
    </transition>

    <transition name="bounce8" appear>
      <About />
    </transition>
  </main>

  <main class="mainGrid" v-else>
    <component :is="ExtrasC" class="col-span-2" @toggleExtras="toggleExtras"
      :showContent="showContent"
    />
  </main>

</template>

<script setup>
  import { nextTick } from 'vue';
  import { ExtrasC } from '#components'

  definePageMeta({
    title: 'Punk',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false,
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Punk`,
    bodyAttrs: {
      class: `punk`
    }
  })

  const { showExtras, showContent, toggleExtras } = useToggleExtras();

</script>

<style scoped>
  .mainGrid {
    @apply grid grid-cols-2 gap-x-2 gap-y-2 shadow-none py-0 px-4 bg-transparent;

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-1 gap-x-1 gap-y-2;
    }

    @media (max-width: theme("screens.breakLg")) {
      /* // */
    }

    @media (max-width: theme("screens.breakSm")) {
      /* // */
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col self-end;

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
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply gap-y-0;
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

  .skillsGrid {
    @apply col-start-1 col-end-3 row-start-3 row-end-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-start-4 row-end-4;
    }
  }

</style>
