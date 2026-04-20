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
          <span class="prompt">C:\ABOUT&gt;</span>
          <span class="cmd">TYPE PROFILE.TXT</span>
        </div>

        <div class="termDivider" />

        <!-- Headline as terminal output -->
        <div class="termOutput">
          <h2 class="termHeadline">{{ copy.druHead }}</h2>
        </div>

        <div class="termDivider dashed" />

        <!-- Stamp row -->
        <div class="stampRow">
          <AuthenticStamp class="termStamp" />
          <div class="stampMeta">
            <span class="stampLine big">CERTIFIED GENUINE</span>
            <span class="stampLine big dim">EST. 1999 · NASHVILLE, TN</span>
          </div>
        </div>

        <div class="termDivider" />

        <!-- Body copy -->
        <div class="termCopy" v-html="copy.druCopy" />
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
    @apply mr-4 mb-0 ml-0 flex flex-col relative;
    z-index: 40;
    margin-top: calc(var(--spacing, 0.25rem) * -3.1);

    @media (max-width: 1041px) {
      @apply mx-3;
    }

    @media (max-width: 630px) {
      @apply mx-2;
    }

    @media (min-width: 1042px) {
      margin-top: 1.15rem;
    }
  }

  /* ── Terminal window ── */
  .termWindow {
    @apply flex flex-col w-full overflow-hidden;
    border: 1px solid #33ff33;
    box-shadow:
      0 0 12px rgba(51, 255, 51, 0.1),
      3px 3px 0 #000;
    background: transparent;
  }

  /* Title bar */
  .termTitleBar {
    @apply flex flex-row items-center justify-between px-3 py-1;
    background: linear-gradient(180deg, #1a4a1a 0%, #0d2a0d 100%);
    border-bottom: 1px solid #33ff33;
    min-height: 29px;
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
    @apply text-[#ffd000] text-[0.58rem] tracking-[0.1em];
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(255, 208, 0, 0.6);
  }

  /* Terminal body */
  .termBody {
    @apply relative flex flex-col px-6 py-4;
    gap: 0.6rem;
    background: #000;
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
    @apply text-[#ffd000] text-[0.58rem] tracking-[0.14em] uppercase;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(255, 208, 0, 0.5);
  }

  .termHeadline {
    @apply m-0 p-0 leading-[1.3] font-normal;
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(1.1rem, 2.2vw, 1.6rem);
    color: #33ff33;
    text-shadow:
      0 0 6px rgba(51, 255, 51, 0.7),
      0 0 14px rgba(51, 255, 51, 0.2);
    letter-spacing: 0.02em;

    @media (max-width: 1024px) {
      font-size: clamp(1rem, 2.4vw, 1.35rem);
    }

    @media (max-width: 630px) {
      font-size: clamp(0.95rem, 4vw, 1.2rem);
    }
  }

  /* Stamp row */
  .stampRow {
    @apply flex flex-row items-center gap-3 relative z-20;
  }

  .termStamp {
    @apply flex-shrink-0;
    width: 3.45rem;
    min-width: 3.22rem;
    max-width: 3.45rem;
    fill: #ffd000;
    filter: drop-shadow(0 0 5px rgba(255, 208, 0, 0.6));
    opacity: 0.85;
    transform: rotate(-15deg);
  }

  .stampMeta {
    display: inline-flex;
    flex-direction: column;
    gap: 0;
  }

  .stampLine {
    @apply text-[#33ff33] text-[0.69rem] tracking-[0.16em] uppercase leading-tight;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 4px rgba(51, 255, 51, 0.5);

    &.big {
      display: block;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      line-height: 1.3;
      color: #ffd000;
      text-shadow: 0 0 5px rgba(255, 208, 0, 0.6);
    }

    &.dim {
      color: #8ccafb;
      text-shadow: 0 0 4px rgba(140, 202, 251, 0.5);
      display: block;
      text-align: justify;
      text-align-last: justify;
    }
  }

  /* Body copy */
  .termCopy {
    @apply relative z-20;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem !important;
    line-height: 1.85 !important;
    /* letter-spacing: 0.01em; */
    color: #33ff33;
    text-shadow:
      0 0 4px rgba(51, 255, 51, 0.5),
      0 0 10px rgba(51, 255, 51, 0.15);
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
