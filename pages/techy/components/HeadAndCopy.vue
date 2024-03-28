<template>
  <section v-show="isShowContent">
    <h1 class="flex items-center w-full gap-2">
      {{ copy.druHead }}
      <AuthenticStamp class="authenticStamp" />
    </h1>
    <p v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  const copy = useCopy()

  const { isShowContent, toggleExtras } = useToggleExtras();
  
  onMounted(() => {
    store.initialize();
  })
</script>

<style scoped>
  .authenticStamp {
    @apply fill-techy-blueTech w-[120px] max-w-[90px] min-w-[90px];
  }

  section {
    @apply mt-4 mr-9 mb-0 ml-9;

    @media (max-width: theme("screens.breakXlg")) {
      @apply mt-4 mx-6 mb-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply mx-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply mx-4;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply ml-4 mr-2;
    }
  }

  h1 {
    @apply font-techyHead text-[1.6rem] font-semibold leading-9 tracking-wide mt-0 mb-4 normal-case text-techy-blueTech;

    @media (min-width: theme("screens.breakXlg")) {
      /* // @apply max-w-[26ch]; */
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply max-w-none;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply max-w-none;
    }

    @media (max-width: theme("screens.breakSm")) {
      /* // max-width: 26ch; */
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply max-w-none text-[1.5rem];
    }
  }

  p {
    @apply font-techyCopy text-[1.25rem] leading-[3rem] tracking-[.06em] text-techy-blueTech;

    @media (min-width: theme("screens.breakXlg")) and (-webkit-min-device-pixel-ratio: 2) {
      /* // */
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply columns-2 text-[1.2rem] leading-[2.1em] text-justify tracking-wider gap-x-12 hyphens-auto rule-w-[2px] rule-style-dotted rule-color-[#423ba08b];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply columns-2;
    }

    @media (max-width: 700px) {
      @apply columns-1;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply columns-1 text-[1.2rem] leading-[2.3em] tracking-[.01em];
    }

    @media (max-width: theme("screens.breakSm")) and (-webkit-min-device-pixel-ratio: 2) {
      @apply columns-1 text-[1.15rem];
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply columns-1 text-[1.18em] mt-2 mr-0 mb-0 pt-0 px-0 pb-0;
    }

    @media only screen and (min-device-width : 375px) and (max-device-width : 667px) {
      /* // */
    }

  }
</style>
