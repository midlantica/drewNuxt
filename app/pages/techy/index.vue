<script setup>
  import { ExtrasC } from '#components';

  definePageMeta({
    title: 'Techy',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Techy`,
    bodyAttrs: {
      class: `techy`
    }
  });

  const store = useToggleExtrasStore();

  onMounted(() => {
    store.initialize();
  });
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <TechyNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>

    <main v-if="store.isShowContent" class="mainGrid">
      <transition name="bounce2" appear>
        <TechyHeadAndCopy
          class="copyArea"
          :is-show-content="store.isShowContent"
          @toggle-extras="store.toggleExtras"
        />
      </transition>

      <transition name="bounce4" appear>
        <Carousel class="slides" />
      </transition>

      <transition name="bounce6" appear>
        <Skills class="skillsGrid" />
      </transition>

      <transition name="bounce8" appear>
        <About />
      </transition>
    </main>

    <main v-else class="mainGrid">
      <component
        :is="ExtrasC"
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </main>

    <footer class="bg-techy-mango text-base-ivory shadow-none">
      <Quote />
    </footer>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  /* === BASE (mobile-first, single column) === */
  .mainGrid {
    @apply grid mt-0 mx-4 mb-2 gap-y-4 gap-x-0;
    grid-template-columns: 1fr;
  }

  /* All items stack in single column by default */
  .copyArea {
    @apply row-start-1;
  }
  .slides {
    @apply row-start-2 z-10 mt-0;
  }
  .skillsGrid {
    @apply row-start-3;
  }
  .about {
    @apply row-start-4;
  }

  /* === DESKTOP (2-column layout) === */
  @media (min-width: 1025px) {
    .mainGrid {
      @apply mx-6 mb-2;
      grid-template-columns: 7fr 6fr;
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }
    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5rem];
    }
    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }
    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  /* === IPAD PRO LANDSCAPE === */
  @media (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    .mainGrid {
      @apply mx-6 mb-2;
      grid-template-columns: 7fr 6fr;
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }
    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5rem];
    }
    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }
    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  /* === IPAD LANDSCAPE === */
  @media (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .slides {
      @apply mt-[-5.5em];
    }
  }
</style>
