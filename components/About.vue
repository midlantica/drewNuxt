<!-- // components/About.vue -->
<template>
  <div
    v-show="showAbout"
    class="about"
    ref="target"
    :style="{ transform: cardTransform, transition: 'transform 0.25 ease-out' }"
    @click="playSound"
  >
    <div class="flagBox">
      <div class="flag">&nbsp;</div>
    </div>
    <p
      class="leading-[1.4em] text-[0.9em] block justify-center content-center items-center self-center tracking-wider text-left text-gray-600"
    >
      {{ copy.aboutCopy }}
    </p>
  </div>
</template>

<script setup>
  import { useMouseInElement } from '@vueuse/core';
  import { Howl, Howler } from 'howler';
  import yeehawSound from '/yeehaw.mp3';
  import jollyGoodSound from '/jollyGood.mp3';

  // Create refs
  const copy = useCopy();
  const showAbout = ref(true);
  const isActive = ref(false);
  const audioInitialized = ref(false);

  const target = ref(null);
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

  // Dynamic card transform
  const cardTransform = computed(() => {
    const MAX_ROTATION = 10;
    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(
      2
    );
    const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2);

    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  });

  // Initialize audio context and sounds
  const initializeAudioContext = () => {
    if (!audioInitialized.value) {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx
          .resume()
          .then(() => {
            audioInitialized.value = true;
          })
          .catch(error => {
            console.error('Failed to resume AudioContext:', error);
          });
      } else if (!Howler.ctx) {
        console.warn('Howler AudioContext is not available.');
      } else {
        audioInitialized.value = true; // AudioContext already active
      }
    }
  };

  // Play sound
  const playSound = () => {
    try {
      if (!audioInitialized.value) {
        initializeAudioContext();
      }

      const yeehaw = new Howl({ src: [yeehawSound], volume: 0.75 });
      const jollyGood = new Howl({ src: [jollyGoodSound], volume: 0.75 });

      if (isActive.value) {
        jollyGood.play();
      } else {
        yeehaw.play();
      }

      isActive.value = !isActive.value;
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  // Props (if necessary)
  const props = defineProps(['store.isShowContent', 'store.selectedBtn']);

  // Mounted hook
  onMounted(() => {
    showAbout.value = true;
  });
</script>

<style scoped>
  .about {
    @apply bg-[hsl(47.01deg_93.99%_77.67%)] pt-4 pb-3 px-6 flex flex-row flex-nowrap gap-4 justify-center items-center content-center self-center rounded-sm cursor-pointer shadow-[0px_1px_2px_0px_#00000080];

    @media (max-width: theme('screens.breakXlg')) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: theme('screens.breakXxsm')) {
      @apply flex-col;
    }
  }

  .flag {
    @apply block bg-no-repeat bg-center bg-contain w-[100px] h-[60px] bg-[url('/img/brit_amer_flag.svg')];
  }

  .flagBox {
    @apply flex flex-col content-center items-center justify-center self-center float-left clear-left basis-auto;

    @media (max-width: theme('screens.breakXxsm')) {
      @apply mb-2;
    }
  }

  /* ###################### */
  .corp {
    .about {
      @apply shadow-none bg-[#6bbaff42];

      p {
        @apply text-corp-black;
      }
    }

    .flag {
      filter: hue-rotate(236deg) sepia(0.6);
    }
  }

  .punk .about {
    @apply mb-4;

    p {
      @apply my-1 mx-auto;
    }
  }

  .techy .about {
    @apply bg-techy-blueTech;

    p {
      @apply text-white my-0 mx-auto font-techyCopy;
    }
  }

  .corp .about {
    p {
      @apply text-[0.9rem] tracking-[0.02rem] leading-6 m-0 font-medium font-corpCopy;

      @media (max-width: theme('screens.breakXlg')) {
        @apply leading-7;
      }

      @media (max-width: theme('screens.breakSm')) {
        @apply leading-6;
      }
    }
  }

  .modern .about {
    @apply flex flex-col w-full gap-4 rounded-[3px] my-auto shadow-[2px_2px_10px_0px_black];

    @media (max-width: 850px) {
      @apply flex-row;
    }

    @media (max-width: 550px) {
      @apply flex-col;
    }

    .flagBox {
      @apply w-auto;
    }

    .flag {
      @apply block bg-no-repeat content-center items-center justify-center self-center w-[100px] h-[60px] bg-[url("/img/brit_amer_flag.svg")] bg-contain mr-0 bg-center;
    }

    p {
      @apply tracking-normal leading-6 m-0 font-light text-base-ivory font-modernCopy text-[.8rem];
    }
  }
</style>
