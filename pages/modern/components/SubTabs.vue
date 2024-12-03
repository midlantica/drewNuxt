<template>
  <div
    v-show="showSubTabs"
    class="font-modernCopy flex flex-row flex-wrap justify-center gap-4 mx-0 mt-7 mb-3"
  >
    <div
      @click="emitSwitchView('ModernProjects')"
      class="btn projectsTab"
      :class="{ selectedBtn: store.selectedBtn === 'ModernProjects' }"
    >
      Projects
    </div>
    <div
      @click="emitSwitchView('ModernSkills')"
      class="btn skillsTab"
      :class="{ selectedBtn: store.selectedBtn === 'ModernSkills' }"
    >
      Skills
    </div>
    <div
      @click="emitSwitchView('ModernAbout')"
      class="aboutTab btn"
      :class="{ selectedBtn: store.selectedBtn === 'ModernAbout' }"
    >
      About
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const emit = defineEmits();
  const store = useToggleExtrasStore();
  const router = useRouter();

  const props = defineProps(['store.isShowContent', 'store.selectedBtn']);

  const showSubTabs = ref(false);

  let emitSwitchView = view => {
    const { $playNdok } = useNuxtApp(); // Ensure it's in scope
    $playNdok(); // Play sound
    store.selectedBtn = view;
    emit('switch-view', view);
  };

  onMounted(() => {
    showSubTabs.value = true;
    // store.selectedBtn = 'ModernProjects'

    // Set selectedBtn based on the current route
    const currentRoute = router.currentRoute.value;
    if (currentRoute.name === 'ModernProjects') {
      store.selectedBtn = 'ModernProjects';
    } else if (currentRoute.name === 'ModernSkills') {
      store.selectedBtn = 'ModernSkills';
    } else if (currentRoute.name === 'ModernAbout') {
      store.selectedBtn = 'ModernAbout';
    }
  });
</script>

<style scoped>
  .btn {
    @apply text-black pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239] hover:bg-modern-ruby hover:text-white focus:text-white hover:bg-gradient-to-b hover:from-[#D71D5B] hover:to-[#871239] cursor-pointer;
  }
  body.modern .btn.projectsTab .router-link-active .router-link-exact-active,
  /* body.modern .btn.projectsTab :focus, */
  body.modern .btn.skillsTab .router-link-active .router-link-exact-active,
  body.modern .btn.aboutTab .router-link-active .router-link-exact-active {
    @apply text-white;
  }

  .selectedBtn {
    @apply !text-white;
  }
</style>
