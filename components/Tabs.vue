<template>
  <div class="w-full relative">
    <transition name="slide">
      <div v-if="themeBar" @click="chooseTheme" class="slimShady text-center m-auto w-full bg-gradient-to-b from-gray-800
       to-gray-900 text-white/75 tracking-widest border-b border-b-gray-900/50 h-8 leading-none p-[0.3rem_0_0_0] z-50 uppercase cursor-pointer hover:from-gray-900
       hover:to-gray-950 hover:text-groovy-yellowPaleDk/85 font-modernHead font-semibold text-xs top-0 absolute ease-cubic-bezier(0.83,0.1,1,1) duration-1000" :class="{ '-translate-y-12': !themeBar }">
        Choose theme <span class="text-base text-black">😃</span>
      </div>
    </transition>
    <transition name="slide">
      <div v-if="!themeBar" class="tabs z-40 h-8 top-0 absolute overflow-hidden">
        <NuxtLink v-for="(tab, index) in tabs" :key="index" :to="`/${tab}`" class="tab" :class="tab">
          {{ tab }}
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  const tabs = ref([ 'modern', 'bourbon', 'groovy', 'techy', 'corp', 'punk' ])
  
  const themeBar = ref(true)
  
  function chooseTheme() {
    themeBar.value = !themeBar.value
  }
  
</script>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s cubic-bezier(0.83, 0.1, 1, 1);
  }
  .slide-enter, .slide-leave-to {
    transform: translateY(-100%);
  }
  .slimShady {
    box-shadow: 0px -2px 8px 0px black;
    
    &:hover {
      box-shadow: 0px 0px 8px 0px black;
    }
  }

  .tabs {
    @apply font-['Barlow_Semi_Condensed'] flex flex-row flex-nowrap justify-between items-start content-center text-center text-[0.85em] relative top-0 left-0 w-[100.1%] tracking-normal overflow-x-hidden bg-gradient-to-b from-base-grey to-[#1F1F1F] cursor-pointer;

    a {
      @apply grow text-[#fffdf4bf] py-2 px-0 border-r border-[#fffdf440] no-underline uppercase tracking-[0.1em] text-[0.8em] cursor-pointer;

      &:last-child {
        @apply border-r-0;
      }

      &:hover {
        @apply text-[#fffdf4] duration-200 ease-in cursor-pointer;
      }
    }


  }

  body .tabs {

    a.modern {
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-base-grey;

      &:hover {
        @apply bg-[hsl(340,76%,48%)];
      }
    }

    a.bourbon {
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[#6f170f];
      }
    }

    > a.groovy {
      @apply bg-[#333];

      &:hover {
        @apply text-black bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];
      }
    }

    > a.techy {
      @apply bg-[rgb(51,51,51)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[rgb(1,50,86)];
      }
    }

    > a.corp {
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(205,97%,27%)];
      }
    }

    > a.punk {
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(303,100%,35%)];
      }
    }
  }

  body.modern .tabs > a.router-link-active.router-link-exact-active.tab,
  body.modern.extras .tabs > a.tab.modern {
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] text-base-ivory bg-gradient-to-b from-[#D71D5B] to-[#871239];
  }

  body.bourbon .tabs > a.router-link-active.router-link-exact-active.tab,
  body.bourbon.extras .tabs > a.tab.bourbon {
    @apply text-base-ivory drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#c8291c] to-[#851c12];
  }

  body.groovy .tabs > a.router-link-active.router-link-exact-active.tab,
  body.groovy.extras .tabs > a.tab.groovy {
    @apply text-base-black drop-shadow-[0px_0px_1px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];

    &:hover {
      @apply text-base-black drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];
    }

  }

  body.techy .tabs > a.router-link-active.router-link-exact-active.tab,
  body.techy.extras .tabs > a.tab.techy {
    @apply text-base-ivory/75  drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#423ba0] to-[#2b2668];
  }

  body.corp .tabs > a.router-link-active.router-link-exact-active.tab,
  body.corp.extras .tabs > a.tab.corp {
    @apply text-base-ivory/75 drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#025088] to-[#013255];
  }

  body.punk .tabs > a.router-link-active.router-link-exact-active.tab,
  body.punk.extras .tabs > a.tab.punk {
    @apply text-base-ivory/75 bg-gradient-to-b from-[#B200AA] to-[#660061];
  }

</style>