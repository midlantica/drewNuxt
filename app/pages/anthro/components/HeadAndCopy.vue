<template>
  <section v-show="store.isShowContent" class="headCopySection">
    <!-- Large display number / index -->
    <div class="displayIndex">01</div>

    <h2 class="headline">
      {{ copy.druHead }}
    </h2>

    <AuthenticStamp class="authenticStamp" />

    <!-- Divider -->
    <div class="divider" />

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
    @apply mt-8 mr-8 mb-0 ml-8 flex flex-col gap-3 relative;

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

  /* Big ghost number — editorial flair */
  .displayIndex {
    @apply text-[#0d0f14] font-bold leading-none select-none pointer-events-none;
    font-family: 'Bodoni Moda', Times, serif;
    font-size: clamp(5rem, 12vw, 9rem);
    opacity: 0.06;
    position: absolute;
    top: -1.5rem;
    right: 0;
    letter-spacing: -0.04em;

    @media (max-width: 630px) {
      font-size: clamp(4rem, 18vw, 6rem);
      top: -1rem;
    }
  }

  /* Main headline — large, bold, dark */
  .headline {
    @apply m-0 p-0 text-[#0d0f14] font-bold leading-[1.1] relative z-10;
    font-family: 'Bodoni Moda', Times, serif;
    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
    letter-spacing: -0.02em;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      font-size: clamp(1.5rem, 3.5vw, 2rem);
    }

    @media (max-width: 630px) {
      font-size: clamp(1.35rem, 5vw, 1.7rem);
    }
  }

  /* Stamp — rust colored */
  .authenticStamp {
    @apply w-20 min-w-[4.5rem] max-w-[5rem] fill-[#e8623a] self-start;
  }

  /* Divider — thick rust left border style */
  .divider {
    @apply w-12 h-[4px] bg-[#e8623a] my-1;
  }

  /* Body copy */
  .bodyCopy {
    @apply text-[1rem] leading-[1.9] tracking-[0.01em] text-[#2a2520] m-0 relative z-10;
    font-family: Poppins, 'Helvetica Neue', sans-serif;
    font-weight: 300;
    text-wrap: pretty;

    @media (max-width: 1024px) {
      @apply text-[0.95rem] leading-[1.9] hyphens-auto;
    }

    @media (max-width: 630px) {
      @apply text-[0.92rem] leading-[1.85];
    }
  }
</style>
