<template>
  <div
    v-show="store.isShowContent"
    class="w-full mt-2 break-lg:pr-4 break-lg:pl-2 break-sm:px-2"
  >
    <div
      class="flex auto-rows-auto justify-start justify-items-start items-center gap-2"
    >
      <div
        class="bg-[url('/img/drew_mug_red.png')] h-25 min-h-25 min-w-21 w-21 block bg-no-repeat bg-cover self-center hover:cursor-pointer jelloHorizontal"
        @click="$emit('toggleExtras')"
      />
      <h1>{{ copy.druHead }}</h1>
      <AuthenticStamp class="authenticStamp" />
    </div>
    <p v-html="copy.druCopy" />
  </div>
</template>

<script setup>
  defineEmits(['toggleExtras']);
  const copy = useCopy();
  const store = useToggleExtrasStore();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .authenticStamp {
    @apply w-45 max-w-22.5 min-w-22.5 fill-bourbon-accent-red;

    @media (max-width: 840px) {
      @apply w-30 fill-bourbon-accent-red;
    }

    @media (max-width: 630px) {
      @apply w-30 fill-bourbon-accent-red;
    }

    @media (max-width: 430px) {
      @apply w-30 fill-bourbon-accent-red;
    }

    @media (max-width: 320px) {
      @apply min-w-25;
    }
  }

  h1 {
    @apply font-normal leading-[1.1em] text-bourbon-accent-red text-left tracking-wide uppercase mt-2 mx-0 text-[1.7rem] p-0 self-center font-(family-name:--font-family-bourbon-subhead);

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
    @apply leading-10 text-[1.1rem] text-base-grey mt-2 mx-2 mb-0 tracking-[0.05rem] mr-2 font-(family-name:--font-family-bourbon-copy);
    text-wrap: pretty;

    @media (max-width: 1024px) {
      @apply leading-9 hyphens-auto;
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 840px) {
      @apply tracking-[0.05rem] hyphens-auto;
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 670px) {
      @apply hyphens-auto;
      orphans: 3;
      widows: 3;
    }

    @media (max-width: 630px) {
      @apply hyphens-auto;
      orphans: 3;
      widows: 3;
    }
  }
</style>
