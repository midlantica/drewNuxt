<template>
  <section
    v-show="showHeadAndCopy"
    class="flex flex-col mx-4 mt-4 ml-6 mr-8 flex-nowrap breakXlg:mt-0"
  >
    <h1 class="flex items-center w-full gap-2 mb-3">
      {{ copy.druHead }}
      <AuthenticStamp class="authenticStamp" />
    </h1>
    <p v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  const copy = useCopy();

  const showHeadAndCopy = ref(false);

  onMounted(() => {
    showHeadAndCopy.value = true;
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  .authenticStamp {
 @apply w-[120px] max-w-[90px] min-w-[90px];
    fill: var(--color-corp-blue-dark);
  }

  h1 {
 @apply text-corp-blue-dark normal-case p-0 leading-[2rem] transition duration-[.25s] ease-in tracking-[0.01rem] w-full font-semibold text-[1.3rem] mt-0 mx-0;
    font-family: var(--font-family-corp-head);

    @media (min-width: 1024px) {
      /* // @apply max-w-[28ch]; */
    }

    @media (max-width: 1024px) {
      /* // @apply max-w-none; */
    }

    @media (max-width: 840px) {
      /* // @apply max-w-none; */
    }

    @media (max-width: 630px) {
      /* // @apply max-w-[28ch]; */
    }

    @media (max-width: 430px) {
      @apply text-[1.25rem];
    }
  }

  p {
 @apply text-corp-blue-dark/90 font-normal border-l-2 border-dotted border-corp-pale-blue ml-[.2rem] text-justify pl-[1.2rem] leading-[2.5rem] text-[1.1rem] tracking-[-0.01rem] hyphens-auto;
    font-family: var(--font-family-corp-copy);

    @media (max-width: 1024px) {
      @apply columns-2 gap-x-12 text-justify hyphens-auto;
      column-rule: 2px dotted #7cc3fa;
    }

    @media (max-width: 840px) {
      @apply columns-2 tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      @apply columns-auto border-l-2 border-dotted border-corp-pale-blue mr-2 pl-[1.3rem];
    }

    @media (max-width: 630px) {
      /* // */
    }
  }
</style>
