<template>
  <transition name="fade" appear>
    <div>
      <header class="shadow-none">
        <CorpNavvy />
      </header>

      <!-- <transition name="bounce2" appear> -->
        <ExtrasC class="bounce2" />
      <!-- </transition> -->

      <footer class="shadow-none">
        &nbsp;
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  definePageMeta({
    title: 'Corp Extras'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Corp Extras`,
    bodyAttrs: {
      class: `corp extras`
    }
  })
</script>

<style scoped>

</style>
