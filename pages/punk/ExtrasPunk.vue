<template>
  <transition name="fade" appear>
    <div>
      <header class="shadow-none text-base-ivory">
        <PunkNavvy />
        <div class="flex flex-wrap justify-center w-full m-0 gap-x-6 gap-y-1 place-content-center">
          <span class="px-3 py-1 leading-normal text-black font-punkHead bg-punk-magenta/70">{{ copy.uiuxDesigner }}/{{ copy.vizDesigner }}</span>
          <a :href="`${copy.portfolio}`" target="_blank" class="px-3 py-1 leading-normal text-black font-punkHead bg-punk-magenta/70 hover:bg-punk-red hover:text-white">PDF Resume</a>
        </div>
      </header>

      <!-- <transition name="bounce2" appear> -->
        <ExtrasC class="bounce2" />
      <!-- </transition> -->
    </div>
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
</script>

<style scoped>

  nav {
    @apply mb-0;
  }

</style>
