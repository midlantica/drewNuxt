<template>
  <section v-show="store.isShowContent" class="headCopySection">
    <!-- Pull-quote style headline -->
    <div class="headlineWrap">
      <div class="quoteMarks">&ldquo;</div>
      <h2 class="headline">{{ copy.druHead }}</h2>
    </div>

    <div class="stampRow">
      <AuthenticStamp class="authenticStamp" />
      <div class="stampDivider" />
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

  /* Pull-quote wrapper */
  .headlineWrap {
    @apply relative;
  }

  /* Giant decorative open-quote */
  .quoteMarks {
    @apply absolute text-[#1a2e1a] font-normal leading-none select-none pointer-events-none;
    font-family: 'Bodoni Moda', Times, serif;
    font-size: clamp(6rem, 14vw, 11rem);
    opacity: 0.07;
    top: -1.8rem;
    left: -1.2rem;
    line-height: 1;

    @media (max-width: 630px) {
      font-size: clamp(4rem, 16vw, 7rem);
      top: -1.2rem;
      left: -0.8rem;
    }
  }

  /* Headline — large, italic Bodoni, forest green */
  .headline {
    @apply m-0 p-0 text-[#1a2e1a] font-normal leading-[1.15] relative z-10;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: italic;
    font-size: clamp(1.55rem, 3vw, 2.3rem);
    letter-spacing: -0.01em;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      font-size: clamp(1.4rem, 3.2vw, 1.9rem);
    }

    @media (max-width: 630px) {
      font-size: clamp(1.3rem, 4.5vw, 1.65rem);
    }
  }

  /* Stamp + divider row */
  .stampRow {
    @apply flex flex-row items-center gap-4;
  }

  .authenticStamp {
    @apply w-16 min-w-[3.5rem] max-w-[4rem] fill-[#e8623a] flex-shrink-0;
  }

  .stampDivider {
    @apply flex-1 h-[2px] bg-[#1a2e1a]/15;
  }

  /* Body copy */
  .bodyCopy {
    @apply text-[0.98rem] leading-[1.95] tracking-[0.01em] text-[#2a3a2a] m-0;
    font-family: Poppins, 'Helvetica Neue', sans-serif;
    font-weight: 300;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      @apply text-[0.93rem] leading-[1.9] hyphens-auto;
    }

    @media (max-width: 630px) {
      @apply text-[0.9rem] leading-[1.85];
    }
  }
</style>
