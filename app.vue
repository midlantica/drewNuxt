<script setup>

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <div id="modal" />
  </NuxtLayout>
</template>

<style>
  .fade-enter-active {
    animation: fade 1s;
  }

  .fade-leave-active {
    animation: fade 0s reverse;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

</style>