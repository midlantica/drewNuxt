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
  definePageMeta({
    title: 'Modern Extras'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Modern Extras`,
    bodyAttrs: {
      class: `modern extras`,
    }
  })
</script>

<style scoped>

</style>
