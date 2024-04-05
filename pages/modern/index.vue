<script setup>
  import { shallowRef, onMounted } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout, ExtrasC } from '#components'
  const store = useToggleExtrasStore()
  
  const emit = defineEmits()

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

  const props = defineProps([
    'store.isShowContent', 
    'store.selectedBtn',
    'currentView'
  ])
  
  const currentView = shallowRef(ModernProjects);
  
  const switchView = (view) => {
    if (!store.isShowContent) {
      store.toggleExtras();
    }
    
    if (view === 'ModernProjects') {
      currentView.value = ModernProjects
    } else if (view === 'ModernSkills') {
      currentView.value = ModernSkills
    } else if (view === 'ModernAbout') {
      currentView.value = ModernAbout
    }
  }

  onMounted(() => {
    store.initialize();
    store.selectedBtn = 'ModernProjects'
  })
  
</script>

<template>
  <!-- <div class="flex flex-col items-center"> -->

    <transition name="topDown" appear>
      <ModernNavvy
        @toggleExtras="store.toggleExtras" 
        :isShowContent="store.isShowContent"
      />
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs 
        @switch-view="switchView" 
        @toggleExtras="store.toggleExtras"
        :isShowContent="store.isShowContent"
        :selectedBtn="store.selectedBtn"
      />
    </transition>

    <main v-if="store.isShowContent" 
      class="w-full grid grid-cols-1 gap-y-2 gap-x-0 px-12 m-0"
    >
      <component 
        :is="currentView" 
        @toggleExtras="store.toggleExtras" 
        :isShowContent="store.isShowContent"
      />
    </main>

    <main v-else class="mainGrid">
      <component 
        :is="ExtrasC"
        @toggleExtras="store.toggleExtras" 
        :isShowContent="store.isShowContent"
        class="col-span-2" 
      />
    </main>

  <!-- </div> -->
</template>

<style scoped>

</style>