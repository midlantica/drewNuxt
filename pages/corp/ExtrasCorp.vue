<template>
  <header>
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer>
    <NavvyEmpty />
  </footer>
</template>

<script setup>
  import Navvy from './components/Navvy'
  // import ExtrasC from '../../components/ExtrasC'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&display=swap');
</style>
