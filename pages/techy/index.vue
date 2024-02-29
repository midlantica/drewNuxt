<script setup>
  import { nextTick } from 'vue';
  import { ExtrasC } from '#components'

  definePageMeta({
    title: 'Techy',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false,
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Techy`,
    bodyAttrs: {
      class: `techy`,
    }
  })

  const showExtras = ref(true);

  onMounted(async () => {
    await nextTick();
    showExtras.value = true;
  });

  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<template>
  <transition name="topDown" appear>
    <TechyNavvy @toggleExtras="toggleExtras" />
  </transition>

  <main class="mainGrid" v-if="showExtras">
    <transition name="bounce2" appear>
      <TechyHeadAndCopy class="copyArea" @toggleExtras="toggleExtras" />
    </transition>

    <transition name="bounce4" appear>
      <Carousel class="slides" />
    </transition>

    <transition name="bounce7" appear>
      <Skills />
    </transition>

    <transition name="bounce10" appear>
      <About />
    </transition>

  </main>

  <main class="mainGrid" v-if="!showExtras">
    <component :is="ExtrasC" class="col-span-2" />
  </main>

  <footer class="shadow-none text-base-ivory bg-techy-mango">
    <Quote />
  </footer>
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