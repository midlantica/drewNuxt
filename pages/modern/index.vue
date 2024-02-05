<template>
  <!-- <transition name="fade" appear> -->
  <div class="flex flex-col items-center">
    <transition name="topDown" appear>
      <header class="w-full">
        <ModernNavvy />
      </header>
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs />
    </transition>

    <main class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
      <component :is="currentView" />
    </main>
  </div>
  <!-- </transition> -->
</template>

<script setup>
  import { ref } from 'vue';
  // import ModernProjects from './components/Projects.vue';
  // import ModernSkills from './components/Skills.vue';
  // import ModernAbout from './components/About.vue';

  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `modern`
    }
  })

  const currentView = ref('ModernProjects.value'); // Set the default view

  const switchView = (view) => {
    currentView.value = ModernProjects;
  };
</script>

<style scoped>
</style>
