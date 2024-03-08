<script setup>
  import { ref, shallowRef, nextTick  } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout, ExtrasC } from '#components'

  const { showExtras, showContent, toggleExtras, onExtrasToggled } = useToggleExtras();

  definePageMeta({
    title: 'Modern',
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false,
  })

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - Modern`,
    bodyAttrs: {
      class: `modern`
    }
  })

  let currentView = shallowRef(ModernProjects);
  let selectedBtn = ref(null)

  const props = defineProps(['showContent'])
  
  function switchView(view) {
    if (view === 'ModernProjects') {
      currentView.value = ModernProjects
    } else if (view === 'ModernSkills') {
      currentView.value = ModernSkills
    } else if (view === 'ModernAbout') {
      currentView.value = ModernAbout
      showContent.value = false
    }
  }

</script>

<template>
  <div class="flex flex-col items-center">

    <transition name="topDown" appear>
      <ModernNavvy
        @toggleExtras="toggleExtras" 
        :showContent="showContent"
      />
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs
        v-if="showExtras"
        @switch-view="switchView"
      />
    </transition>

    <main 
      v-if="showExtras" 
      class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0"
    >
      <component
        :is="currentView"
        :showContent="showContent"
        @toggleExtras="toggleExtras" 
      />
    </main>

    <main class="mainGrid" v-if="!showExtras">
      <component :is="ExtrasC" class="col-span-2" 
        @toggleExtras="toggleExtras" 
        :showContent="showContent"
      />
    </main>

  </div>
</template>

<style scoped>

</style>