<template>
  <transition name="fade" appear>
    <div class="flex flex-col items-center">
      <transition name="topDown" appear>
        <header class="w-full">
          <ModernNavvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <ModernSubTabs @switch-view="switchView" :selectedBtn = selectedBtn />
      </transition>

      <main class="w-[90%] grid grid-cols-1 gap-y-2 gap-x-0 breakLg:w-[90%] m-0">
        <component :is="currentView" />
      </main>
    </div>
  </transition>
</template>

<script setup>
  import { ref, shallowRef  } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout } from '#components'

  // import { useCopy } from "~/store/copy";
  // const copy = useCopy()

  // const { progress, isLoading } = useLoadingIndicator();
  // console.log(`Loaded ${progress.value}%`);

  useHead({
    bodyAttrs: {
      class: `modern`
    }
  })

  let currentView = shallowRef(ModernProjects);
  let selectedBtn = ref(null)

  const switchView = (view) => {
    if (view === 'ModernProjects') {
      currentView.value = ModernProjects
      // selectedBtn.value = true
    } else if (view === 'ModernSkills') {
      currentView.value = ModernSkills
      // selectedBtn = true
    } else if (view === 'ModernAbout') {
      currentView.value = ModernAbout
      // selectedBtn = true
    }
    // console.log(`Receive this ${view} man!`)
  };

</script>

<style scoped>

</style>
