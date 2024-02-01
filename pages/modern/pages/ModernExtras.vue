<template>
  <transition name="bounce3" appear>
    <HeadAndCopy />
  </transition>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>
</template>

<script setup>
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style scoped>
</style>
