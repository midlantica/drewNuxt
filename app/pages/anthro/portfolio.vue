<script setup>
  const { store, toggleExtras } = usePageSetup('Anthro');
</script>

<template>
  <div>
    <!-- Full-width skills marquee strip at very top -->
    <div class="skillsMarquee">
      <span class="marqueeInner">
        UX · VISUAL DESIGN · HTML · CSS · VUE · NUXT · FIGMA · ILLUSTRATION ·
        ADOBE CC · AFFINITY · TAILWIND · SASS · JAVASCRIPT · SKETCH · FIGMA · UI
        DESIGN · UX · VISUAL DESIGN · HTML · CSS · VUE · NUXT · FIGMA ·
        ILLUSTRATION · ADOBE CC · AFFINITY · TAILWIND · SASS · JAVASCRIPT ·
        SKETCH · FIGMA · UI DESIGN ·&#8201;
      </span>
    </div>

    <transition name="topDown" appear>
      <AnthroNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <main class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
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

  .anthroFooter {
    @apply shadow-none mt-0 mx-0 px-0 w-full;
    background: transparent;
    border: none;
    color: #88cc88;
    font-family: 'Share Tech Mono', monospace;
  }

  .skillsDock {
    @apply w-full mx-0 px-0;
    border-bottom: 1px solid #33ff33;
  }

  @media (min-width: 1042px) {
    .mainGrid {
      @apply mx-8 mb-2 grid-cols-[7fr_6fr];
    }
  }
</style>
