<template>
  <section v-show="store.isShowContent" class="headCopySection">
    <!-- Decorative label -->
    <div class="sectionLabel">Portfolio</div>

    <h1 class="headline">
      {{ copy.druHead }}
      <AuthenticStamp class="authenticStamp" />
    </h1>

    <!-- Horizontal rule with dot -->
    <div class="ruleDot">
      <span class="ruleLine" />
      <span class="ruleDotCenter" />
      <span class="ruleLine short" />
    </div>

    <p class="bodyCopy" v-html="copy.druCopy" />
  </section>
</template>

<script setup>
  const copy = useCopy();
  const store = useToggleExtrasStore();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .headCopySection {
    @apply mt-8 mr-8 mb-0 ml-8 flex flex-col gap-4;

    @media (max-width: 1024px) {
      @apply mt-6 mx-6 mb-4;
    }

    @media (max-width: 840px) {
      @apply mx-4;
    }

    @media (max-width: 430px) {
      @apply mx-4 mr-2;
    }
  }

  .sectionLabel {
    @apply text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#c4603a];
    font-family: Poppins, 'Helvetica Neue', sans-serif;
  }

  .headline {
    @apply flex items-start gap-3 text-[1.75rem] font-normal leading-[1.25] tracking-[-0.01em] text-[#2c2825] m-0 p-0;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: italic;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      @apply text-[1.55rem];
    }

    @media (max-width: 630px) {
      @apply text-[1.35rem] leading-[1.3];
    }

    @media (max-width: 430px) {
      @apply text-[1.25rem];
    }
  }

  .authenticStamp {
    @apply w-20 min-w-[4.5rem] max-w-[5rem] self-start mt-1 fill-[#c4603a];
  }

  /* Rule with center dot */
  .ruleDot {
    @apply flex items-center gap-0 my-1;
  }

  .ruleLine {
    @apply flex-1 h-[1px] bg-[#2c282530];

    &.short {
      @apply flex-[0_0_2rem];
    }
  }

  .ruleDotCenter {
    @apply w-[5px] h-[5px] rounded-full bg-[#c4603a] mx-2 flex-shrink-0;
  }

  .bodyCopy {
    @apply text-[1.05rem] leading-[1.85] tracking-[0.02em] text-[#3d3530] m-0;
    font-family: Poppins, 'Helvetica Neue', sans-serif;
    font-weight: 300;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      @apply text-[1rem] leading-[1.9] hyphens-auto;
    }

    @media (max-width: 630px) {
      @apply text-[0.95rem] leading-[1.85] tracking-[0.01em];
    }

    @media (max-width: 430px) {
      @apply text-[0.92rem];
    }
  }
</style>
