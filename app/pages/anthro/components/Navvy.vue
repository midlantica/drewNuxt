<template>
  <header class="crtDash">
    <!-- CRT scanline bg overlay -->
    <div class="dashScanlines" aria-hidden="true" />

    <!-- Dashboard layout -->
    <div class="dashInner">
      <!-- LEFT: mugshot column -->
      <div class="mugCol" @click="$emit('toggleExtras')">
        <div class="roleLabel">// UI · UX · VISUAL DESIGN</div>
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
        <div class="nameStack">
          <div class="nameFirst">DREW</div>
          <div class="nameLast">HARPER</div>
        </div>
        <div class="contactUnderName">
          <div class="cLine">
            <span class="cKey">EMAIL</span>
            <a :href="`mailto:${copy.druEmail}`" class="cVal">
              {{ copy.druEmail }}
            </a>
          </div>
          <div class="cLine">
            <span class="cKey">RESUME</span>
            <a :href="copy.portfolio" target="_blank" class="cVal">
              PDF_DOWNLOAD.PDF
            </a>
          </div>
        </div>
        <div class="sysGrid">
          <div class="sysLine">
            <span class="sysKey">STATUS</span>
            <span class="sysVal blink">AVAILABLE ▮</span>
          </div>
          <div class="sysLine">
            <span class="sysKey">LOCATION</span>
            <span class="sysVal">NASHVILLE, TN</span>
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
    @apply w-full relative overflow-hidden;
    background: #050d05;
    border-bottom: 2px solid #33ff33;
    box-shadow: 0 4px 24px rgba(51, 255, 51, 0.15);
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
    @apply relative z-10 flex flex-row items-stretch gap-0;
    min-height: 180px;

    @media (max-width: 630px) {
      @apply flex-col;
      min-height: auto;
    }
  }

  /* Shared column divider */
  .mugCol,
  .centerCol,
  .rightCol {
    border-right: 1px solid #1a3a1a;

    &:last-child {
      border-right: none;
    }
  }

  /* ── LEFT: mugshot column ── */
  .mugCol {
    @apply flex flex-col items-center justify-between px-4 py-3 gap-2 cursor-pointer flex-shrink-0;
    flex: 0 0 140px;

    @media (max-width: 840px) {
      flex: 0 0 120px;
      @apply px-3;
    }

    @media (max-width: 630px) {
      @apply flex-row w-full border-r-0 border-b border-[#1a3a1a];
      flex: none;
    }
  }

  .roleLabel {
    @apply text-[#33ff33]/60 text-center leading-tight;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.42rem, 0.8vw, 0.55rem);
    letter-spacing: 0.1em;
    text-shadow: 0 0 4px rgba(51, 255, 51, 0.3);

    @media (max-width: 630px) {
      @apply hidden;
    }
  }

  /* Mugshot */
  .mugWrap {
    @apply relative flex-shrink-0;
    width: clamp(60px, 8vw, 90px);
    height: clamp(72px, 9.5vw, 110px);

    @media (max-width: 630px) {
      width: 70px;
      height: 85px;
    }
  }

  .mugPixel {
    @apply absolute inset-0 bg-no-repeat bg-cover bg-top;
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
    @apply absolute w-2.5 h-2.5 border-[#33ff33];
    border-style: solid;
    border-width: 0;
  }
  .corner.tl {
    top: 0;
    left: 0;
    border-top-width: 2px;
    border-left-width: 2px;
  }
  .corner.tr {
    top: 0;
    right: 0;
    border-top-width: 2px;
    border-right-width: 2px;
  }
  .corner.bl {
    bottom: 0;
    left: 0;
    border-bottom-width: 2px;
    border-left-width: 2px;
  }
  .corner.br {
    bottom: 0;
    right: 0;
    border-bottom-width: 2px;
    border-right-width: 2px;
  }

  /* Contact under name in center col */
  .contactUnderName {
    @apply flex flex-col gap-1;
  }

  .cLine {
    @apply flex flex-col gap-0;
  }

  .cKey {
    @apply text-[#4488cc] leading-none;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .cVal {
    @apply no-underline leading-tight;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.42rem, 0.75vw, 0.58rem);
    color: #ffb000;
    text-shadow: 0 0 4px rgba(255, 176, 0, 0.5);

    &:hover {
      color: #33ff33;
      text-shadow: 0 0 6px rgba(51, 255, 51, 0.8);
    }
  }

  /* ── CENTER: name + sys info ── */
  .centerCol {
    @apply flex flex-col justify-center px-6 py-4 gap-3 cursor-pointer flex-1;

    @media (max-width: 840px) {
      @apply px-4;
    }

    @media (max-width: 630px) {
      @apply px-4 py-3 border-r-0 border-b border-[#1a3a1a];
    }
  }

  .nameStack {
    @apply flex flex-col leading-none gap-0;
  }

  .nameFirst {
    @apply leading-[0.88] font-black;
    font-family: 'Doto', 'Share Tech Mono', monospace;
    font-size: clamp(2.8rem, 6vw, 5.5rem);
    color: #33ff33;
    text-shadow:
      0 0 10px rgba(51, 255, 51, 0.9),
      0 0 30px rgba(51, 255, 51, 0.35);
    letter-spacing: 0.03em;

    @media (max-width: 630px) {
      font-size: clamp(2.4rem, 11vw, 3.8rem);
    }
  }

  .nameLast {
    @apply leading-[0.88] font-black;
    font-family: 'Doto', 'Share Tech Mono', monospace;
    font-size: clamp(2.8rem, 6vw, 5.5rem);
    color: #ffb000;
    text-shadow:
      0 0 10px rgba(255, 176, 0, 0.9),
      0 0 30px rgba(255, 176, 0, 0.35);
    letter-spacing: 0.03em;

    @media (max-width: 630px) {
      font-size: clamp(2.4rem, 11vw, 3.8rem);
    }
  }

  .sysGrid {
    @apply flex flex-col gap-0.5;
  }

  .sysLine {
    @apply flex flex-row items-baseline gap-2;
  }

  .sysKey {
    @apply text-[#4488cc] flex-shrink-0;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.48rem, 0.9vw, 0.6rem);
    letter-spacing: 0.1em;
    min-width: 5.5em;
  }

  .sysVal {
    @apply text-[#88ccff];
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.48rem, 0.9vw, 0.6rem);
    letter-spacing: 0.06em;

    &.blink {
      color: #ffb000;
      text-shadow: 0 0 5px rgba(255, 176, 0, 0.7);
      animation: blink 1.2s step-end infinite;
    }
  }

  /* ── RIGHT: readouts ── */
  .rightCol {
    @apply flex flex-col justify-center px-5 py-4 gap-1.5 flex-shrink-0;
    flex: 0 0 320px;

    @media (max-width: 840px) {
      flex: 0 0 260px;
      @apply px-3;
    }

    @media (max-width: 630px) {
      @apply w-full border-r-0 px-4 py-3;
      flex: none;
    }
  }

  .readoutLabel {
    @apply text-[#ffb000]/60 mb-1;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.14em;
    text-shadow: 0 0 4px rgba(255, 176, 0, 0.3);
  }

  /* 2-column grid for skill bars */
  .readoutGrid {
    @apply grid gap-x-3 gap-y-1;
    grid-template-columns: 1fr 1fr;
  }

  .readoutRow {
    @apply flex flex-row items-center gap-1.5;
  }

  .readKey {
    @apply text-[#4488cc] flex-shrink-0;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.08em;
    min-width: 4.8em;
  }

  .bar {
    @apply flex-1 h-1.5 border border-[#1a3a1a];
    background: #050d05;
  }

  .barFill {
    @apply h-full;
    background: #33ff33;
    box-shadow: 0 0 4px rgba(51, 255, 51, 0.6);

    &.amber {
      background: #ffb000;
      box-shadow: 0 0 4px rgba(255, 176, 0, 0.6);
    }
  }

  .dashDivider {
    @apply w-full my-1;
    height: 1px;
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
    @apply text-[#4488cc];
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.1em;
  }

  .clockVal {
    @apply text-[#ffb000];
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    text-shadow: 0 0 5px rgba(255, 176, 0, 0.7);
  }

  .memRow {
    @apply flex flex-row gap-2 flex-wrap mt-0.5;
  }

  .memChip {
    @apply text-[#4488cc] border border-[#1a3a5a] px-1 py-0;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.45rem;
    letter-spacing: 0.08em;
    background: #080f14;

    &.ready {
      color: #33ff33;
      border-color: #1a3a1a;
      background: #080f08;
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
</style>
