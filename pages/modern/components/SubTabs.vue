<template>
  <div v-show="showContent" 
    class="flex flex-row flex-wrap justify-center gap-4 mx-0 mb-3 font-modernCopy mt-7">
    <div @click="emitSwitchView('ModernProjects')" 
      class="btn projectsTab" :class="{ 'selectedBtn': selectedBtn === 'ModernProjects' }"
      @toggleExtras="toggleExtras"
      :showContent="showContent"
    >
      Projects
    </div>
    <div @click="emitSwitchView('ModernSkills')" 
      class="btn skillsTab" :class="{ 'selectedBtn': selectedBtn === 'ModernSkills' }"
      @toggleExtras="toggleExtras"
      :showContent="showContent"
    >
      Skills
    </div>
    <div @click="emitSwitchView('ModernAbout')" 
      class="btn aboutTab" :class="{ 'selectedBtn': selectedBtn === 'ModernAbout' }"
      @toggleExtras="toggleExtras"
      :showContent="showContent"
    >
      About
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits();
  const { showExtras, showContent, toggleExtras, selectedBtn } = useToggleExtras();

  const props = defineProps(['showContent', 'selectedBtn', 'showExtras'])

  let emitSwitchView = (view) => {
    selectedBtn.value = view
    emit('switch-view', view)
  };
  
  onMounted(() => {
    showContent.value = true
    selectedBtn.value = 'ModernProjects'
  })

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
