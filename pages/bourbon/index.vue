<template>
  <!-- <div> -->

    <!-- HEADER -->
    <transition name="topDown" appear>
      <header class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
        <BourbonNavvy @toggleExtras="toggleExtras" />
      </header>
    </transition>

    <!-- CONTENT -->
    <!-- <transition name="bounce" appear> -->
      <main class="mainGrid" v-if="showExtras">

        <transition name="bounce2" appear>
          <BourbonHeadAndCopy class="copyArea" @toggleExtras="toggleExtras" key="head" />
        </transition>

        <transition name="bounce4" appear>
          <Skills  key="skills" />
        </transition>

        <transition name="bounce5" appear>
          <Carousel class="slides"  key="slides" />
        </transition>

        <transition name="bounce6" appear>
          <About key="about" />
        </transition>

        <transition name="bounce7" appear>
          <Quote key="quotes" />
        </transition>

      </main>
    <!-- </transition> -->

      <!-- EXTRAS CONTENT -->
    <transition name="bounce2" appear>
      <main v-if="!showExtras">
        <div class="outer">
          <component :is='ExtrasC' />
        </div>
      </main>
    </transition>

    <!-- FOOTER -->
    <footer class="bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow">
      <nav class="h-3" />
    </footer>

  <!-- </div> -->
</template>

<script setup>
  import { onMounted, nextTick } from 'vue';
  import { useCopy } from "~/store/copy"
  import { ExtrasC, BourbonNavvy, BourbonHeadAndCopy, Carousel, About, Skills, Quote } from '#components'

  const copy = useCopy()

  const layoutCustomProps = useAttrs()
  console.log(layoutCustomProps.title)

  definePageMeta({
    title: 'Bourbon'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Bourbon`,
    bodyAttrs: {
      class: `bourbon`
    }
  })

  const showExtras = ref(true);

  onMounted(async () => {
    await nextTick();
    showExtras.value = true;
    // Your code that relies on the rendered template goes here

    // setTimeout(() => {
    //   showExtras.value = true;
    // }, 100); // Adjust the delay as needed

  });

  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";
  .mainGrid {
    @apply grid grid-cols-2 my-4 mr-6 ml-4 gap-x-0 gap-y-4;

    @media (max-width: theme("screens.breakXlg")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: theme("screens.breakLg")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }

    @media (max-width: theme("screens.breakSm")) {
      /* @apply col-start-1 col-end-3 row-span-full; */
    }
  }

  .copyArea {
    @apply delay-[250ms] col-start-1 col-end-2 row-start-1 row-end-4 relative;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-span-full;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-span-full;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply mt-1 gap-y-0;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3 row-end-3;

    @media (max-width: theme("screens.breakXlg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply m-0;
    }
  }


</style>
