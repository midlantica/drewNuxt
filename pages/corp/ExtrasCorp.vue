<template>
  <header class="shadow-none">
    <CorpNavvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="shadow-none">
    &nbsp;
  </footer>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `corp extras`
    }
  })
</script>

<style scoped>

</style>
