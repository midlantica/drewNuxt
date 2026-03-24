<template>
  <header class="-mb-4 shadow-none text-base-ivory">
    <nav
      class="flex flex-col items-center content-center px-2 py-4 breakLg:justify-center breakLg:content-center breakLg:items-center"
    >
      <div
        class="block w-full max-w-screen-breakXlg z-0 absolute top-0 left-0 h-[5em] self-center bg-[rgba(0,128,0,0.25)] saturate-[2.5]"
      >
        &nbsp;
      </div>
      <p class="email">
        <a :href="`mailto:` + `${copy.druEmail}`">{{ copy.druEmail }}</a>
      </p>

      <div class="cursor-pointer mastMain" @click="$emit('toggleExtras')">
        <mastDrew class="svgArt mastDrew" />
        <mastHarper class="svgArt mastHarper" />
        <div class="DrewHead jelloHorizontal">&nbsp;</div>
      </div>
    </nav>
  </header>
</template>

<script setup scoped>
  import mastDrew from './masthead/mastDrew.vue';
  import mastHarper from './masthead/mastHarper.vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();

</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  nav {
    @apply flex flex-col content-center px-2 py-4 items-center;

    @media (max-width: 840px) {
      @apply justify-center content-center items-center;
    }

    p.email {
 @apply text-[1.3em] text-base-ivory tracking-[0.02em] lowercase self-end mt-[-0.5em] mb-2 -rotate-1 z-50 p-0;
      font-family: var(--font-family-punk-copy);

      a {
        @apply text-base-ivory tracking-wider text-[0.9em] px-2 py-1;

        &:hover {
          @apply text-black bg-yellow-400;
        }
      }

      @media (max-width: 840px) {
        @apply self-center;
      }
    }

    /* // ############################### */
    .mastMain {
      @apply flex flex-row flex-nowrap justify-center items-center content-center mt-[-1.5em] z-[2] w-full rotate-[.75rem];

      @media (max-width: 1024px) {
        /* // */
      }

      @media (max-width: 840px) {
        @apply flex-wrap;
      }

      @media (max-width: 630px) {
        /* // */
      }

      @media (max-width: 430px) {
        /* // */
      }

      :nth-child(1) {
        @apply w-[60vw];

        @media (max-width: 1024px) {
          @apply order-1;
        }

        @media (max-width: 840px) {
          @apply order-1 w-[47vw] mt-6;
        }

        @media (max-width: 630px) {
          @apply order-1 w-[59vw];
        }

        @media (max-width: 430px) {
          @apply w-[63vw] order-1;
        }
      }

      :nth-child(2) {
        @apply w-[80vw];

        @media (max-width: 1024px) {
          @apply order-1;
        }

        @media (max-width: 840px) {
          @apply w-[68vw] order-3;
        }

        @media (max-width: 630px) {
          @apply w-[88vw] order-3;
        }

        @media (max-width: 430px) {
          @apply w-[92vw] order-3;
        }
      }

      :nth-child(3) {
        /*  */

        @media (max-width: 1024px) {
          @apply order-3;
        }

        @media (max-width: 840px) {
          @apply order-2;
        }

        @media (max-width: 630px) {
          @apply order-2;
        }

        @media (max-width: 430px) {
          @apply order-2;
        }
      }

      svg.svgArt.mastDrew {
        /* @apply w-[100px]; */
      }

      svg.svgArt.mastHarper {
        /* // */
      }

      div.DrewHead {
        @apply bg-[url('/img/drew_mug_punk.png')] bg-no-repeat bg-contain w-[18vw] h-[120px] no-underline;

        @media (max-width: 840px) {
          @apply w-[122px] h-[122px] mt-4;
        }

        @media (max-width: 630px) {
          @apply w-[122px] h-[135px] mt-2;
        }

        @media (max-width: 430px) {
          @apply w-[82px] h-[93px];
        }
      }
    }
  }
</style>
