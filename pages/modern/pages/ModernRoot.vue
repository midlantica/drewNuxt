<template>
  <!-- <transition name="fade" appear> -->
  <div class="flex flex-col items-center">
    <transition name="topDown" appear>
      <header class="w-full">
        <Navvy />
      </header>
    </transition>

    <transition name="bounce2" appear>
      <ModernTabs />
    </transition>

    <main class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
  <!-- </transition> -->
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import ModernTabs from '../components/ModernTabs.vue'
</script>

<style scoped></style>
