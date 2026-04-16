<script setup>
  const { store } = usePageSetup('Punk');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <PunkNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>

    <main v-if="store.isShowContent" class="mainGrid">
      <transition name="bounce2" appear>
        <PunkHeadAndCopy
          class="copyArea"
          :is-show-content="store.isShowContent"
          @toggle-extras="store.toggleExtras"
        />
      </transition>

      <transition name="bounce4" appear>
        <Carousel class="slides" />
      </transition>

      <transition name="bounce6" appear>
        <Skills />
      </transition>

      <transition name="bounce8" appear>
        <About class="aboutArea" />
      </transition>
    </main>

    <main v-else class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </main>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid grid-cols-2 gap-x-2 gap-y-2 shadow-none py-0 px-4 bg-transparent;

    @media (max-width: 1024px) {
      @apply grid-cols-1 gap-x-1 gap-y-2;
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col self-end;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2;
    }
  }

  .skillsGrid {
    @apply col-start-1 col-end-3 row-start-3 row-end-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .aboutArea {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }
</style>
