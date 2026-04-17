<template>
  <header class="anthroHeader">
    <nav class="anthroNav">
      <!-- Decorative top rule -->
      <div class="topRule" />

      <div class="mastMain">
        <!-- Portrait -->
        <div class="portraitWrap" @click="$emit('toggleExtras')">
          <div class="portrait" />
          <div class="portraitRing" />
        </div>

        <!-- Name + title block -->
        <div class="nameBlock" @click="$emit('toggleExtras')">
          <div class="nameRow">
            <span class="firstName">Drew</span>
            <span class="lastName">Harper</span>
          </div>
          <div class="titleRow">
            <span class="titlePill">{{ copy.uiuxDesigner }}</span>
            <span class="titleDivider">·</span>
            <span class="titlePill">{{ copy.vizDesigner }}</span>
          </div>
        </div>

        <!-- Contact block -->
        <div class="contactBlock">
          <a :href="`mailto:${copy.druEmail}`" class="contactLink emailLink">
            <span class="contactIcon">✉</span>
            {{ copy.druEmail }}
          </a>
          <a
            :href="copy.portfolio"
            target="_blank"
            class="contactLink resumeLink"
          >
            <span class="contactIcon">↓</span>
            PDF Résumé
          </a>
        </div>
      </div>

      <!-- Bottom accent bar -->
      <div class="accentBar" />
    </nav>
  </header>
</template>

<script setup>
  defineEmits(['toggleExtras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .anthroHeader {
    @apply w-full bg-[#f5f0e8];
  }

  .anthroNav {
    @apply w-full flex flex-col;
  }

  .topRule {
    @apply w-full h-[3px] bg-[#c4603a];
  }

  .mastMain {
    @apply flex flex-row flex-wrap items-center gap-6 px-8 py-5;

    @media (max-width: 840px) {
      @apply px-5 py-4 gap-4;
    }

    @media (max-width: 630px) {
      @apply px-4 py-3 gap-3 flex-col items-start;
    }
  }

  /* Portrait */
  .portraitWrap {
    @apply relative flex-shrink-0 cursor-pointer;
    width: 72px;
    height: 72px;

    @media (max-width: 630px) {
      width: 56px;
      height: 56px;
    }
  }

  .portrait {
    @apply absolute inset-0 rounded-full bg-no-repeat bg-cover bg-center z-10;
    background-image: url('/img/drew_mug_sepia.webp');
    width: 72px;
    height: 72px;

    @media (max-width: 630px) {
      width: 56px;
      height: 56px;
    }
  }

  .portraitRing {
    @apply absolute rounded-full border-2 border-[#c4603a] z-20;
    inset: -4px;
    width: calc(72px + 8px);
    height: calc(72px + 8px);

    @media (max-width: 630px) {
      width: calc(56px + 8px);
      height: calc(56px + 8px);
    }
  }

  /* Name block */
  .nameBlock {
    @apply flex flex-col gap-1 flex-1 cursor-pointer;

    @media (max-width: 630px) {
      @apply gap-1;
    }
  }

  .nameRow {
    @apply flex flex-row items-baseline gap-3 leading-none;
  }

  .firstName {
    @apply text-[2.6rem] font-normal tracking-tight text-[#2c2825] leading-none;
    font-family: 'Bodoni Moda', Times, serif;
    font-style: italic;

    @media (max-width: 840px) {
      @apply text-[2rem];
    }

    @media (max-width: 630px) {
      @apply text-[1.8rem];
    }
  }

  .lastName {
    @apply text-[2.6rem] font-semibold tracking-tight text-[#2c2825] leading-none;
    font-family: 'Bodoni Moda', Times, serif;

    @media (max-width: 840px) {
      @apply text-[2rem];
    }

    @media (max-width: 630px) {
      @apply text-[1.8rem];
    }
  }

  .titleRow {
    @apply flex flex-row items-center gap-2 mt-1;

    @media (max-width: 430px) {
      @apply flex-wrap gap-1;
    }
  }

  .titlePill {
    @apply text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#c4603a] bg-[#c4603a1a] px-2 py-0.5 rounded-sm;
    font-family: Poppins, 'Helvetica Neue', sans-serif;
  }

  .titleDivider {
    @apply text-[#c4603a] text-sm font-light;
  }

  /* Contact block */
  .contactBlock {
    @apply flex flex-col gap-2 ml-auto;

    @media (max-width: 840px) {
      @apply ml-0;
    }

    @media (max-width: 630px) {
      @apply flex-row flex-wrap gap-3 ml-0;
    }
  }

  .contactLink {
    @apply flex items-center gap-2 no-underline text-[#2c2825] text-[0.82rem] tracking-wide transition-colors duration-200;
    font-family: Poppins, 'Helvetica Neue', sans-serif;

    &:hover {
      @apply text-[#c4603a];
    }
  }

  .contactIcon {
    @apply text-[#c4603a] text-[0.9rem];
  }

  /* Accent bar */
  .accentBar {
    @apply w-full h-[1px] bg-[#2c282520];
  }
</style>
