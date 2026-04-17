<template>
  <section v-show="store.isShowContent" class="termSection">
    <!-- Terminal window chrome -->
    <div class="termWindow">
      <!-- Title bar -->
      <div class="termTitleBar">
        <div class="termDots">
          <span class="termDot" />
          <span class="termDot" />
          <span class="termDot" />
        </div>
        <span class="termTitle">PROFILE.TXT — READ ONLY</span>
        <span class="termClock">{{ clock }}</span>
      </div>

      <!-- Terminal body -->
      <div class="termBody">
        <!-- Scanlines -->
        <div class="termScanlines" aria-hidden="true" />

        <!-- Prompt lines -->
        <div class="promptLine">
          <span class="prompt">C:\PORTFOLIO&gt;</span>
          <span class="cmd">TYPE PROFILE.TXT</span>
        </div>

        <div class="termDivider" />

        <!-- Headline as terminal output -->
        <div class="termOutput">
          <span class="outputLabel">// ABOUT</span>
          <h2 class="termHeadline">{{ copy.druHead }}</h2>
        </div>

        <div class="termDivider dashed" />

        <!-- Stamp row -->
        <div class="stampRow">
          <AuthenticStamp class="termStamp" />
          <div class="stampMeta">
            <span class="stampLine">CERTIFIED GENUINE</span>
            <span class="stampLine dim">EST. 1999 · NASHVILLE, TN</span>
          </div>
        </div>

        <div class="termDivider" />

        <!-- Body copy -->
        <div class="termCopy" v-html="copy.druCopy" />

        <!-- Blinking cursor at end -->
        <div class="cursorLine">
          <span class="prompt">C:\PORTFOLIO&gt;</span>
          <span class="cursor">▮</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const copy = useCopy();
  const store = useToggleExtrasStore();

  // Live clock for retro effect
  const clock = ref('');
  let clockInterval = null;

  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.value = `${h}:${m}:${s}`;
  }

  onMounted(() => {
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  });

  onUnmounted(() => {
    clearInterval(clockInterval);
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .termSection {
    @apply mt-4 mr-4 mb-0 ml-4 flex flex-col;

    @media (max-width: 1024px) {
      @apply mt-3 mx-3;
    }

    @media (max-width: 630px) {
      @apply mx-2;
    }
  }

  /* ── Terminal window ── */
  .termWindow {
    @apply flex flex-col w-full overflow-hidden;
    border: 2px solid #33ff33;
    box-shadow:
      0 0 0 1px #0a1a0a,
      0 0 16px rgba(51, 255, 51, 0.25),
      inset 0 0 0 1px #0a2a0a;
    background: #050d05;
  }

  /* Title bar */
  .termTitleBar {
    @apply flex flex-row items-center justify-between px-3 py-1;
    background: linear-gradient(180deg, #1a4a1a 0%, #0d2a0d 100%);
    border-bottom: 1px solid #33ff33;
    min-height: 20px;
  }

  .termDots {
    @apply flex flex-row gap-1 items-center;
  }

  .termDot {
    @apply inline-block w-2.5 h-2.5 rounded-full;
    background: #1a3a1a;
    border: 1px solid #33ff33;
    box-shadow: 0 0 3px rgba(51, 255, 51, 0.4);
  }

  .termTitle {
    @apply text-[#33ff33] text-[0.58rem] font-bold tracking-[0.14em] uppercase;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 5px rgba(51, 255, 51, 0.7);
  }

  .termClock {
    @apply text-[#ffb000] text-[0.58rem] tracking-[0.1em];
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(255, 176, 0, 0.6);
  }

  /* Terminal body */
  .termBody {
    @apply relative flex flex-col gap-2 px-4 py-3;
    background: #050d05;
  }

  /* Scanlines */
  .termScanlines {
    @apply absolute inset-0 pointer-events-none z-10;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.12) 3px,
      rgba(0, 0, 0, 0.12) 4px
    );
  }

  /* Prompt line */
  .promptLine {
    @apply flex flex-row items-baseline gap-2 relative z-20;
  }

  .prompt {
    @apply text-[#4488cc] text-[0.62rem] tracking-[0.06em] flex-shrink-0;
    font-family: 'Share Tech Mono', monospace;
  }

  .cmd {
    @apply text-[#88ccff] text-[0.62rem] tracking-[0.06em];
    font-family: 'Share Tech Mono', monospace;
  }

  /* Dividers */
  .termDivider {
    @apply w-full relative z-20;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #1a3a1a 0px,
      #1a3a1a 6px,
      transparent 6px,
      transparent 10px
    );

    &.dashed {
      background: repeating-linear-gradient(
        to right,
        #2a2a0a 0px,
        #2a2a0a 3px,
        transparent 3px,
        transparent 6px
      );
    }
  }

  /* Output block */
  .termOutput {
    @apply flex flex-col gap-1 relative z-20;
  }

  .outputLabel {
    @apply text-[#ffb000] text-[0.58rem] tracking-[0.14em] uppercase;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(255, 176, 0, 0.5);
  }

  .termHeadline {
    @apply m-0 p-0 leading-[1.3] font-normal;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(0.95rem, 2vw, 1.35rem);
    color: #33ff33;
    text-shadow:
      0 0 6px rgba(51, 255, 51, 0.7),
      0 0 14px rgba(51, 255, 51, 0.2);
    letter-spacing: 0.02em;

    @media (max-width: 1024px) {
      font-size: clamp(0.88rem, 2.2vw, 1.15rem);
    }

    @media (max-width: 630px) {
      font-size: clamp(0.82rem, 3.5vw, 1rem);
    }
  }

  /* Stamp row */
  .stampRow {
    @apply flex flex-row items-center gap-3 relative z-20;
  }

  .termStamp {
    @apply w-12 min-w-[2.8rem] max-w-[3rem] flex-shrink-0;
    fill: #33ff33;
    filter: drop-shadow(0 0 4px rgba(51, 255, 51, 0.5));
    opacity: 0.7;
  }

  .stampMeta {
    @apply flex flex-col gap-0;
  }

  .stampLine {
    @apply text-[#33ff33] text-[0.55rem] tracking-[0.16em] uppercase leading-tight;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(51, 255, 51, 0.5);

    &.dim {
      @apply text-[#33ff33]/40;
      text-shadow: none;
    }
  }

  /* Body copy */
  .termCopy {
    @apply text-[0.72rem] leading-[1.85] tracking-[0.04em] relative z-20;
    font-family: 'Share Tech Mono', monospace;
    color: #88cc88;
    text-shadow: 0 0 3px rgba(51, 255, 51, 0.2);

    @media (max-width: 1024px) {
      @apply text-[0.68rem] leading-[1.8];
    }

    @media (max-width: 630px) {
      @apply text-[0.65rem] leading-[1.75];
    }
  }

  /* Cursor line */
  .cursorLine {
    @apply flex flex-row items-baseline gap-2 relative z-20;
  }

  .cursor {
    @apply text-[#33ff33] text-[0.7rem];
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 6px rgba(51, 255, 51, 0.9);
    animation: blink 1s step-end infinite;
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
