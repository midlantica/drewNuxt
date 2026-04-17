<script setup>
  const { store } = usePageSetup('Anthro');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <AnthroNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>

    <main v-if="store.isShowContent" class="mainGrid">
      <transition name="bounce2" appear>
        <AnthroHeadAndCopy
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
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </main>

    <footer class="anthroFooter">
      <Quote />
    </footer>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid mt-0 mx-4 mb-2 gap-y-6 gap-x-0 grid-cols-1;
  }

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

  .anthroFooter {
    @apply bg-[#2c2825] text-[#f5f0e8] shadow-none mt-8;
  }

  @media (min-width: 1025px) {
    .mainGrid {
      @apply mx-8 mb-2 grid-cols-[7fr_6fr];
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 -mt-20;
    }

    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }

    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  @media (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    .mainGrid {
      @apply mx-8 mb-2 grid-cols-[7fr_6fr];
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 -mt-20;
    }

    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }

    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  @media (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .slides {
      @apply mt-[-5.5em];
    }
  }
</style>
