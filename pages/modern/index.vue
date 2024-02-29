<template>
  <div class="flex flex-col items-center">

    <transition name="topDown" appear>
      <ModernNavvy @toggleExtras="toggleExtras" />
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs @switch-view="switchView" :selectedBtn = selectedBtn />
    </transition>

    <main v-if="showExtras" class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
      <component :is="currentView" />
    </main>

    <main class="mainGrid" v-if="!showExtras">
      <component :is="ExtrasC" class="col-span-2" />
    </main>

  </div>
</template>

<script setup>
  import { ref, shallowRef, nextTick  } from 'vue';
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

  const showExtras = ref(true);

  let currentView = shallowRef(ModernProjects);
  let selectedBtn = ref(null)

  function switchView(view) {
    if (view === 'ModernProjects') {
      currentView.value = ModernProjects
    } else if (view === 'ModernSkills') {
      currentView.value = ModernSkills
    } else if (view === 'ModernAbout') {
      currentView.value = ModernAbout
    }
  }

  onMounted(async () => {
    await nextTick();
    showExtras.value = true;
  });

  function toggleExtras() {
    showExtras.value = !showExtras.value;
  }

</script>

<style scoped>

</style>
