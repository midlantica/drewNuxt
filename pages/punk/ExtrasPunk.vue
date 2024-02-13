<template>
  <header class="shadow-none text-base-ivory">
    <PunkNavvy />
    <div class="flex flex-wrap justify-center w-full m-0 gap-x-6 gap-y-1 place-content-center">
      <span class="px-3 py-1 leading-normal text-black font-punkHead bg-punk-magenta/70">{{ copy.uiuxDesigner }}/{{ copy.vizDesigner }}</span>
      <a class="px-3 py-1 leading-normal text-black font-punkHead bg-punk-magenta/70 hover:bg-punk-red hover:text-white" :href="resumeUrl" target="_BLANK">PDF Resume</a>
    </div>
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>
</template>

<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  definePageMeta({
    title: 'Punk Extras'
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Punk Extras`,
    bodyAttrs: {
      class: `punk extras`
    }
  })

  import Navvy from './components/Navvy'
  // import ExtrasC from '../../components/ExtrasC'
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style scoped>

  nav {
    @apply mb-0;
  }

</style>
