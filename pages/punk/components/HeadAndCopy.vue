<template>
  <div v-show="store.isShowContent">
    <div class="flex justify-start">
      <AuthenticStamp class="authenticStampPunk" />
    </div>
    <div class="flexbox">
      <div class="jobTitles">
        <p>{{ copy.uiuxDesigner }}</p>
        <p>{{ copy.vizDesigner }}</p>
      </div>

      <div class="resumeLinks">
        <a
          :href="`${copy.portfolio}`"
          target="_BLANK"
          class="resume rOne"
        >
          PDF Resume
        </a>
      </div>
    </div>

    <div class="copyGrid">
      <div class="mainBody">
        <h1>{{ copy.druHead }}</h1>
        <p v-html="copy.druCopy" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const copy = useCopy();
  const store = useToggleExtrasStore();

  const props = defineProps(['store.isShowContent', 'store.selectedBtn']);

  onMounted(() => {
    store.initialize();
  });
</script>

<style scoped>
  .authenticStampPunk {
    @apply self-center;
    animation: rotator2 0.75s cubic-bezier(0.39, 0.59, 0.15, 1.29) 1;
    animation-delay: 2s;
    opacity: 0;
    animation-fill-mode: forwards;
    border-radius: 100%;
    background: rgba(255, 255, 255, 1);
  }

  .authenticStampPunk {
    @apply fill-black w-[120px] max-w-[90px] min-w-[90px] pr-[.2rem] pb-[.1rem] mb-1;

    @media (max-width: theme('screens.breakLg')) {
      @apply -mr-[380px] -mt-[10px] w-[90px];
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply -mr-[330px] -mt-[20px] w-[80px];
    }

    @media (max-width: theme('screens.breakXsm')) {
      @apply -mr-[300px] -mt-[20px] w-[70px];
    }

    @media (max-width: theme('screens.breakXxsm')) {
      @apply -mr-[300px] -mt-[10px] w-[70px];
    }
  }

  .flexbox {
    @apply flex flex-row justify-between;

    .jobTitles {
      flex: 0 1 auto;
      @apply flex-row self-start;

      p {
        @apply font-punkCopy text-base-black bg-white text-[0.9em] font-medium not-italic tracking-[.02em] -hue-rotate-[1.25deg] lowercase py-1 px-2;

        @media (max-width: theme('screens.breakSm')) {
          /* // */
        }

        @media (max-width: theme('screens.breakXsm')) {
          /* // */
        }

        &:nth-of-type(1) {
          @apply inline-block -rotate-[.5deg];
        }

        &:nth-of-type(2) {
          @apply inline-block ml-2 rotate-2;
        }
      }
    }

    .resumeLinks {
      @apply self-end flex-row;

      .resume {
        @apply text-[0.9em] font-punkCopy text-base-black bg-white font-medium not-italic tracking-[.02em] lowercase inline-block ml-1 mb-4 py-[0.3em] px-2;

        &.rOne {
          @apply text-white -rotate-2 bg-punk-magenta/50;

          &:hover {
            @apply bg-punk-magenta text-black;
          }
        }

        &.rTwo {
          @apply no-underline rotate-6;

          &:hover {
            @apply underline text-punk-magenta;
          }
        }

        &.rThree {
          @apply no-underline rotate-3;

          &:hover {
            @apply underline text-punk-magenta;
          }
        }

        a:hover {
          @apply underline text-punk-magenta bg-punk-red;
        }
      }
    }
  }

  .copyGrid {
    flex: 0 1 auto;
    @apply flex flex-col relative top-0 left-0;

    @media (max-width: theme('screens.breakLg')) {
      @apply mb-0;
    }
  }

  .mainBody {
    @apply -rotate-1;

    h1 {
      @apply font-punkHead font-medium z-10 leading-[1.7rem] text-white text-[1.16rem] bg-punk-red/80 rotate-1 py-1 pr-0 pb-[.1rem] pl-[.2rem] tracking-[.025em] uppercase inline;

      &:nth-of-type(1) {
        @apply rotate-0;
      }
    }

    p {
      @apply font-normal text-[1em] leading-9 relative inline italic font-punkCopy text-base-grey tracking-[.045em] top-0 bg-punk-peach mt-4 mx-4 mb-0 py-[.4rem] px-[.1rem];

      @media (min-width: theme('screens.breakLg')) {
        /* // */
      }
    }
  }
</style>
