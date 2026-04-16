<script setup>
  const { store } = usePageSetup('Bourbon');
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
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </main>

    <footer
      class="bg-[url(/img/bg/bg_bag_dk.webp)] shadow-dru-shadow h-3 col-start-1 col-end-3 bg-repeat"
    />
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-span-full;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .skills {
    @apply row-span-2;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-4;
    }
  }

  .about {
    @apply col-start-2 z-10;

    @media (max-width: 1024px) {
      @apply col-start-1 col-span-2 row-start-6;
    }

    @media (max-width: 430px) {
      @apply m-0;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-7;
    }

    @media (max-width: 430px) {
      @apply m-0;
    }
  }
</style>
