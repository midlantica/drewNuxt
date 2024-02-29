<template>
  <div class="quoteBlock" v-if="currentQuote">
    <div @click="previousQuote()" class="arrowBtn" />
    <div class="flex flex-row items-center justify-center w-full p-0 m-auto leading-4 select-none">
      <p class="inline not-italic leading-normal text-center" :class="{ fadage: quoteAni }">
        &ldquo;{{ currentQuote.quote }}&rdquo; <cite class="inline not-italic leading-normal break-keep whitespace-nowrap">&ndash; {{ currentQuote.author }}</cite>
      </p>
    </div>
    <div @click="nextQuote()" class="arrowBtn" />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const currentQuoteIndex = ref(0)
  const currentQuote = ref(null)
  const quoteAni = ref(false)

  function quoteAnimator () {
    quoteAni.value = true
    setTimeout(() => {
      quoteAni.value = !quoteAni.value
    }, 3000)
  }

  const nextQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length
    currentQuote.value = quotes[currentQuoteIndex.value]
    quoteAnimator()
  }

  const previousQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value - 1 + quotes.length) % quotes.length
    currentQuote.value = quotes[currentQuoteIndex.value]
    quoteAnimator()
  }

  onMounted(() => {
    currentQuote.value = quotes[currentQuoteIndex.value]
    setInterval(nextQuote, 10000)
    quoteAnimator()
  })

  const quotes = [
    {
      quote: 'A user experience is like a joke: if you have to explain it, it\'s not that good',
      author: 'Martin LeBlanc'
    },
    {
      quote: 'Everything should be made as simple as possible, but not simpler.',
      author: 'Albert Einstein'
    },
    {
      quote: 'The answer to life is knowing when to stop',
      author: 'My Mom, when I was a kid :)'
    },
    {
      quote: 'If you can\'t explain it simply, you don\'t understand it well enough.',
      author: 'Albert Einstein'
    },
    {
      quote: 'It is vain to do with more what can be done with fewer',
      author: 'William of Occam'
    },
    {
      quote: 'Design is not just what it looks like and feels like. Design is how it works',
      author: 'Steve Jobs, 2003'
    },
    {
      quote: 'A picture is worth a thousand words. An interface is worth a thousand pictures',
      author: 'Ben Shneiderman'
    },
    {
      quote: 'We do not see things as they are; we see things as we are',
      author: 'The Talmud'
    },
    {
      quote: 'Measure twice, cut once',
      author: 'unknown'
    },
    {
      quote: 'You can use an eraser on the drafting table or a sledge hammer on the construction site.',
      author: 'Frank Lloyd Wright'
    },
    {
      quote: 'Design should never say, \'Look at me.\' It should always say, \'Look at this.\'',
      author: 'David Craib'
    },
    {
      quote: 'Good web design is about the character of the content, not the character of the designer.',
      author: 'Jeffrey Zeldman'
    },
    {
      quote: 'Good design is about effective communication, not decoration at the expense of legibility.',
      author: 'Vitaly Friedman'
    },
    {
      quote: 'If we want users to like our software, we should design it to behave like a likeable person.',
      author: 'Alan Cooper'
    },
    {
      quote: 'Good designers want to be proved wrong, bad designers hope to be proved right.',
      author: 'Andy Budd'
    },
    {
      quote: 'The ability to simplify means to eliminate the unnecessary so that the necessary may speak.',
      author: 'Hans Hofmann'
    },
    {
      quote: 'Simple is hard. Easy is harder. Invisible is hardest.',
      author: 'Jean-Louis Gassée'
    },
    {
      quote: 'As far as the customer is concerned, the interface is the product.',
      author: 'Jef Raskin'
    },
    {
      quote: 'A lot of what we are doing is getting design out of the way.',
      author: 'Jonathan Ive'
    },
    {
      quote: 'It\'s art if can\'t be explained. It\'s fashion if no one asks for an explanation.',
      author: 'unknown'
    },
    {
      quote: 'It\'s design if it doesn\'t need explanation.',
      author: 'Wouter Stokkel'
    },
    {
      quote: 'Simple design, intense content.',
      author: 'Edward Tufte'
    },
    {
      quote: 'The letter I have written today is longer than usual because I lacked the time to make it shorter',
      author: 'Blaise Pascal'
    },
    {
      quote: 'If there\'s a \'trick\' to it, the UI is broken',
      author: 'Douglas Anderson'
    },
    {
      quote: 'Know the user, and You are not the user.',
      author: 'unknown'
    },
    {
      quote: 'Usability is like oxygen, you don\'t notice it until it\'s missing',
      author: 'unknown'
    }
  ]
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


  .zoomQuote-enter-active,
  .zoomQuote-leave-active {
    transition: transform 300ms ease;
  }

  .zoomQuote-enter-from,
  .zoomQuote-leave-to {
    transform: scale(0.9) translateX(-20px);
    @apply opacity-0 transition-all duration-1000 ease-out;
  }

  .fadeTexter-enter,
  .fadeTexter-enter-active {
    transition: all 1s ease-out;
    @apply opacity-100;
  }

  .fadeTexter-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
    @apply opacity-100;
  }

  .fadeTexter-enter-from,
  .fadeTexter-leave-to {
    transform: translateX(20px);
    transition: all 1s ease-out;
    @apply opacity-0;
  }

  .quoteFade-enter-active,
  .quoteFade-leave-active {
    transition: opacity;
  }

  .quoteFade-enter,
  .quoteFade-leave-to {
    @apply opacity-0;
  }

  .fadage {
    animation: fadage 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    /* animation: fadage 1s ease-in-out both; */
  }

  @keyframes fadage {
    0% {
      @apply opacity-0;
    }

    100% {
      @apply opacity-100 scale-100;
    }
  }

</style>
