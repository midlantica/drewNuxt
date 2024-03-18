<template>
  <div class="w-full mt-2 breakSm:px-2 breakLg:pl-2 breakLg:pr-4">
    <div class="flex items-center justify-start gap-2 justify-items-start auto-rows-auto">
      <div @click="$emit('toggleExtras')" class="block bg-no-repeat bg-cover w-[85px] min-w-[85px] h-[100px] min-h-[100px] bg-[url('/img/drew_mug_red.png')] self-center hover:cursor-pointer jelloHorizontal " />
      <h1>{{ copy.druHead }}</h1>
      <AuthenticStamp class="authenticStamp" />
    </div>
    <p v-html="copy.druCopy" />
  </div>
</template>

<script setup>
  import { useCopy } from "~/store/copy"
  const copy = useCopy()

  const { showExtras, showContent, toggleExtras, onExtrasToggled } = useToggleExtras();

  const emit = defineEmits();
  
  onMounted(() => {
    showContent.value = true
  })

</script>

<style scoped>
  .authenticStamp {
    @apply fill-bourbon-accentRed w-[180px] max-w-[90px] min-w-[90px];

    @media (max-width: theme("screens.breakLg")) {
      @apply fill-bourbon-accentRed w-[120px]
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply fill-bourbon-accentRed w-[120px]
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply fill-bourbon-accentRed w-[120px]
    }

    @media (max-width: theme("screens.breakXxsm")) {
      @apply min-w-[100px];
    }
  }

  h1 {
    @apply font-normal leading-[1.1em] text-bourbon-accentRed text-left tracking-[.025em] uppercase mt-2 mx-0 font-bourbonSubhead text-[1.7rem] p-0 self-center;

    @media (min-width: theme("screens.breakXlg")) {
      /* @apply max-w-[21ch]; */
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply text-[1.65rem];
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply text-[1.4rem];
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply text-[1.25rem] m-0;
    }

  }

  p {
    @apply leading-[2.4rem] font-bourbonCopy text-[1.1rem] text-base-grey mt-2 mx-2 mb-0 tracking-[0.03rem] mr-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply columns-2 leading-9 gap-x-12 text-justify hyphens-auto rule-w-[1px] rule-style-solid rule-color-[hsla(7,77%,43%,50%)];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply columns-2 tracking-[0.05rem] text-justify hyphens-auto;
    }

    @media (max-width: 670px) {
      @apply columns-1 text-justify hyphens-auto;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply columns-1 text-justify hyphens-auto;
    }
  }
</style>
