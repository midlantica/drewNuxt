<template>
  <header class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <BourbonNavvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <nav class="h-3" />
  </footer>
</template>

<script setup>
  // import { useCopy } from "~/store/copy";
  // const copy = useCopy()

  definePageMeta({
    title: 'Bourbon Extras'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Bourbon Extras`,
    bodyAttrs: {
      class: `bourbon extras`
    }
  })

</script>

<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";
</style>
