<template>
  <div class="aboutGrid">
    <transition name="bounce3" appear>
      <ModernHeadAndCopy
        @toggleExtras="toggleExtras"
        :isShowContent="isShowContent"
      />
    </transition>
    <transition name="bounce4" appear>
      <About 
        toggleExtras="toggleExtras"
        :isShowContent="isShowContent"
      />
    </transition>
  </div>
</template>

<script setup>
  const { showExtras, showContent, toggleExtras, selectedBtn } = useToggleExtras();

  const props = defineProps(['isShowContent', 'selectedBtn'])
</script>

<style scoped>
  .aboutGrid {
    @apply w-[80%] grid grid-cols-[minmax(auto,_2fr)_minmax(225px,_1fr)] gap-8 m-auto;

    @media (max-width: 850px) {
      @apply w-[90%] grid grid-cols-1;
    }
  }
</style>
