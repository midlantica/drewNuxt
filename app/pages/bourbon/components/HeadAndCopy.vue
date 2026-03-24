<template>
  <div
    v-show="store.isShowContent"
    class="w-full mt-2 break-lg:pr-4 break-lg:pl-2 break-sm:px-2"
  >
    <div
      class="flex auto-rows-auto justify-start justify-items-start items-center gap-2"
    >
      <div
        class="bg-[url('/img/drew_mug_red.png')] h-[100px] min-h-[100px] min-w-[84px] w-[84px] block bg-no-repeat bg-cover self-center hover:cursor-pointer jelloHorizontal"
        @click="$emit('toggleExtras')"
      />
      <h1>{{ copy.druHead }}</h1>
      <AuthenticStamp class="authenticStamp" />
    </div>
    <p v-html="copy.druCopy" />
  </div>
</template>

<script setup>
  const copy = useCopy();
  const store = useToggleExtrasStore();


</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .authenticStamp {
 @apply w-[180px] max-w-[90px] min-w-[90px];
    fill: var(--color-bourbon-accent-red);

    @media (max-width: 840px) {
 @apply w-[120px];
      fill: var(--color-bourbon-accent-red);
    }

    @media (max-width: 630px) {
 @apply w-[120px];
      fill: var(--color-bourbon-accent-red);
    }

    @media (max-width: 430px) {
 @apply w-[120px];
      fill: var(--color-bourbon-accent-red);
    }

    @media (max-width: 320px) {
      @apply min-w-[100px];
    }
  }

  h1 {
 @apply font-normal leading-[1.1em] text-bourbon-accent-red text-left tracking-[.025em] uppercase mt-2 mx-0 text-[1.7rem] p-0 self-center;
    font-family: var(--font-family-bourbon-subhead);

    @media (min-width: 1024px) {
      /* @apply max-w-[21ch]; */
    }

    @media (max-width: 840px) {
      @apply text-[1.65rem];
    }

    @media (max-width: 630px) {
      @apply text-[1.4rem];
    }

    @media (max-width: 430px) {
      @apply text-[1.25rem] m-0;
    }
  }

  p {
 @apply leading-[2.5rem] text-[1.1rem] text-base-grey mt-2 mx-2 mb-0 tracking-[0.05rem] mr-2 text-pretty;
    font-family: var(--font-family-bourbon-copy);

    @media (max-width: 1024px) {
      @apply columns-2 leading-9 gap-x-12 text-justify hyphens-auto;
      column-rule: 1px solid hsla(7,77%,43%,50%);
    }

    @media (max-width: 840px) {
      @apply columns-2 tracking-[0.05rem] text-justify hyphens-auto;
    }

    @media (max-width: 670px) {
      @apply columns-1 text-justify hyphens-auto;
    }

    @media (max-width: 630px) {
      @apply columns-1 text-justify hyphens-auto;
    }
  }
</style>
