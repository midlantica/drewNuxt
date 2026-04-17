<template>
  <header class="crtHeader">
    <!-- Rainbow stripe across the very top -->
    <div class="rainbowBar">
      <div class="rb rb1" />
      <div class="rb rb2" />
      <div class="rb rb3" />
      <div class="rb rb4" />
      <div class="rb rb5" />
      <div class="rb rb6" />
    </div>

    <!-- Main CRT screen area -->
    <div class="crtScreen">
      <!-- Scanline overlay -->
      <div class="scanlines" aria-hidden="true" />

      <!-- OS Window chrome -->
      <div class="osWindow">
        <!-- Title bar -->
        <div class="titleBar">
          <div class="titleBarBtns">
            <span class="winBtn" />
            <span class="winBtn" />
          </div>
          <span class="titleBarText">DREW_HARPER.EXE — PORTFOLIO v1.0</span>
          <div class="titleBarBtns">
            <span class="winBtn square" />
            <span class="winBtn x">✕</span>
          </div>
        </div>

        <!-- Menu bar -->
        <div class="menuBar">
          <span class="menuItem">FILE</span>
          <span class="menuItem">EDIT</span>
          <span class="menuItem active">PORTFOLIO</span>
          <span class="menuItem">HELP</span>
        </div>

        <!-- Window body -->
        <div class="winBody">
          <!-- Left: pixelated mugshot + name -->
          <div class="leftCol" @click="$emit('toggleExtras')">
            <div class="mugWrap">
              <div class="mugPixel" />
              <div class="mugScanlines" aria-hidden="true" />
              <!-- Pixel corner brackets -->
              <span class="corner tl" />
              <span class="corner tr" />
              <span class="corner bl" />
              <span class="corner br" />
            </div>
            <div class="nameBlock">
              <div class="nameHead">DREW</div>
              <div class="nameHead accent">HARPER</div>
              <div class="nameSub">// UI · UX · VISUAL DESIGN</div>
            </div>
          </div>

          <!-- Vertical divider -->
          <div class="winDivider" />

          <!-- Right: system info panel -->
          <div class="rightCol">
            <div class="sysLine">
              <span class="sysKey">SYSTEM&nbsp;&nbsp;:</span>
              <span class="sysVal">PORTFOLIO OS 1.0</span>
            </div>
            <div class="sysLine">
              <span class="sysKey">USER&nbsp;&nbsp;&nbsp;&nbsp;:</span>
              <span class="sysVal phosphor">DREW HARPER</span>
            </div>
            <div class="sysLine">
              <span class="sysKey">SINCE&nbsp;&nbsp;&nbsp;:</span>
              <span class="sysVal">1999</span>
            </div>
            <div class="sysLine">
              <span class="sysKey">STATUS&nbsp;&nbsp;:</span>
              <span class="sysVal blink">AVAILABLE ▮</span>
            </div>
            <div class="sysDivider" />
            <div class="sysLine">
              <span class="sysKey">EMAIL&nbsp;&nbsp;&nbsp;:</span>
              <a :href="`mailto:${copy.druEmail}`" class="sysLink">
                {{ copy.druEmail }}
              </a>
            </div>
            <div class="sysLine">
              <span class="sysKey">RESUME&nbsp;&nbsp;:</span>
              <a :href="copy.portfolio" target="_blank" class="sysLink">
                PDF_DOWNLOAD.PDF
              </a>
            </div>
            <div class="sysDivider" />
            <div class="progressRow">
              <span class="sysKey">LOADING :</span>
              <div class="progressBar">
                <div class="progressFill" />
              </div>
              <span class="sysVal">100%</span>
            </div>
          </div>
        </div>

        <!-- Status bar -->
        <div class="statusBar">
          <span class="statusItem">▶ READY</span>
          <span class="statusItem">MEM: 640K</span>
          <span class="statusItem">DISK: OK</span>
          <span class="statusItem marqueeWrap">
            <span class="marqueeText">
              UX · VISUAL DESIGN · HTML · CSS · VUE · NUXT · FIGMA ·
              ILLUSTRATION · ADOBE CC · AFFINITY · TAILWIND · SASS
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UX · VISUAL DESIGN · HTML ·
              CSS · VUE · NUXT · FIGMA · ILLUSTRATION · ADOBE CC · AFFINITY ·
              TAILWIND · SASS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom rainbow stripe -->
    <div class="rainbowBar bottom">
      <div class="rb rb6" />
      <div class="rb rb5" />
      <div class="rb rb4" />
      <div class="rb rb3" />
      <div class="rb rb2" />
      <div class="rb rb1" />
    </div>
  </header>
