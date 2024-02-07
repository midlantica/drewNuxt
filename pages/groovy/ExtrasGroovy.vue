<template>
  <div>
    <header class="text-base-ivory bg-groovy-red after:clear-both h-[188px]">
      <GroovyNavvyHead />
    </header>

  <!-- <transition name="bounce2" appear> -->
    <ExtrasC />
  <!-- </transition> -->

  <!-- <transition name="bounce10" appear> -->
    <GroovyFooter />
  <!-- </transition> -->
</div>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `groovy extras`
    }
  })
</script>

<style scoped>

  header {
    @apply text-base-ivory bg-groovy-red clear-both;
  }

  footer {
    @apply text-base-ivory h-[160px];
    @apply bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];

    @media (max-width: theme("screens.breakXlg")) {
      /* // */
    }

  }
</style>
