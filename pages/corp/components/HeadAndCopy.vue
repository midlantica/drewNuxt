<template>
  <section class="flex flex-col mx-4 mt-4 ml-6 mr-8 flex-nowrap breakXlg:mt-0">
    <h1 class="flex items-center w-full gap-2 mb-3">
      {{ copy.druHead }} <AuthenticStamp class="authenticStamp" />
    </h1>
    <p v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  import AuthenticStamp from '../../components/AuthenticStamp.vue'


</script>

<style scoped>

  .authenticStamp {
    @apply fill-corp-blueDark w-[120px] max-w-[90px] min-w-[90px];
  }

  h1 {
    @apply font-corpHead text-corp-blueDark normal-case p-0 leading-[2rem] transition duration-[.25s] ease-in tracking-[0.01rem] w-full font-semibold text-[1.3rem] mt-0 mx-0;

    @media (min-width: theme("screens.breakXlg")) {
      /* // @apply max-w-[28ch]; */
    }

    @media (max-width: theme("screens.breakXlg")) {
      /* // @apply max-w-none; */
    }

    @media (max-width: theme("screens.breakLg")) {
      /* // @apply max-w-none; */
    }

    @media (max-width: theme("screens.breakSm")) {
      /* // @apply max-w-[28ch]; */
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply text-[1.25rem];
    }

  }

  p {
    @apply text-corp-blueDark/90 font-corpCopy font-normal border-l-2 border-dotted border-corp-paleBlue ml-[.2rem] text-justify pl-[1.2rem] leading-[2.5rem] text-[1.1rem] tracking-[-0.01rem] hyphens-auto;

    @media (max-width: theme("screens.breakXlg")) {
      @apply columns-2 gap-x-12 text-justify hyphens-auto rule-w-[2px] rule-style-dotted rule-color-[#7cc3fa];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply columns-2 tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      @apply columns-auto border-l-2 border-dotted border-corp-paleBlue mr-2 pl-[1.3rem];
    }

    @media (max-width: theme("screens.breakSm")) {
      /* // */
    }
  }
</style>
