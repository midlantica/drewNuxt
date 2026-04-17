<template>
  <header class="anthroHeader">
    <div class="splitStage">
      <!-- LEFT: deep green panel — stacked name + role -->
      <div class="leftPanel" @click="$emit('toggleExtras')">
        <div class="leftInner">
          <div class="nameStack">
            <span class="nameFirst">Drew</span>
            <span class="nameLast">Harper</span>
          </div>
          <div class="roleBlock">
            <span class="roleLine">UI/UX</span>
            <span class="roleLine">Visual</span>
            <span class="roleLine accent">Designer</span>
          </div>
        </div>
        <!-- Vertical rule -->
        <div class="vertRule" />
      </div>

      <!-- RIGHT: cream panel — portrait + contact -->
      <div class="rightPanel">
        <div class="portraitFrame" @click="$emit('toggleExtras')">
          <div class="portraitImg" />
          <!-- Floating year badge -->
          <div class="yearBadge">
            Since
            <br />
            '99
          </div>
        </div>

        <div class="contactStack">
          <a :href="`mailto:${copy.druEmail}`" class="cLink">
            <span class="cLabel">✉ Email</span>
            <span class="cVal">{{ copy.druEmail }}</span>
          </a>
          <a :href="copy.portfolio" target="_blank" class="cLink">
            <span class="cLabel">↓ Résumé</span>
            <span class="cVal">PDF Download</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Full-width rust stripe — cuts across both panels -->
    <div class="rustStripe">
      <span class="stripeText">
        UX · Visual Design · HTML · CSS · Vue · Nuxt · Figma · Illustration
      </span>
    </div>
  </header>
</template>

<script setup>
  defineEmits(['toggleExtras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  /* ── Outer shell ── */
  .anthroHeader {
    @apply w-full flex flex-col overflow-hidden;
  }

  /* ── Split stage ── */
  .splitStage {
    @apply flex flex-row w-full;
    min-height: 220px;

    @media (max-width: 630px) {
      @apply flex-col;
      min-height: auto;
    }
  }

  /* ── LEFT panel ── */
  .leftPanel {
    @apply relative flex flex-row items-stretch bg-[#1a2e1a] cursor-pointer;
    flex: 0 0 52%;

    @media (max-width: 840px) {
      flex: 0 0 55%;
    }

    @media (max-width: 630px) {
      @apply w-full;
      flex: none;
    }
  }

  .leftInner {
    @apply flex flex-row items-end gap-6 px-8 py-6 flex-1;

    @media (max-width: 840px) {
      @apply px-5 py-5 gap-4;
    }

    @media (max-width: 630px) {
      @apply px-4 py-4 gap-3;
    }
  }

  /* Stacked name — huge, cream */
  .nameStack {
    @apply flex flex-col leading-none gap-0;
  }

  .nameFirst {
    @apply text-[#f0ebe0] font-normal leading-[0.9];
    font-family: 'Bodoni Moda', Times, serif;
    font-style: italic;
    font-size: clamp(3.8rem, 8.5vw, 7.5rem);
    letter-spacing: -0.02em;

    @media (max-width: 630px) {
      font-size: clamp(3rem, 13vw, 5rem);
    }
  }

  .nameLast {
    @apply text-[#e8623a] font-bold leading-[0.9] uppercase;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: normal;
    font-size: clamp(3.8rem, 8.5vw, 7.5rem);
    letter-spacing: 0.04em;

    @media (max-width: 630px) {
      font-size: clamp(3rem, 13vw, 5rem);
    }
  }

  /* Role lines — vertical stacked, small caps */
  .roleBlock {
    @apply flex flex-col justify-end gap-0 pb-1;
  }

  .roleLine {
    @apply text-[#f0ebe0]/50 font-medium leading-tight;
    font-family: Poppins, sans-serif;
    font-size: clamp(0.65rem, 1.2vw, 0.85rem);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);

    @media (max-width: 630px) {
      writing-mode: horizontal-tb;
      transform: none;
      @apply text-[0.65rem];
    }

    &.accent {
      @apply text-[#e8623a]/80;
    }
  }

  /* Vertical rule between left and right */
  .vertRule {
    @apply w-[3px] bg-[#e8623a] self-stretch flex-shrink-0;

    @media (max-width: 630px) {
      @apply hidden;
    }
  }

  /* ── RIGHT panel ── */
  .rightPanel {
    @apply flex flex-row items-end gap-4 bg-[#f0ebe0] flex-1 px-6 py-4 relative;

    @media (max-width: 840px) {
      @apply px-4 py-4;
    }

    @media (max-width: 630px) {
      @apply px-4 py-3;
    }
  }

  /* Portrait */
  .portraitFrame {
    @apply relative flex-shrink-0 cursor-pointer self-end;
    width: clamp(90px, 14vw, 170px);
    height: clamp(110px, 17vw, 210px);
  }

  .portraitImg {
    @apply absolute inset-0 bg-no-repeat bg-cover bg-top;
    background-image: url('/img/drew_mug_sepia.webp');
    filter: sepia(0.3) contrast(1.05);
    /* Clip to a slightly angled parallelogram */
    clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  }

  /* Year badge — overlapping corner */
  .yearBadge {
    @apply absolute bottom-2 right-[-0.6rem] bg-[#e8623a] text-[#0d0f14] font-bold text-center leading-tight px-2 py-1;
    font-family: Poppins, sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    z-index: 10;
  }

  /* Contact stack */
  .contactStack {
    @apply flex flex-col gap-3 justify-end pb-1 flex-1;
  }

  .cLink {
    @apply flex flex-col no-underline gap-0;
  }

  .cLabel {
    @apply text-[#1a2e1a] text-[0.6rem] font-bold tracking-[0.16em] uppercase leading-none;
    font-family: Poppins, sans-serif;
  }

  .cVal {
    @apply text-[#1a2e1a]/70 text-[0.78rem] font-normal leading-snug;
    font-family: Poppins, sans-serif;

    &:hover {
      @apply text-[#e8623a];
    }
  }

  /* ── Rust stripe ── */
  .rustStripe {
    @apply w-full bg-[#e8623a] py-2 px-6 overflow-hidden;
  }

  .stripeText {
    @apply text-[#1a2e1a] text-[0.65rem] font-semibold tracking-[0.18em] uppercase whitespace-nowrap;
    font-family: Poppins, sans-serif;
  }
</style>
