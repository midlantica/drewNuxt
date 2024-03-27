<script setup>
  import { shallowRef  } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout, ExtrasC } from '#components'

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
  
  const props = defineProps(['isShowContent', 'selectedBtn'])
  
  const { isShowContent, toggleExtras } = useToggleExtras();

  const currentView = shallowRef(ModernProjects);
  
  function switchView(view) {
    if (view === 'ModernProjects') {
      currentView.value = ModernProjects
    } else if (view === 'ModernSkills') {
      currentView.value = ModernSkills
    } else if (view === 'ModernAbout') {
      currentView.value = ModernAbout
    }
  }

</script>

<template>
  <div class="flex flex-col items-center">

    <transition name="topDown" appear>
      <ModernNavvy
        @toggleExtras="toggleExtras" 
        :isShowContent="isShowContent"
      />
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs @switch-view="switchView" @toggleExtras="toggleExtras"
        :isShowContent="isShowContent"
        :selectedBtn="selectedBtn"
      />
    </transition>

    <main v-if="isShowContent" class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
      <component 
        :is="currentView" 
        @toggleExtras="toggleExtras" 
        :isShowContent="isShowContent"
      />
    </main>

    <main v-else class="mainGrid">
      <component 
        :is="ExtrasC" 
        @toggleExtras="toggleExtras" 
        :isShowContent="isShowContent"
        class="col-span-2" 
      />
    </main>

  </div>
</template>

<style scoped>

</style>