<template>
  <header>
    <NavvyHead />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer>
    <NavvyEmpty />
  </footer>
</template>

<script setup>
  import NavvyHead from './components/NavvyHead'
  // import ExtrasC from '../../components/ExtrasC'
</script>

<style scoped>

  header {
    @apply text-base-ivory bg-groovy-red clear-both;
  }

  footer {
    @apply text-base-ivory h-[160px];
    @apply bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];

    @media (max-width: theme("screens.breakXlg")) {
      //
    }

  }
</style>
