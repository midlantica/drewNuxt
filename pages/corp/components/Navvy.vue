<template>
  <header v-show="showNavvy" class="shadow-none">
    <nav class="flex flex-row flex-wrap items-center pt-[2em] px-[2em] pb-0 justify-center mb-4">
      <section class="flex flex-row flex-wrap w-full max-[830px]:content-center justify-center gap-x-4">
        <div class="flex flex-wrap content-center text-center max-[830px]:m-auto gap-2 grow">
          <div class="flex flex-row flex-wrap content-center justify-center w-full gap-6 cursor-pointer breakXsm:w-full"
            @click="$emit('toggleExtras')"
          >
            <div class="content-center m-0 bg-[url('/img/drew_mug_red.png')] inline-block w-[80px] h-[80px] bg-[length:151%] bg-[-39px_-59px] bg-no-repeat bg-corp-accentRed rounded-[1px] shadow-[0px_0px_1px_1px_#00000026] hue-rotate-[210deg] grayscale-[50%] jelloHorizontal" />
            <div class="flex flex-col flex-wrap">
              <drewHarper class="mt-2 breakMd:h-[83px] breakSm:h-auto cursor-pointer" />
              <div class="flex flex-row flex-wrap justify-center ">
                <h3 class="font-corpCopy text-[115%] transition duration-[.25s] ease-in font-bold text-center leading-loose uppercase tracking-[0.16rem] text-corp-blueDark m-0 p-0">
                  {{ copy.uiuxDesigner }} +
                </h3>
                <h3 class="font-corpCopy text-[115%] transition duration-[.25s] ease-in font-bold text-center leading-loose uppercase tracking-[0.16rem] ml-2 text-corp-blueDark m-0 p-0">
                  {{ copy.vizDesigner }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <section class="contact">
          <p class="leading-normal font-corpCopy text-[1.3em] tracking-[.01em] items-center text-center grow font-semibold lowercase">
            <a :href="`${copy.portfolio}`" target="_blank" class="text-corp-blueDark hover:border-b-2 hover:border-dotted hover:border-corp-blueMid">PDF Resume</a>
          </p>
          <p class="leading-normal font-corpCopy text-[1.3em] tracking-[.01em] items-center text-center grow font-semibold lowercase">
            <a :href="`mailto:` + `${copy.druEmail}`" class="text-corp-blueDark hover:border-b-2 hover:border-dotted hover:border-corp-blueMid">{{ copy.druEmail }}</a>
          </p>
        </section>
      </section>
    </nav>
  </header>
</template>

<script setup>
  import drewHarper from '../components/navvyArt/drewHarper.vue'
  const copy = useCopy()
  const { isShowContent, toggleExtras } = useToggleExtras();
  const showNavvy = ref(false)
  
  const props = defineProps(['isShowContent'])

  onMounted(() => {
    showNavvy.value = true
  })
</script>

<style scoped>

  .contact {
    @apply grow flex flex-col flex-wrap justify-center items-center content-center m-auto self-baseline gap-x-4 gap-y-2;

    @media (max-width: theme("screens.breakLg")) {
      @apply ml-0 flex-row mt-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply mt-[.4em] flex-row;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply mt-4 transition duration-[.25s] ease-in flex-row;
    }

    @media (max-width: 520px) {
      @apply mt-4 transition duration-[.25s] ease-in flex-col;
    }

    p {
      /* // @apply font-corpCopy text-[1.3em] tracking-[.01em] items-center text-center leading-[1.5em] grow font-semibold lowercase; */

      @media (max-width: theme("screens.breakLg")) {
        @apply justify-center;

        &:nth-child(1) {
          @apply text-right my-0 mx-1;
        }

        &:nth-child(2) {
          @apply text-left my-0 mx-1;
        }
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply justify-center leading-5 mb-[-4px] text-center;
      }

    }

  }
</style>
