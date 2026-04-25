<template>
  <header class="crtDash">
    <!-- CRT scanline bg overlay -->
    <div class="dashScanlines" aria-hidden="true" />

    <!-- Dashboard layout -->
    <div class="dashInner">
      <!-- LEFT: mugshot column -->
      <div class="mugCol" @click="$emit('toggleExtras')">
        <div class="mugWrap">
          <div class="mugPixel" />
          <div class="mugScanlines" aria-hidden="true" />
          <span class="corner tl" />
          <span class="corner tr" />
          <span class="corner bl" />
          <span class="corner br" />
        </div>
      </div>

      <!-- CENTER: name + contact + sys info -->
      <div class="centerCol" @click="$emit('toggleExtras')">
        <div class="nameRow">
          <div class="roleAboveName">// UI · UX · VISUAL DESIGN</div>
          <div class="nameStack">
            <div class="nameLine">
              <span class="nameFirst">Drew</span>
              <span class="nameLast">HARPER</span>
            </div>
          </div>
        </div>
        <div class="infoGrid">
          <div class="cLine">
            <span class="cKey">EMAIL</span>
            <a :href="`mailto:${copy.druEmail}`" class="cVal">
              {{ copy.druEmail }}
            </a>
          </div>
          <div class="cLine">
            <div class="cKey">RESUME</div>
            <div class="flex gap-4">
              <span class="cVal resumeIcons">
                <a
                  :href="copy.resumeWord"
                  target="_blank"
                  title="Word Resume"
                  aria-label="Word Resume"
                  class="resumeIconLink"
                >
                  Word
                  <IconWordMini class="resumeIcon" />
                </a>
              </span>
              <span class="cVal resumeIcons">
                <a
                  :href="copy.resumePDF"
                  target="_blank"
                  title="PDF Resume"
                  aria-label="PDF Resume"
                  class="resumeIconLink"
                >
                  PDF
                  <IconPDF class="resumeIcon" />
                </a>
              </span>
            </div>
          </div>
          <div class="cLine">
            <span class="cKey">LOCATION</span>
            <span class="cVal">NASHVILLE, TN</span>
          </div>
          <div class="cLine">
            <span class="cKey">STATUS</span>
            <span class="cVal blinkSlow">AVAILABLE ▮</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: progress / readouts — 2 columns -->
      <div class="rightCol">
        <div class="readoutLabel">// SKILL LEVEL</div>
        <div class="readoutGrid">
          <div class="readoutRow">
            <span class="readKey">UX/UI</span>
            <div class="bar"><div class="barFill" style="width: 95%" /></div>
          </div>
          <div class="readoutRow">
            <span class="readKey">HTML/CSS</span>
            <div class="bar"><div class="barFill" style="width: 90%" /></div>
          </div>
          <div class="readoutRow">
            <span class="readKey">VUE/NUXT</span>
            <div class="bar">
              <div class="barFill amber" style="width: 75%" />
            </div>
          </div>
          <div class="readoutRow">
            <span class="readKey">FIGMA</span>
            <div class="bar"><div class="barFill" style="width: 92%" /></div>
          </div>
          <div class="readoutRow">
            <span class="readKey">ADOBE CC</span>
            <div class="bar"><div class="barFill" style="width: 88%" /></div>
          </div>
          <div class="readoutRow">
            <span class="readKey">SKETCH</span>
            <div class="bar"><div class="barFill" style="width: 80%" /></div>
          </div>
        </div>
        <div class="dashDivider" />
        <div class="clockRow">
          <span class="clockLabel">SYS TIME</span>
          <span class="clockVal">{{ clock }}</span>
        </div>
        <div class="memRow">
          <span class="memChip">MEM: 640K</span>
          <span class="memChip">DISK: OK</span>
          <span class="memChip ready">▶ READY</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  import { ref, onMounted, onUnmounted } from 'vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();

  const clock = ref('');
  let clockInterval = null;
  function updateClock() {
    const now = new Date();
    clock.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  }
  onMounted(() => {
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  });
  onUnmounted(() => clearInterval(clockInterval));
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  /* ── Dashboard shell ── */
  .crtDash {
    @apply w-full relative overflow-hidden bg-transparent border-b-2 border-anthro-green;
    /* box-shadow:
      0 0 12px rgba(51, 255, 51, 0.1),
      0 4px 20px rgba(51, 255, 51, 0.12); */
  }

  /* CRT scanlines */
  .dashScanlines {
    @apply absolute inset-0 pointer-events-none z-20;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.14) 3px,
      rgba(0, 0, 0, 0.14) 4px
    );
  }

  /* ── Inner layout ── */
  .dashInner {
    @apply relative z-10 flex flex-row items-stretch gap-0 min-h-[180px];

    @media (max-width: 630px) {
      @apply grid min-h-auto;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
    }

    @media (max-width: 380px) {
      grid-template-columns: 1fr;
    }
  }

  /* Shared column divider */
  .centerCol,
  .rightCol {
    @apply border-r border-[#1a3a1a];

    &:last-child {
      @apply border-r-0;
    }
  }

  /* ── LEFT: mugshot column ── */
  .mugCol {
    @apply flex flex-col items-center justify-start gap-0 cursor-pointer shrink-0 pt-[2.3rem] px-[0.75rem] pb-0;
    flex: 0 0 auto;

    @media (max-width: 840px) {
      @apply p-8;
    }

    @media (max-width: 630px) {
      @apply p-2 flex-none w-auto border-r-0 border-b-0 flex-col items-center justify-center;
      grid-column: 1;
      grid-row: 1;
    }

    @media (max-width: 380px) {
      @apply items-center justify-center w-full border-r-0 border-b border-[#1a3a1a];
      grid-column: 1;
      grid-row: 1;
    }
  }

  /* Mugshot — square, sized to match header content height */
  .mugWrap {
    @apply relative shrink-0 m-0 z-50 border border-anthro-green;
    width: clamp(120px, 10vw, 150px);
    height: clamp(120px, 10vw, 150px);
    box-shadow: 0 0 8px rgba(51, 255, 51, 0.2);

    @media (max-width: 840px) {
      width: clamp(100px, 9vw, 130px);
      height: clamp(100px, 9vw, 130px);
    }

    @media (max-width: 630px) {
      @apply w-[90px] h-[90px] m-[4px];
    }

    @media (max-width: 380px) {
      @apply w-[80px] h-[80px] mx-auto my-2;
    }
  }

  .mugPixel {
    @apply absolute inset-0 bg-no-repeat bg-contain bg-top;
    background-image: url('/img/drew_mug.webp');
    filter: saturate(0.1) brightness(0.8) sepia(0.4) hue-rotate(80deg)
      contrast(1.4);
    image-rendering: pixelated;
  }

  .mugScanlines {
    @apply absolute inset-0 pointer-events-none;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.22) 2px,
      rgba(0, 0, 0, 0.22) 3px
    );
  }

  .corner {
    @apply absolute w-2.5 h-2.5 border-anthro-green border-solid border-0;
  }
  .corner.tl {
    @apply top-0 left-0 border-t-2 border-l-2;
  }
  .corner.tr {
    @apply top-0 right-0 border-t-2 border-r-2;
  }
  .corner.bl {
    @apply bottom-0 left-0 border-b-2 border-l-2;
  }
  .corner.br {
    @apply bottom-0 right-0 border-b-2 border-r-2;
  }

  /* 2×2 info grid: email, resume, location, status */
  .infoGrid {
    @apply grid w-[330px] gap-y-[0.6rem] gap-x-[2rem];
    grid-template-columns: auto auto;

    @media (max-width: 630px) {
      @apply w-auto max-w-full;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      @apply gap-x-0;
    }

    @media (max-width: 380px) {
      @apply justify-items-center;
    }
  }

  .cLine {
    @apply flex flex-col gap-[0.18rem];
  }

  .cKey {
    @apply text-[#8ccafb] leading-none uppercase tracking-[0.12em] font-anthro-subhead text-[0.85rem];
  }

  .cVal {
    @apply no-underline leading-tight font-anthro-subhead text-anthro-gold;
    font-size: clamp(1rem, 1.2vw, 1rem);
    text-shadow: 0 0 4px rgba(255, 208, 0, 0.5);

    &:hover {
      @apply text-anthro-green;
      text-shadow: 0 0 6px rgba(51, 255, 51, 0.8);
    }

    &.blinkSlow {
      @apply text-anthro-gold animate-[blinkSlow_3s_step-end_infinite];
      text-shadow: 0 0 5px rgba(255, 208, 0, 0.7);
    }

    &.resumeIcons {
      @apply flex items-center gap-4;

      &:hover a.resumeIconLink .resumeIcon {
        @apply fill-black text-anthro-gold;
      }

      a.resumeIconLink {
        @apply inline-flex items-center gap-1 no-underline text-anthro-gold;
        text-shadow: 0 0 4px rgba(255, 208, 0, 0.5);

        &:hover {
          @apply text-anthro-green underline underline-offset-3;
          text-shadow: 0 0 6px rgba(51, 255, 51, 0.8);
        }

        &:hover .resumeIcon {
          @apply text-anthro-green;
        }

        .resumeIcon {
          @apply w-3.5 fill-black text-anthro-gold ml-1;
        }
      }
    }
  }

  /* ── CENTER: name + info grid ── */
  .centerCol {
    @apply flex flex-col justify-start px-6 py-4 gap-3 cursor-pointer flex-1;

    @media (max-width: 840px) {
      @apply px-4;
    }

    @media (max-width: 630px) {
      @apply px-4 py-3 border-r-0 border-b border-[#1a3a1a];
      grid-column: 2;
      grid-row: 1;
    }

    @media (max-width: 380px) {
      @apply items-center text-center border-b-0 border-r-0;
      grid-column: 1;
      grid-row: 2;
    }
  }

  /* Name + role wrapper */
  .nameRow {
    @apply flex flex-col gap-1;

    @media (max-width: 380px) {
      @apply items-center;
    }
  }

  /* Role label above name */
  .roleAboveName {
    @apply leading-tight tracking-[0.1em] font-anthro-subhead;
    color: color-mix(in srgb, var(--color-anthro-green) 60%, transparent);
    font-size: clamp(0.5rem, 0.9vw, 0.65rem);
    text-shadow: 0 0 4px rgba(51, 255, 51, 0.3);
  }

  .nameStack {
    @apply flex flex-col leading-none gap-0;
  }

  /* Single-line name row */
  .nameLine {
    @apply flex flex-row items-baseline gap-2 leading-none flex-nowrap;
  }

  .nameFirst {
    @apply leading-[0.88] font-bold tracking-[0.08em] font-anthro-head text-anthro-green;
    font-size: clamp(2.2rem, 4.5vw, 4.2rem);
    text-shadow:
      0 0 10px rgba(51, 255, 51, 0.9),
      0 0 30px rgba(51, 255, 51, 0.35);

    @media (max-width: 630px) {
      font-size: clamp(1.8rem, 8vw, 3rem);
    }
  }

  .nameLast {
    @apply leading-[0.88] font-bold tracking-[0.08em] font-anthro-head text-anthro-gold;
    font-size: clamp(2.2rem, 4.5vw, 4.2rem);
    text-shadow:
      0 0 10px rgba(255, 208, 0, 0.9),
      0 0 30px rgba(255, 208, 0, 0.35);

    @media (max-width: 630px) {
      font-size: clamp(1.8rem, 8vw, 3rem);
    }
  }

  /* ── RIGHT: readouts — flush to top ── */
  .rightCol {
    @apply flex flex-col justify-start px-5 py-4 gap-1.5 shrink-0;
    flex: 0 0 380px;

    @media (max-width: 840px) {
      @apply px-3;
      flex: 0 0 260px;
    }

    @media (max-width: 630px) {
      @apply w-full border-r-0 border-t border-[#1a3a1a] px-4 py-3;
      flex: none;
      grid-column: 1 / -1;
      grid-row: 2;
    }

    @media (max-width: 380px) {
      grid-column: 1;
      grid-row: 3;
    }
  }

  .readoutLabel {
    @apply mb-1 tracking-[0.14em] font-anthro-subhead text-[0.5rem];
    color: color-mix(in srgb, var(--color-anthro-gold) 60%, transparent);
    text-shadow: 0 0 4px rgba(255, 208, 0, 0.3);
  }

  /* 2-column grid for skill bars */
  .readoutGrid {
    @apply grid grid-cols-2 gap-x-3 gap-y-1;
  }

  .readoutRow {
    @apply flex flex-row items-center gap-1.5;
  }

  .readKey {
    @apply text-[#8ccafb] shrink-0 tracking-[0.08em] font-anthro-subhead text-[0.48rem] min-w-[4.8em];
  }

  .bar {
    @apply flex-1 h-1.5 border border-[#1a3a1a] bg-[#050d05];
  }

  .barFill {
    @apply h-full bg-anthro-green;
    box-shadow: 0 0 4px rgba(51, 255, 51, 0.6);

    &.amber {
      @apply bg-anthro-gold;
      box-shadow: 0 0 4px rgba(255, 208, 0, 0.6);
    }
  }

  .dashDivider {
    @apply w-full my-1 h-px;
    background: repeating-linear-gradient(
      to right,
      #1a3a1a 0px,
      #1a3a1a 4px,
      transparent 4px,
      transparent 8px
    );
  }

  .clockRow {
    @apply flex flex-row items-baseline gap-2;
  }

  .clockLabel {
    @apply text-[#8ccafb] tracking-[0.1em] font-anthro-subhead text-[0.48rem];
  }

  .clockVal {
    @apply text-anthro-gold tracking-wide font-anthro-subhead text-[0.6rem];
    text-shadow: 0 0 5px rgba(255, 208, 0, 0.7);
  }

  .memRow {
    @apply flex flex-row gap-2 flex-wrap mt-0.5;
  }

  .memChip {
    @apply text-[#8ccafb] border border-[#1a3a5a] px-1 py-0 bg-[#080f14] tracking-[0.08em] font-anthro-subhead text-[0.45rem];

    &.ready {
      @apply border-[#1a3a1a] bg-[#080f08] text-anthro-green;
      text-shadow: 0 0 4px rgba(51, 255, 51, 0.5);
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes blinkSlow {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
