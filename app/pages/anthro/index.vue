<script setup>
  const { store } = usePageSetup('Anthro');
</script>

<template>
  <div>
    <!-- Full-width skills marquee strip at very top -->
    <div class="skillsMarquee">
      <span class="marqueeInner">
        UX · VISUAL DESIGN · HTML · CSS · VUE · NUXT · FIGMA · ILLUSTRATION ·
        ADOBE CC · AFFINITY · TAILWIND · SASS · JAVASCRIPT · SKETCH · FIGMA · UI
        DESIGN &nbsp;·&nbsp; UX · VISUAL DESIGN · HTML · CSS · VUE · NUXT ·
        FIGMA · ILLUSTRATION · ADOBE CC · AFFINITY · TAILWIND · SASS ·
        JAVASCRIPT · SKETCH · FIGMA · UI DESIGN &nbsp;·&nbsp;
      </span>
    </div>

    <transition name="topDown" appear>
      <AnthroNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>

    <main v-if="store.isShowContent" class="mainGrid">
      <transition name="bounce2" appear>
        <AnthroHeadAndCopy
          class="copyArea"
          :is-show-content="store.isShowContent"
          @toggle-extras="store.toggleExtras"
        />
      </transition>

      <transition name="bounce4" appear>
        <Carousel class="slides" />
      </transition>

      <transition name="bounce8" appear>
        <About />
      </transition>
    </main>

    <main v-else class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </main>

    <footer class="anthroFooter">
      <Skills class="skillsDock" />
      <Quote />
    </footer>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  /* CRT scanline background */
  .crtBg {
    min-height: 100vh;
    background-color: #0a1a0a;
    background-image:
      /* Subtle phosphor glow gradient */
      radial-gradient(
        ellipse at 50% 0%,
        rgba(0, 60, 0, 0.45) 0%,
        transparent 70%
      ),
      /* Scanlines: alternating dark bands every 6px */
      repeating-linear-gradient(
          to bottom,
          transparent 0px,
          transparent 3px,
          rgba(0, 0, 0, 0.75) 3px,
          rgba(0, 0, 0, 0.75) 6px
        );
    background-size:
      100% 100%,
      100% 6px;
    /* Very faint overall vignette */
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.7);
  }

  /* Top skills marquee strip */
  .skillsMarquee {
    @apply w-full overflow-hidden;
    background: rgba(51, 255, 51, 0.5);
    border-bottom: 1px solid #33ff33;
    box-shadow: 0 0 8px rgba(51, 255, 51, 0.2);
    padding: 4px 0;
  }

  .marqueeInner {
    @apply inline-block whitespace-nowrap;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.66rem;
    letter-spacing: 0.14em;
    color: #000;
    text-shadow: none;
    animation: marquee 28s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .mainGrid {
    @apply grid mt-0 mx-4 mb-2 gap-y-4 gap-x-0 grid-cols-1;
  }

  .copyArea {
    @apply row-start-1;
  }

  .slides {
    @apply row-start-2 z-30 mt-0;
  }

  .about {
    @apply row-start-4;
  }

  .anthroFooter {
    @apply shadow-none mt-0 mx-0 px-0 w-full;
    background: transparent;
    border: 2px solid #00ff0063;
    color: #88cc88;
    font-family: 'Share Tech Mono', monospace;
  }

  .skillsDock {
    @apply w-full mx-0 px-0;
    border-bottom: 1px solid #33ff33;
  }

  @media (min-width: 1025px) {
    .mainGrid {
      @apply mx-8 mb-2 grid-cols-[7fr_6fr];
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-30 -mt-20;
    }

    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }

    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  @media (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    .mainGrid {
      @apply mx-8 mb-2 grid-cols-[7fr_6fr];
    }

    .copyArea {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    .slides {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-30 -mt-20;
    }

    .skillsGrid {
      @apply col-span-full row-start-3 row-end-4;
    }

    .about {
      @apply col-start-2 col-end-3 row-start-2 row-end-3;
    }
  }

  @media (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .slides {
      @apply mt-[-5.5em];
    }
  }
</style>
