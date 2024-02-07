<template>

  <transition name="topDown" appear>
    <header class="w-full">
      <ModernNavvy />
    </header>
  </transition>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>
</template>

<script setup>
  useHead({
    bodyAttrs: {
      class: `modern extras`
    }
  })
</script>

<style scoped>

</style>
