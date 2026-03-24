<!-- // components/About.vue -->
<template>
  <div
    v-show="showAbout"
    ref="target"
    class="aboutWrapper pointer-events-auto cursor-pointer"
    @click="playSound"
  >
    <div
      class="about relative z-10 will-change-transform"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out'
      }"
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
  </div>
</template>

<script setup>
  import { useMouseInElement } from '@vueuse/core';
  defineOptions({ name: 'AboutCard' });

  // Create refs
  const copy = useCopy();
  const showAbout = ref(true);
  // Access the global playSound method
  const { $playSound } = useNuxtApp();

  // Play sound
  const playSound = () => {
    $playSound();
  };

  // Mouse tracking — track the stable wrapper, not the transformed card
  const target = ref(null);
  const { elementX, elementY, isOutside, elementHeight, elementWidth } =
    useMouseInElement(target);

  // Use card transform composable
  const { cardTransform } = useCardTransform(
    elementX,
    elementY,
    elementWidth,
    elementHeight,
    isOutside
  );
</script>

<style scoped>
  @reference "../assets/css/tailwind.css";

  .about {
    @apply bg-[hsl(47.01deg_93.99%_77.67%)] pt-4 pb-3 px-6 flex flex-row flex-nowrap gap-4 justify-center items-center content-center self-center rounded-sm shadow-[0px_1px_2px_0px_#00000080];

    @media (max-width: 1024px) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: 840px) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: 320px) {
      @apply flex-col;
    }
  }

  .flag {
    @apply block bg-no-repeat bg-center bg-contain w-[100px] h-[60px] bg-[url('/img/brit_amer_flag.svg')];
  }

  .flagBox {
    @apply flex flex-col content-center items-center justify-center self-center float-left clear-left basis-auto;

    @media (max-width: 320px) {
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
    @apply bg-techy-blue-tech;

    p {
 @apply text-white my-0 mx-auto ;
      font-family: var(--font-family-techy-copy);
    }
  }

  .corp .about {
    p {
 @apply text-[0.9rem] tracking-[0.02rem] leading-6 m-0 font-medium ;
      font-family: var(--font-family-corp-copy);

      @media (max-width: 1024px) {
        @apply leading-7;
      }

      @media (max-width: 630px) {
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
 @apply tracking-normal leading-6 m-0 font-light text-base-ivory text-[.8rem];
      font-family: var(--font-family-modern-copy);
    }
  }
</style>
