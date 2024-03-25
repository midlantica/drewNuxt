<template>
  <div class="content-center w-full justify-self-center max-w-[500px] col-start-1 col-end-1 row-start-1 row-end-1">
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>

<script setup>
  const { showExtras, showContent, toggleExtras, selectedBtn } = useToggleExtras();
  const props = defineProps(['isShowContent', 'selectedBtn'])  
</script>

<style scoped></style>
