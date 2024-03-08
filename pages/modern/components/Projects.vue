<template>
  <div class="content-center w-full justify-self-center max-w-[500px] col-start-1 col-end-1 row-start-1 row-end-1">
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>

<script setup>
  const { showExtras, showContent, toggleExtras, onExtrasToggled } = useToggleExtras();
  
  const props = defineProps(['showContent'])
</script>

<style scoped></style>
