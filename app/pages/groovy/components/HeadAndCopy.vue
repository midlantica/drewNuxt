<template>
  <section v-show="store.isShowContent">
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
  const copy = useCopy();
  const store = useToggleExtrasStore();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  :root {
    --breakXsm: 530px;
  }

  .authenticStamp {
    @apply w-[120px] max-w-[90px] min-w-[90px];
    fill: var(--color-groovy-red);
  }

  section {
    @apply mt-4 mr-9 mb-0 ml-9;

    @media (max-width: 1024px) {
    }

    @media (max-width: 840px) {
    }

    @media (max-width: 630px) {
      @apply mt-[1.8rem] mx-4 mb-0;
    }

    @media (max-width: 430px) {
    }
  }

  h1 {
    @apply text-[1.5rem] leading-[2.1rem] font-medium mt-2 mb-0 text-groovy-red-dk normal-case;
    font-family: var(--font-family-groovy-head);

    @media (min-width: 1024px) {
    }

    @media (max-width: 1024px) {
      @apply max-w-[initial];
    }

    @media (max-width: 840px) {
      @apply max-w-[initial];
    }

    @media (max-width: 630px) {
      @apply text-[1.3rem] leading-6;
    }

    @media (max-width: 430px) {
      @apply max-w-[initial];
    }
  }

  p {
    @apply text-base-grey text-[1.125rem] tracking-[0.009rem] leading-[2.6rem];
    font-family: var(--font-family-groovy-copy);

    @media (max-width: 1024px) {
      columns: 2 200px;
      @apply gap-x-12 text-justify hyphens-auto;
      column-rule-width: 3px;
      column-rule-style: dotted;
      column-rule-color: hsla(39, 100%, 50%, 0.75);
    }

    @media (max-width: 840px) {
      columns: 2 200px;
      @apply tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply text-[1.05rem] leading-[2.4rem] pl-[1.3rem] mr-2 border-l-2 border-dotted border-[hsla(39,100%,50%,.75)];
    }

    @media (max-width: 630px) {
    }
  }
</style>
