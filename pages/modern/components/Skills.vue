<template>
  <div v-show="showContent">
    <transition name="bounce2" appear>
      <Skills />
    </transition>
    <transition name="bounce4" appear>
      <Quote />
    </transition>
  </div>
</template>

<script setup>
  const showContent = ref(false)

  onMounted(() => {
    showContent.value = true
  })
</script>

<style scoped>
  /* // @import '../assets/css/modern-main.scss'; */

  /* // >>>>>>>>>>>>>>>>>>>>>>..... */
  .skillsGrid {
    @apply grid-cols-[repeat(6,_minmax(88px,_1fr))] col-start-1 col-end-2 row-start-2 row-end-4 justify-center justify-items-center w-[35vw];

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-[repeat(4,_minmax(88px,_1fr))] w-[70vw] row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-start-2 row-end-2;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply transition-all duration-200 ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    @apply opacity-0;
  }
</style>
