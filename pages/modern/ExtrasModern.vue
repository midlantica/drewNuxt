<template>
  <transition name="fade" appear>
    <div>
      <div class="topDown">
        <header class="w-full">
          <ModernNavvy />
        </header>
      </div>

      <!-- <transition name="bounce2" appear> -->
        <ExtrasC class="bounce2" />
      <!-- </transition> -->
    </div>
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
