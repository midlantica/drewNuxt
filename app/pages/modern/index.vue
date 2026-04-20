<script setup>
  import { shallowRef } from 'vue';
  import { ModernProjects, ModernSkills, ModernAbout } from '#components';

  const { store, toggleExtras } = usePageSetup('Modern');

  const views = { ModernProjects, ModernSkills, ModernAbout };
  const currentView = shallowRef(ModernProjects);

  function switchView(viewName) {
    if (!store.isShowContent) toggleExtras();
    if (views[viewName]) currentView.value = views[viewName];
  }

  onMounted(() => {
    store.selectedBtn = 'ModernProjects';
  });
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <ModernNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <transition name="bounce2" appear>
      <ModernSubTabs
        :is-show-content="store.isShowContent"
        :selected-btn="store.selectedBtn"
        @switch-view="switchView"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <main
      v-if="store.isShowContent"
      class="w-full grid grid-cols-1 gap-x-0 gap-y-2 px-12 m-0"
    >
      <component
        :is="currentView"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </main>

    <main v-else class="mainGrid">
      <ExtrasC
        :is-show-content="store.isShowContent"
        class="col-span-2"
        @toggle-extras="toggleExtras"
      />
    </main>
  </div>
</template>

<style scoped></style>
