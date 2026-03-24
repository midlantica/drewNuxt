<script setup>
  import { ExtrasC } from '#components';
  const store = useToggleExtrasStore();

  definePageMeta({
    title: 'Groovy',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Groovy`,
    bodyAttrs: {
      class: `groovy`
    }
  });

  onMounted(() => {
    store.initialize();
  });
</script>

<template>
  <div>
  <Transition name="topDown" appear>
    <GroovyNavvyHead
      :is-show-content="store.isShowContent"
      @toggle-extras="store.toggleExtras"
    />
  </Transition>

  <main v-if="store.isShowContent" class="mainGrid">
    <Transition name="bounce5" appear>
      <GroovyHeadAndCopy
        class="copyArea"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </Transition>

    <Transition name="bounce7" appear>
      <Carousel class="slides" />
    </Transition>

    <Transition name="bounce9" appear>
      <About />
    </Transition>

    <Transition name="bounce10" appear>
      <Skills />
    </Transition>
  </main>

  <main v-else class="mainGrid">
    <component
      :is="ExtrasC"
      class="col-span-2"
      :is-show-content="store.isShowContent"
      @toggle-extras="store.toggleExtras"
    />
  </main>

  <Transition name="bounce3" appear>
    <GroovyFooter />
  </Transition>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";
  .mainGrid {
    @apply grid grid-cols-[7fr_6fr] gap-y-4 mt-0 mx-4 mb-2;

    @media (max-width: 1024px) {
      @apply grid-cols-1 mt-0 mx-4 mb-4;
    }

    @media (max-width: 840px) {
    }

    @media (max-width: 630px) {
    }

    @media (max-width: 430px) {
    }

    @media (max-width: 320px) {
    }
  }

  header {
    @apply text-base-ivory bg-groovy-red after:clear-both h-[188px];
  }

  .about {
 @apply bg-groovy-yellow rounded-xl shadow-[0px_6px_0px_0px_hsl(0,_0%,_0%,_25%)];
    font-family: var(--font-family-groovy-head);
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-4;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 z-10 mt-[-9.1rem];

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .skillsGrid {
    @apply col-span-full row-span-3 mt-0;

    @media (max-width: 1024px) {
      @apply row-span-2 mt-0;
    }

    @media (max-width: 840px) {
      @apply row-span-2 mt-0;
    }

    @media (max-width: 630px) {
      @apply row-span-2 mt-0;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-span-2 mb-0;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-span-4;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-span-4;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-span-4;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-span-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-span-5;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-span-5;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-span-5;
    }
  }
</style>
