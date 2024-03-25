<script setup>
  import { nextTick } from 'vue';
  import { ExtrasC } from '#components'

  definePageMeta({
    title: 'Groovy',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false,
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Groovy`,
    bodyAttrs: {
      class: `groovy`
    }
  })

  const { showExtras, showContent, toggleExtras } = useToggleExtras();

</script>

<template>
  <Transition name="topDown" appear>
    <GroovyNavvyHead
      @toggleExtras="toggleExtras"
      :showContent="showContent"
    />
  </Transition>

  <main v-if="showExtras" class="mainGrid">
    <Transition name="bounce2" appear>
      <GroovyHeadAndCopy class="copyArea" 
        @toggleExtras="toggleExtras" 
        :showContent="showContent" 
      />
    </Transition>

    <Transition name="bounce4" appear>
      <Carousel class="slides" />
    </Transition>

    <Transition name="bounce6" appear>
      <About />
    </Transition>

    <Transition name="bounce8" appear>
      <Skills />
    </Transition>
  </main>

  <main class="mainGrid" v-else>
    <component :is="ExtrasC" class="col-span-2" 
        @toggleExtras="toggleExtras"
        :showContent="showContent"
     />
  </main>

  <GroovyFooter />
</template>

<style scoped>
  .mainGrid {
    @apply grid grid-cols-[7fr_6fr] gap-y-4 mt-0 mx-4 mb-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-1 mt-0 mx-4 mb-4;
    }

    @media (max-width: theme("screens.breakLg")) {

    }

    @media (max-width: theme("screens.breakSm")) {

    }

    @media (max-width: theme("screens.breakXsm")) {

    }

    @media (max-width: theme("screens.breakXxsm")) {

    }
  }

  header {
    @apply text-base-ivory bg-groovy-red after:clear-both h-[188px];
  }

  .about {
    @apply bg-groovy-yellow rounded-xl font-groovyHead shadow-[0px_6px_0px_0px_hsl(0,_0%,_0%,_25%)];
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-4;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1 ;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 z-10 mt-[-9.5rem];

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .skillsGrid {
    @apply col-span-full row-span-3 mt-0;

    @media (max-width: theme("screens.breakXlg")) {
      @apply row-span-2 mt-0;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-span-2 mt-0;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-span-2 mt-0;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-span-2 mb-0;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-span-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-span-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-span-4;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-span-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-span-5;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-span-5;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-span-5;
    }
  }
</style>