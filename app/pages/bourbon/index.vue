<script setup>
  import { ExtrasC } from '#components';

  const store = useToggleExtrasStore();

  definePageMeta({
    title: 'Bourbon',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Bourbon`,
    bodyAttrs: {
      class: `bourbon`
    }
  });

  onMounted(() => {
    store.initialize();
  });
</script>

<template>
  <div>
  <transition name="topDown" appear>
    <BourbonNavvy
      :is-show-content="store.isShowContent"
      @toggle-extras="store.toggleExtras"
    />
  </transition>

  <main
    v-if="store.isShowContent"
    class="grid-rows-auto grid grid-cols-2 col-span-2 gap-x-2 gap-y-3 px-4 my-2"
  >
    <transition name="bounce2" appear>
      <BourbonHeadAndCopy
        class="copyArea"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>
    <transition name="bounce4" appear>
      <Carousel class="slides" />
    </transition>
    <transition name="bounce6" appear>
      <Skills class="skills" />
    </transition>
    <transition name="bounce8" appear>
      <About class="about" />
    </transition>
    <transition name="bounce10" appear>
      <Quote class="quoteBlock" />
    </transition>
  </main>

  <main v-else class="w-full grid col-span-2 gap-x-0 gap-y-2 px-4">
    <component
      :is="ExtrasC"
      class="col-span-2"
      :is-show-content="store.isShowContent"
      @toggle-extras="store.toggleExtras"
    />
  </main>

  <footer
    class="bg-[url(/img/bg/bg_bag_dk.jpg)] shadow-dru-shadow h-3 col-start-1 col-end-3 bg-repeat"
  />
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @media (max-width: 1024px) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: 840px) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: 630px) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }
  }
  .copyArea {
    @apply col-start-1 col-end-2 row-start-1;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-span-full;
    }
  }
  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }
  .skills {
    @apply row-span-2;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-4;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-4;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-4;
    }
  }
  .about {
    @apply col-start-2 z-10;

    @media (max-width: 1024px) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: 430px) {
      @apply m-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply mt-1 gap-y-0;
    }
  }
  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: 430px) {
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
      transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
</style>
