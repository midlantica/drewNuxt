<script setup>
  const { progress, isLoading } = useLoadingIndicator();
  console.log(`Loaded ${progress.value}%`);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <div id="modal" />
  </NuxtLayout>
</template>
