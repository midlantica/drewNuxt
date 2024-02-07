<template>
  <header class="shadow-none text-base-ivory bg-base-accentRed">
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="shadow-none text-base-ivory bg-techy-mango">
    &nbsp;
  </footer>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `techy extras`
    }
  })

  import Navvy from './components/Navvy'
  // import ExtrasC from '../../components/ExtrasC'
</script>

<style scoped>

</style>
