<template>
  <div v-show="showQuotes" class="quoteBlock">
    <div @click="previousQuote()" class="arrowBtn" />
    
    <!-- <transition name="fade" appear> -->
      <div class="w-full fade" v-show="currentQuote" :key="qIndex">
        <p class="text-balance" >
          &ldquo;{{ currentQuote.quote }}&rdquo;
          <cite>&ndash; {{ currentQuote.author }}</cite>
        </p>
      </div>
    <!-- </transition> -->
    
    <div @click="nextQuote()" class="arrowBtn" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const quotesStore = useQuotes()
  
  const showQuotes = ref(false)
  const qIndex = ref(0)
  const currentQuote = ref(quotesStore.quotes[qIndex.value])
  let isAnimationPaused = true // Initially set to true to prevent immediate animation

  function nextQuote() {
    qIndex.value = (qIndex.value + 1) % quotesStore.quotes.length
    currentQuote.value = quotesStore.quotes[qIndex.value]
    isAnimationPaused = true // Pause animation after manual navigation
    setTimeout(resumeAnimation, 14000) // Resume animation after X seconds
  }

  function previousQuote() {
    qIndex.value = (qIndex.value - 1 + quotesStore.quotes.length) % quotesStore.quotes.length
    currentQuote.value = quotesStore.quotes[qIndex.value]
    isAnimationPaused = true // Pause animation after manual navigation
    setTimeout(resumeAnimation, 14000) // Resume animation after X seconds
  }

  function resumeAnimation() {
    isAnimationPaused = false
  }

  // Function for automatic navigation without user interaction
  function autoNextQuote() {
    if (!isAnimationPaused) {
      qIndex.value = (qIndex.value + 1) % quotesStore.quotes.length
      currentQuote.value = quotesStore.quotes[qIndex.value]
    }
  }

  onMounted(() => {
    showQuotes.value = true
    // Start animation after a short delay to prevent immediate animation
    setTimeout(() => {
      isAnimationPaused = false
      setInterval(autoNextQuote, 8500); // Change the quote every 5 seconds
    }, 1000); // Delay of 1 second
  })


</script>

<style scoped>
  .arrowBtn {
    @apply text-white select-none p-2 font-normal font-sans;

    &:hover {
      @apply text-[yellow] cursor-pointer;
    }

    &:first-of-type:before {
      @apply block content-['<'];
    }

    &:last-of-type:before {
      @apply block content-['>'];
    }

  }

  .quoteBlock {
    @apply flex justify-center items-center pt-2 px-4 pb-2 text-center m-auto w-full basis-auto min-w-full min-h-[5rem] leading-normal text-[0.9rem] gap-2;

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply clear-both my-2 gap-y-0 text-[0.8rem] gap-1;
    }

  }

  .modern .quoteBlock {
    @apply font-modernCopy text-[hsl(0,0%,80%)] mt-12;

    p {
      @apply font-modernCopy
    }

    .cite {
      @apply font-modernCopy
    }
  }

  .bourbon .quoteBlock {
    @apply font-bourbonCopy bg-[#932213] rounded-sm shadow-[0px_1px_2px_0px_hsl(0,_0%,_0%,_50%)];

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply clear-both mt-2 mb-2 gap-y-0;
    }

    p {
      @apply text-[0.9em] text-base-ivory tracking-wider leading-[1.5em] text-center;
      animation: fadeTexter 2s forwards;

      @media only screen and (min-device-width: 700px) and (max-device-width: theme("screens.breakXlg")) {
        @apply text-[0.9em];
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
        @apply text-[0.9em];
      }

    }

  }


  .groovy .quoteBlock {
    @apply font-groovyCopy bg-[#932213] pt-[0.75em] px-[2em] pb-[1em] text-center shadow-druShadow;
  }


  .techy .quoteBlock {
    @apply font-techyCopy p-4 min-h-min bg-techy-mango;

    .arrowBtn {
      @apply text-techy-blueTech pt-0 px-2 pb-[0.2rem] leading-[1.3] border border-solid border-techy-blueTech;

      :hover {
        @apply bg-techy-blueTech text-techy-mango;
      }
    }

    p {
      @apply font-techyCopy text-[1em] text-techy-blueTech text-center tracking-wide;

      @media (max-width: theme("screens.breakXlg")) {
        @apply text-[1.25em];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply text-[1.2em];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply text-[1em];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply text-[.85em] leading-5;
      }
    }

    .cite {
      @apply text-techy-blueTech tracking-[.08em] inline;
    }
  }


  .corp .quoteBlock {
    @apply font-corpCopy bg-corp-blueDark py-3 px-3 text-center min-h-min text-white;

    .arrowBtn {
      @apply text-white py-0 px-1 font-bold;

      &:hover {
        @apply text-techy-mango bg-corp-blueDark;
      }
    }

    .arrowBtn:nth-child(1)::after {

      :hover {
        content: '<';
        @apply content-['<'];
      }
    }

    .arrowBtn:nth-child(3)::after {

      :hover {
        content: '>';
        @apply content-['>'];
      }
    }

    p {
      @apply font-corpCopy;
    }

    .cite {
      @apply font-corpCopy;
    }
  }


  .punk .quoteBlock {
    p {
      @apply font-modernCopy
    }

    .cite {
      @apply font-modernCopy
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.75s ease-out; /* Adjust the transition duration as needed */
    opacity: 1;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
