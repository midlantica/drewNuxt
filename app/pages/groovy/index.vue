<template>
  <div>
    <Transition name="topDown" appear>
      <GroovyNavvyHead
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </Transition>

    <main v-if="store.isShowContent" class="mainGrid">
      <Transition name="bounce5" appear>
        <GroovyHeadAndCopy
          class="copyArea"
          :is-show-content="store.isShowContent"
          @toggle-extras="toggleExtras"
        />
      </Transition>

      <Transition name="bounce7" appear>
        <Carousel class="slides" />
      </Transition>

      <Transition name="bounce9" appear>
        <About class="aboutArea" />
      </Transition>

      <Transition name="bounce10" appear>
        <Skills />
      </Transition>
    </main>

    <main v-else class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </main>

    <Transition name="bounce3" appear>
      <GroovyFooter />
    </Transition>
  </div>
</template>

<script setup>
  const { store, toggleExtras } = usePageSetup('Groovy');
</script>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid grid-cols-[7fr_6fr] gap-y-4 mt-0 mx-4 mb-2;

    @media (max-width: 1024px) {
      @apply grid-cols-1 mt-0 mx-4 mb-4;
    }
  }

  header {
    @apply text-base-ivory bg-groovy-red after:clear-both h-47;

    @media (width < 750px) {
      @apply h-40;
    }

    @media (width < 530px) {
      @apply h-36;
    }
  }

  .about {
    @apply bg-groovy-yellow rounded-xl shadow-[0px_6px_0px_0px_hsl(0,0%,0%,25%)] font-(family-name:--font-family-groovy-head);
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-4;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 z-10 mt-[-9.1rem];

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 mt-0;
    }
  }

  .skillsGrid {
    @apply col-span-full row-span-3 mt-0;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 row-span-1 mt-0;
    }
  }

  .aboutArea {
    @apply col-start-2 col-end-3 row-span-2 mb-0;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-span-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-span-5;
    }
  }
</style>
