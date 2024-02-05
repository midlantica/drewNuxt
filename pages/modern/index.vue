<template>
  <!-- <transition name="fade" appear> -->
  <div class="flex flex-col items-center">
    <transition name="topDown" appear>
      <header class="w-full">
        <ModernNavvy />
      </header>
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs @switch-view="switchView"  />
    </transition>

    <main class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
      <component :is="currentView" />
    </main>
  </div>
  <!-- </transition> -->
</template>

<script setup>
  import { ref, shallowRef  } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout } from '#components'

  // import { useCopy } from "~/store/copy";
  // const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `modern`
    }
  })

  let currentView = shallowRef(ModernProjects);

  const switchView = (view) => {
    switch (view) {
      case 'ModernSkills':
        currentView.value = ModernSkills
        break
      case 'ModernAbout':
        currentView.value = ModernAbout
        break
      default:
        currentView.value = ModernProjects
    }
    console.log(`Receive this ${view} man!`)
  }

</script>

<style scoped>
</style>
