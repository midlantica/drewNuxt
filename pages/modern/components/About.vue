<template>
  <div class="aboutGrid">
    <transition name="bounce3" appear>
      <ModernHeadAndCopy
      :showContent="showContent" @onExtrasToggled="onExtrasToggled"
      />
    </transition>
    <transition name="bounce4" appear>
      <About />
    </transition>
  </div>
</template>

<script setup>
  const { showExtras, showContent, toggleExtras, onExtrasToggled } = useToggleExtras();

  onMounted(() => {
    showContent.value = true
  })

</script>

<style scoped>

  .aboutGrid {
    @apply w-[80%] grid grid-cols-[minmax(auto,_2fr)_minmax(225px,_1fr)] gap-8 m-auto;

    @media (max-width: 850px) {
      @apply w-[90%] grid grid-cols-1;
    }
  }
</style>
