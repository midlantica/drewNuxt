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
        <span class="text-white uppercase shadow tracking-widest">Resume:</span>
        <a
          :href="copy.resumeWord"
          target="_BLANK"
          class="resume rOne inline-flex items-center gap-1 mr-2 uppercase shadow"
          title="Word Resume"
          aria-label="Word Resume"
        >
          Word
          <IconWordMini class="resumeIcon" />
        </a>
        <a
          :href="copy.resumePDF"
          target="_BLANK"
          class="resume rTwo inline-flex items-center gap-1 uppercase shadow"
          title="PDF Resume"
          aria-label="PDF Resume"
        >
          PDF
          <IconPDF class="resumeIcon" />
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
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  const copy = useCopy();
  const store = useToggleExtrasStore();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
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
    @apply fill-black w-30 max-w-22.5 min-w-22.5 pr-[.2rem] pb-[.1rem] mb-1;

    @media (max-width: 840px) {
      @apply -mr-95 -mt-2.5 w-22.5;
    }

    @media (max-width: 630px) {
      @apply -mr-82.5 -mt-5 w-20;
    }

    @media (max-width: 430px) {
      @apply -mr-75 -mt-5 w-17.5;
    }

    @media (max-width: 320px) {
      @apply -mr-75 -mt-2.5 w-17.5;
    }
  }

  .flexbox {
    @apply flex flex-row justify-between;

    .jobTitles {
      @apply flex-auto flex-row self-start;

      p {
        @apply text-base-black bg-white text-[0.9em] font-medium not-italic tracking-[.02em] -hue-rotate-[1.25deg] lowercase py-1 px-2 font-(family-name:--font-family-punk-copy);

        @media (max-width: 630px) {
          /* // */
        }

        @media (max-width: 430px) {
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
        @apply text-[0.9em] text-base-black bg-white font-medium not-italic tracking-[.02em] lowercase inline-block ml-1 mb-4 py-[0.3em] px-2 font-(family-name:--font-family-punk-copy);

        &.rOne {
          @apply text-white -rotate-2 bg-punk-magenta/50;

          &:hover {
            @apply bg-punk-magenta text-white;
          }
        }

        &.rTwo {
          @apply text-white no-underline rotate-6 bg-punk-magenta/50;

          &:hover {
            @apply bg-punk-magenta text-white no-underline;
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
    @apply flex-auto flex flex-col relative top-0 left-0;

    @media (max-width: 840px) {
      @apply mb-0;
    }
  }

  .resumeIcon :deep(.letterColor) {
    fill: black;
  }

  .mainBody {
    @apply -rotate-1;

    h1 {
      @apply font-medium z-10 leading-[1.7rem] text-white text-[1.16rem] bg-punk-red/80 rotate-1 py-1 pr-0 pb-[.1rem] pl-[.2rem] tracking-wide uppercase inline font-(family-name:--font-family-punk-head);

      &:nth-of-type(1) {
        @apply rotate-0;
      }
    }

    p {
      @apply font-normal text-[1em] leading-9 relative inline italic text-base-grey tracking-[.045em] top-0 bg-punk-peach mt-4 mx-4 mb-0 py-[.4rem] px-[.1rem] font-(family-name:--font-family-punk-copy);

      @media (min-width: 840px) {
        /* // */
      }
    }
  }
</style>
