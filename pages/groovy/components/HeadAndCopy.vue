<template>
  <section>
    <div class="flex items-center w-full gap-2 mb-2">
      <h1>
        {{ copy.druHead }}
      </h1>
      <AuthenticStamp class="authenticStamp" />
    </div>
    <p v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  const copy = useCopy()

  const props = defineProps([
    'store.isShowContent', 
    'store.selectedBtn'
  ])

  onMounted(() => {
    store.initialize();
  })
</script>

<style scoped>
  :root {
    --breakXsm: 530px;
  }

  .authenticStamp {
    @apply fill-groovy-red w-[120px] max-w-[90px] min-w-[90px];
  }

  section {
    @apply mt-4 mr-9 mb-0 ml-9;

    @media (max-width: theme("screens.breakXlg")) {

    }

    @media (max-width: theme("screens.breakLg")) {

    }

    @media (max-width: theme("screens.breakSm")) {
      @apply mt-[1.8rem] mx-4 mb-0;
    }

    @media (max-width: theme("screens.breakXsm")) {

    }
  }

  h1 {
    @apply font-groovyHead text-[1.5rem] leading-[2.1rem] font-medium mt-2 mb-0 text-groovy-redDk normal-case;

    @media (min-width: theme("screens.breakXlg")) {

    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply max-w-[initial];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply max-w-[initial];
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply text-[1.3rem] leading-6;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply max-w-[initial];
    }
  }

  p {
    @apply font-groovyCopy text-base-grey text-[1.125rem] tracking-[0.009rem] leading-[2.6rem];

    @media (max-width: theme("screens.breakXlg")) {
      columns: 2 200px;
      @apply gap-x-12 text-justify hyphens-auto rule-w-2 rule-style-dotted rule-color-[hsla(39,100%,50%,.75)];
    }

    @media (max-width: theme("screens.breakLg")) {
      columns: 2 200px;
      @apply tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply text-[1.05rem] leading-[2.4rem] pl-[1.3rem] mr-2 border-l-2 border-dotted border-[hsla(39,100%,50%,.75)];
    }

    @media (max-width: theme("screens.breakSm")) {

    }

  }
</style>
