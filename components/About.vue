<template>
  <div v-show="showAbout"
    class="about" ref="target" :style="{ transform: cardTransform, transition: 'transform 0.25 ease-out' }"
    @click="playSound"
  >
    <div class="flagBox">
      <div class="flag">
        &nbsp;
      </div>
    </div>
    <p>{{ copy.aboutCopy }}</p>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useMouseInElement } from '@vueuse/core'
  import { useSound } from '@vueuse/sound'

  const copy = useCopy()
  const showAbout = ref(true)

  import yeehawSound from '/yeehaw.mp3'
  import jollyGoodSound from '/jollyGood.mp3'


  const target = ref(null)
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
  const cardTransform = computed(() => {
    const MAX_ROTATION = 10

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2) // handles x-axis
    const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2) // handles x-axis

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  })

  let isActive = ref(false)

  const { play: playYeehaw } = useSound(yeehawSound, { volume: .75 })
  const { play: playJollyGood } = useSound(jollyGoodSound, { volume: .75 })

  const playSound = () => {
    if (isActive) {
      playJollyGood()
      // console.log(isActive)
    } else {
      playYeehaw()
      // console.log(isActive)
    }
    isActive = !isActive
  }

  const props = defineProps([
    'store.isShowContent', 
    'store.selectedBtn'
  ])
  
  onMounted(() => {
    showAbout.value = true
  })

</script>

<style scoped>
  .about {
    @apply bg-[hsl(47.01deg_93.99%_77.67%)] pt-4 pb-3 px-6 flex flex-row flex-nowrap justify-center items-center content-center self-center rounded-sm cursor-pointer shadow-[0px_1px_2px_0px_#00000080];

    @media (max-width: theme("screens.breakXlg")) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply mt-0 mx-0 mb-0;
    }

    @media (max-width: theme("screens.breakXxsm")) {
      @apply flex-col;
    }
  }

  .flagBox {
    @apply flex flex-col content-center items-center justify-center self-center float-left clear-left basis-auto;

    @media (max-width: theme("screens.breakXxsm")) {
      @apply mb-2;
    }
  }

  .flag {
    @apply block bg-no-repeat mr-4 content-center items-center justify-center self-center w-[100px] h-[60px] bg-[url('/img/brit_amer_flag.svg')] bg-center bg-contain;
  }

  p {
    @apply text-gray-600 block text-[0.9em] leading-[1.4em] tracking-wider content-center items-center justify-center self-center text-left;
  }

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

      @media (max-width: theme("screens.breakXlg")) {
        @apply leading-7;
      }

      @media (max-width: theme("screens.breakSm")) {
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
