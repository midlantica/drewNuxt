<script setup>
  import { ExtrasC } from '#components';
  const store = useToggleExtrasStore();

  definePageMeta({
    title: 'Corp',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Corp`,
    bodyAttrs: {
      class: `corp`
    }
  });

  const props = defineProps(['store.isShowContent', 'store.selectedBtn']);

  onMounted(() => {
    store.initialize();
  });
</script>

<template>
  <transition
    name="topDown"
    appear
  >
    <CorpNavvy
      @toggleExtras="store.toggleExtras"
      :isShowContent="store.isShowContent"
    />
  </transition>

  <main
    v-if="store.isShowContent"
    class="mainGrid"
  >
    <transition
      name="bounce2"
      appear
    >
      <CorpHeadAndCopy />
    </transition>

    <transition
      name="bounce4"
      appear
    >
      <Skills />
    </transition>

    <transition
      name="bounce6"
      appear
    >
      <Carousel class="slides" />
    </transition>

    <transition
      name="bounce8"
      appear
    >
      <About />
    </transition>
  </main>

  <main
    v-else
    class="mainGrid"
  >
    <component
      :is="ExtrasC"
      class="col-span-2"
      @toggleExtras="store.toggleExtras"
      :isShowContent="store.isShowContent"
    />
  </main>

  <footer class="shadow-none">
    <Quote />
  </footer>
</template>

<style scoped>
  .mainGrid {
    @apply grid-cols-2 grid gap-y-2 gap-x-0 ml-4 mb-4 mr-6;

    @media (max-width: theme('screens.breakXlg')) {
      @apply grid-cols-1 gap-y-2 mx-4;
    }

    @media (max-width: theme('screens.breakLg')) {
      /* // */
    }

    @media (max-width: theme('screens.breakSm')) {
      /* // */
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    @media (max-width: theme('screens.breakXlg')) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1 mb-[-1em];
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 -mt-4;

    @media (max-width: theme('screens.breakXlg')) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }
  }

  .skillsGrid {
    @apply col-start-1 col-end-2 row-start-2 row-end-2;

    @media (max-width: theme('screens.breakXlg')) {
      /* // */
    }

    @media (max-width: theme('screens.breakLg')) {
      /* // */
    }

    @media (max-width: theme('screens.breakSm')) {
      /* // */
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    @media (max-width: theme('screens.breakXlg')) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3 row-end-3;

    @media (max-width: theme('screens.breakXlg')) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }
  }
</style>
