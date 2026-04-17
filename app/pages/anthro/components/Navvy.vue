<template>
  <header class="anthroHeader">
    <!-- Big typographic name block — full bleed, dramatic -->
    <div class="nameStage" @click="$emit('toggleExtras')">
      <div class="nameInner">
        <!-- Oversized italic serif first name -->
        <div class="firstNameWrap">
          <span class="eyebrow">
            {{ copy.uiuxDesigner }} &amp; {{ copy.vizDesigner }}
          </span>
          <h1 class="firstName">Drew</h1>
        </div>

        <!-- Last name in bold caps with accent underline -->
        <div class="lastNameWrap">
          <h1 class="lastName">Harper</h1>
          <div class="accentUnderline" />
        </div>
      </div>

      <!-- Portrait — large, offset, overlapping -->
      <div class="portraitZone">
        <div class="portrait" />
        <div class="portraitAccent" />
      </div>
    </div>

    <!-- Contact bar — dark strip at bottom of header -->
    <div class="contactBar">
      <a :href="`mailto:${copy.druEmail}`" class="contactItem">
        <span class="contactLabel">Email</span>
        <span class="contactValue">{{ copy.druEmail }}</span>
      </a>
      <div class="contactDivider" />
      <a :href="copy.portfolio" target="_blank" class="contactItem">
        <span class="contactLabel">Résumé</span>
        <span class="contactValue">PDF Download ↗</span>
      </a>
      <div class="contactSpacer" />
      <div class="availBadge">Available for work</div>
    </div>
  </header>
</template>

<script setup>
  defineEmits(['toggleExtras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  /* ── Header shell ── */
  .anthroHeader {
    @apply w-full flex flex-col bg-[#0d0f14] overflow-hidden;
  }

  /* ── Name stage: the big dramatic block ── */
  .nameStage {
    @apply relative flex flex-row items-end justify-between cursor-pointer overflow-hidden;
    min-height: 200px;
    padding: 2.5rem 2.5rem 0 2.5rem;

    @media (max-width: 840px) {
      min-height: 160px;
      padding: 2rem 1.5rem 0 1.5rem;
    }

    @media (max-width: 630px) {
      min-height: 140px;
      padding: 1.5rem 1rem 0 1rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .nameInner {
    @apply flex flex-col gap-0 z-10 relative;
  }

  /* Eyebrow label */
  .eyebrow {
    @apply block text-[#e8623a] text-[0.7rem] font-semibold tracking-[0.22em] uppercase mb-1;
    font-family: Poppins, sans-serif;

    @media (max-width: 630px) {
      @apply text-[0.65rem];
    }
  }

  /* "Drew" — huge italic Bodoni */
  .firstName {
    @apply m-0 p-0 leading-[0.88] text-[#f0ebe0] font-normal;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: italic;
    font-size: clamp(4.5rem, 11vw, 9rem);
    letter-spacing: -0.03em;

    @media (max-width: 630px) {
      font-size: clamp(3.5rem, 16vw, 5.5rem);
    }
  }

  /* "Harper" — bold upright caps */
  .lastName {
    @apply m-0 p-0 leading-[0.88] text-[#f0ebe0] font-bold uppercase;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: normal;
    font-size: clamp(4.5rem, 11vw, 9rem);
    letter-spacing: 0.06em;

    @media (max-width: 630px) {
      font-size: clamp(3.5rem, 16vw, 5.5rem);
    }
  }

  .lastNameWrap {
    @apply flex flex-col;
  }

  /* Thick rust accent line under HARPER */
  .accentUnderline {
    @apply h-[5px] bg-[#e8623a] mt-2 mb-4;
    width: clamp(3rem, 8vw, 6rem);

    @media (max-width: 630px) {
      @apply mb-3;
    }
  }

  /* ── Portrait zone ── */
  .portraitZone {
    @apply relative flex-shrink-0 self-end z-10;
    width: clamp(120px, 18vw, 220px);
    height: clamp(140px, 21vw, 260px);
    margin-bottom: 0;

    @media (max-width: 630px) {
      @apply absolute;
      right: 1rem;
      bottom: 0;
      width: clamp(80px, 22vw, 130px);
      height: clamp(95px, 26vw, 155px);
    }
  }

  /* Accent block behind portrait */
  .portraitAccent {
    @apply absolute bg-[#e8623a];
    inset: 0;
    transform: translate(8px, -8px);
    z-index: 0;
  }

  /* Portrait photo */
  .portrait {
    @apply absolute inset-0 bg-no-repeat bg-cover bg-top z-10;
    background-image: url('/img/drew_mug_sepia.webp');
    /* desaturate slightly for drama */
    filter: contrast(1.1) brightness(0.95);
  }

  /* ── Contact bar ── */
  .contactBar {
    @apply flex flex-row items-center gap-0 bg-[#e8623a] px-6 py-2.5 mt-0;

    @media (max-width: 630px) {
      @apply px-4 py-2 flex-wrap gap-y-1;
    }
  }

  .contactItem {
    @apply flex flex-col no-underline gap-0 pr-6;

    @media (max-width: 430px) {
      @apply pr-3;
    }
  }

  .contactLabel {
    @apply text-[#0d0f14] text-[0.58rem] font-bold tracking-[0.18em] uppercase leading-none;
    font-family: Poppins, sans-serif;
  }

  .contactValue {
    @apply text-[#0d0f14] text-[0.82rem] font-medium leading-tight tracking-wide;
    font-family: Poppins, sans-serif;

    @media (max-width: 430px) {
      @apply text-[0.72rem];
    }
  }

  .contactDivider {
    @apply w-[1px] h-7 bg-[#0d0f1440] mx-4 flex-shrink-0;

    @media (max-width: 630px) {
      @apply hidden;
    }
  }

  .contactSpacer {
    @apply flex-1;

    @media (max-width: 630px) {
      @apply hidden;
    }
  }

  .availBadge {
    @apply text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#0d0f14] border border-[#0d0f1450] px-3 py-1 rounded-full flex-shrink-0;
    font-family: Poppins, sans-serif;

    @media (max-width: 630px) {
      @apply hidden;
    }
  }
</style>
