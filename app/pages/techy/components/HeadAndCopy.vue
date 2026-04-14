<template>
  <section v-show="store.isShowContent">
    <h1 class="w-full flex items-center gap-2">
      {{ copy.druHead }}
      <AuthenticStamp class="authenticStamp" />
    </h1>
    <p v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  const copy = useCopy();
  const store = useToggleExtrasStore();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .authenticStamp {
    @apply w-30 max-w-22.5 min-w-22.5 fill-techy-blue-tech;
  }

  section {
    @apply mt-4 mr-9 mb-0 ml-9 content-center;

    @media (max-width: 1024px) {
      @apply mt-4 mx-6 mb-4;
    }

    @media (max-width: 840px) {
      @apply mx-4;
    }

    @media (max-width: 630px) {
      @apply mx-4;
    }

    @media (max-width: 430px) {
      @apply ml-4 mr-2;
    }
  }

  h1 {
    @apply text-[1.6rem] font-semibold leading-9 tracking-wide mt-0 mb-2 normal-case text-techy-blue-tech font-(family-name:--font-family-techy-head);

    @media (min-width: 1024px) {
      /* // @apply max-w-[26ch]; */
    }

    @media (max-width: 1024px) {
      @apply max-w-none;
    }

    @media (max-width: 840px) {
      @apply max-w-none;
    }

    @media (max-width: 630px) {
      /* // max-width: 26ch; */
    }

    @media (max-width: 430px) {
      @apply max-w-none text-[1.5rem];
    }
  }

  p {
    @apply text-[1.25rem] leading-12 tracking-[.06em] text-gray-900 content-center font-(family-name:--font-family-techy-copy);
    text-wrap: pretty;

    @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
      /* // */
    }

    @media (max-width: 1024px) {
      @apply text-[1.2rem] leading-[2.1em] tracking-wider hyphens-auto;
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 840px) {
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 700px) {
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 630px) {
      @apply text-[1.2rem] leading-[2.3em] tracking-[.01em];
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 630px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply text-[1.15rem];
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply text-[1.18em] mt-2 mr-0 mb-0 pt-0 px-0 pb-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
      /* // */
    }
  }
</style>
