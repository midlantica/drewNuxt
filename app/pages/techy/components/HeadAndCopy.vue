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
 @apply w-[120px] max-w-[90px] min-w-[90px];
    fill: var(--color-techy-blue-tech);
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
 @apply text-[1.6rem] font-semibold leading-9 tracking-wide mt-0 mb-2 normal-case text-techy-blue-tech;
    font-family: var(--font-family-techy-head);

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
 @apply text-[1.25rem] leading-[3rem] tracking-[.06em] text-gray-900 content-center;
    font-family: var(--font-family-techy-copy);

    @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
      /* // */
    }

    @media (max-width: 1024px) {
      @apply columns-2 text-[1.2rem] leading-[2.1em] text-justify tracking-wider gap-x-12 hyphens-auto;
      column-rule: 2px dotted #423ba08b;
    }

    @media (max-width: 840px) {
      @apply columns-2;
    }

    @media (max-width: 700px) {
      @apply columns-1;
    }

    @media (max-width: 630px) {
      @apply columns-1 text-[1.2rem] leading-[2.3em] tracking-[.01em];
    }

    @media (max-width: 630px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply columns-1 text-[1.15rem];
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply columns-1 text-[1.18em] mt-2 mr-0 mb-0 pt-0 px-0 pb-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
      /* // */
    }
  }
</style>
