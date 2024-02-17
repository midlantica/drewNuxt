<template>
  <transition name="fade" appear>
    <div>
      <header class="shadow-none text-base-ivory bg-base-accentRed">
        <Navvy />
      </header>

      <!-- <transition name="bounce2" appear> -->
        <ExtrasC class="bounce2" />
      <!-- </transition> -->

      <footer class="shadow-none text-base-ivory bg-techy-mango">
        &nbsp;
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  definePageMeta({
    title: 'Techy Extras'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Techy Extras`,
    bodyAttrs: {
      class: `techy extras`
    }
  })

  import Navvy from './components/Navvy'
  // import ExtrasC from '../../components/ExtrasC'
</script>

<style scoped>

</style>