</template>

<script setup>
  defineEmits(['toggleExtras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  /* ── Rainbow bar ── */
  .rainbowBar {
    @apply flex flex-row w-full;
    height: 8px;
  }

  .rb {
    @apply flex-1;
  }

  .rb1 {
    background: #ff2222;
  }
  .rb2 {
    background: #ff8800;
  }
  .rb3 {
    background: #ffee00;
  }
  .rb4 {
    background: #22cc22;
  }
  .rb5 {
    background: #2288ff;
  }
  .rb6 {
    background: #aa22ff;
  }

  /* ── CRT outer shell ── */
  .crtHeader {
    @apply w-full flex flex-col overflow-hidden;
    background: #0a0e0a;
    /* Subtle vignette */
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.6);
  }

  /* ── CRT screen area ── */
  .crtScreen {
    @apply relative w-full;
    background: #050d05;
    padding: 12px 14px 10px;
  }

  /* Scanlines overlay */
  .scanlines {
    @apply absolute inset-0 pointer-events-none z-20;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.18) 3px,
      rgba(0, 0, 0, 0.18) 4px
    );
  }

  /* ── OS Window ── */
  .osWindow {
    @apply relative flex flex-col w-full z-10;
    border: 2px solid #4488cc;
    box-shadow:
      0 0 0 1px #0a1a2e,
      0 0 12px rgba(68, 136, 204, 0.4),
      inset 0 0 0 1px #1a3a5a;
  }

  /* Title bar */
  .titleBar {
    @apply flex flex-row items-center justify-between px-2 py-1;
    background: linear-gradient(180deg, #1a5aaa 0%, #0d3a7a 60%, #0a2a5a 100%);
    border-bottom: 1px solid #4488cc;
    min-height: 22px;
  }

  .titleBarBtns {
    @apply flex flex-row gap-1 items-center;
  }

  .winBtn {
    @apply inline-block w-3 h-3 border border-[#88aacc];
    background: #1a4a8a;

    &.square::before {
      content: '□';
      @apply text-[#88ccff] text-[0.5rem] leading-none;
    }

    &.x {
      @apply text-[#ff4444] text-[0.55rem] leading-none flex items-center justify-center font-bold;
      background: #3a1a1a;
      border-color: #cc4444;
    }
  }

  .titleBarText {
    @apply text-[#c8e4ff] text-[0.6rem] font-bold tracking-[0.12em] uppercase;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 6px rgba(136, 204, 255, 0.8);
  }

  /* Menu bar */
  .menuBar {
    @apply flex flex-row gap-0 px-1 py-0;
    background: #0a1a2e;
    border-bottom: 1px solid #2a4a6a;
  }

  .menuItem {
    @apply px-3 py-1 text-[#88ccff] text-[0.6rem] tracking-[0.1em] cursor-pointer;
    font-family: 'Share Tech Mono', monospace;

    &:hover {
      background: #1a3a6a;
      @apply text-white;
    }

    &.active {
      background: #1155aa;
      @apply text-white;
    }
  }

  /* Window body */
  .winBody {
    @apply flex flex-row w-full;
    background: #050d05;
    min-height: 160px;

    @media (max-width: 630px) {
      @apply flex-col;
    }
  }

  /* Left column */
  .leftCol {
    @apply flex flex-row items-end gap-4 px-5 py-4 cursor-pointer flex-shrink-0;
    flex: 0 0 48%;
    border-right: 1px solid #1a3a1a;

    @media (max-width: 840px) {
      flex: 0 0 52%;
      @apply px-3 py-3 gap-3;
    }

    @media (max-width: 630px) {
      @apply w-full border-r-0 border-b border-[#1a3a1a];
      flex: none;
    }
  }

  /* Pixelated mugshot */
  .mugWrap {
    @apply relative flex-shrink-0;
    width: clamp(80px, 12vw, 150px);
    height: clamp(96px, 14.5vw, 182px);
  }

  .mugPixel {
    @apply absolute inset-0 bg-no-repeat bg-cover bg-top;
    background-image: url('/img/drew_mug.webp');
    /* Pixelate + desaturate + phosphor tint */
    filter: saturate(0.15) brightness(0.85) sepia(0.4) hue-rotate(80deg)
      contrast(1.3);
    image-rendering: pixelated;
  }

  .mugScanlines {
    @apply absolute inset-0 pointer-events-none;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.25) 2px,
      rgba(0, 0, 0, 0.25) 3px
    );
  }

  /* Pixel corner brackets */
  .corner {
    @apply absolute w-3 h-3 border-[#33ff33];
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

  /* Name block */
  .nameBlock {
    @apply flex flex-col justify-end gap-0 pb-1;
  }

  .nameHead {
    @apply leading-none font-black uppercase;
    font-family: 'Doto', 'Share Tech Mono', monospace;
    font-size: clamp(2.2rem, 5.5vw, 5rem);
    color: #33ff33;
    text-shadow:
      0 0 8px rgba(51, 255, 51, 0.9),
      0 0 20px rgba(51, 255, 51, 0.4);
    letter-spacing: 0.04em;

    &.accent {
      color: #ffb000;
      text-shadow:
        0 0 8px rgba(255, 176, 0, 0.9),
        0 0 20px rgba(255, 176, 0, 0.4);
    }

    @media (max-width: 630px) {
      font-size: clamp(2rem, 10vw, 3.5rem);
    }
  }

  .nameSub {
    @apply text-[#33ff33]/50 leading-tight mt-1;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.5rem, 1vw, 0.65rem);
    letter-spacing: 0.1em;
  }

  /* Vertical divider */
  .winDivider {
    @apply w-px self-stretch flex-shrink-0;
    background: #1a3a1a;

    @media (max-width: 630px) {
      @apply hidden;
    }
  }

  /* Right column */
  .rightCol {
    @apply flex flex-col justify-center gap-1 px-5 py-4 flex-1;

    @media (max-width: 840px) {
      @apply px-3 py-3;
    }

    @media (max-width: 630px) {
      @apply px-4 py-3;
    }
  }

  .sysLine {
    @apply flex flex-row items-baseline gap-2;
  }

  .sysKey {
    @apply text-[#4488cc] text-[0.62rem] tracking-[0.08em] flex-shrink-0;
    font-family: 'Share Tech Mono', monospace;
  }

  .sysVal {
    @apply text-[#88ccff] text-[0.62rem] tracking-[0.06em];
    font-family: 'Share Tech Mono', monospace;

    &.phosphor {
      color: #33ff33;
      text-shadow: 0 0 6px rgba(51, 255, 51, 0.7);
    }

    &.blink {
      color: #ffb000;
      text-shadow: 0 0 6px rgba(255, 176, 0, 0.7);
      animation: blink 1.2s step-end infinite;
    }
  }

  .sysLink {
    @apply text-[0.62rem] tracking-[0.06em] no-underline;
    font-family: 'Share Tech Mono', monospace;
    color: #ffb000;
    text-shadow: 0 0 4px rgba(255, 176, 0, 0.5);

    &:hover {
      color: #33ff33;
      text-shadow: 0 0 6px rgba(51, 255, 51, 0.8);
      text-decoration: underline;
    }
  }

  .sysDivider {
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

  /* Progress bar */
  .progressRow {
    @apply flex flex-row items-center gap-2 mt-1;
  }

  .progressBar {
    @apply flex-1 h-2 border border-[#2a4a2a];
    background: #050d05;
    max-width: 120px;
  }

  .progressFill {
    @apply h-full;
    background: linear-gradient(90deg, #33ff33 0%, #ffb000 60%, #ff4444 100%);
    width: 100%;
    box-shadow: 0 0 4px rgba(51, 255, 51, 0.6);
  }

  /* Status bar */
  .statusBar {
    @apply flex flex-row items-center gap-0 px-2 py-1 overflow-hidden;
    background: #0a1a2e;
    border-top: 1px solid #2a4a6a;
  }

  .statusItem {
    @apply text-[#4488cc] text-[0.55rem] tracking-[0.1em] uppercase px-2 border-r border-[#1a3a5a] flex-shrink-0;
    font-family: 'Share Tech Mono', monospace;

    &:last-child {
      @apply border-r-0 flex-1 overflow-hidden;
    }
  }

  /* Marquee */
  .marqueeWrap {
    @apply overflow-hidden;
  }

  .marqueeText {
    @apply inline-block whitespace-nowrap;
    color: #33ff33;
    text-shadow: 0 0 4px rgba(51, 255, 51, 0.5);
    animation: marquee 22s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
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
