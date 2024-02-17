<template>
  <transition name="fade" appear>
    <div>
      <header class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
        <BourbonNavvy />
      </header>

      <!-- <transition name="bounce2" appear> -->
        <ExtrasC class="bounce2" />
      <!-- </transition> -->

      <footer class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
        <nav class="h-3" />
      </footer>
    </div>
  </transition>
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

  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<style scoped>
  @import "./assets/css/fonts/bourbonFonts/bourbonFonts.css";
</style>
