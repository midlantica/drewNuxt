<template>
  <div>
    <transition name="bounce2" appear>
      <Skills />
    </transition>
    <transition name="bounce4" appear>
      <Quote />
    </transition>
  </div>
</template>

<script setup>
  const store = useToggleExtrasStore();

  // const showSkills = ref(false);

  onMounted(() => {
    store.selectedBtn = 'ModernSkills';
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .skillsGrid {
    @apply grid-cols-[repeat(6,minmax(88px,1fr))] col-start-1 col-end-2 row-start-2 row-end-4 justify-center justify-items-center w-[35vw];

    @media (max-width: 1024px) {
      @apply grid-cols-[repeat(4,minmax(88px,1fr))] w-[70vw] row-start-2 row-end-2;
    }

    @media (max-width: 840px) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: 630px) {
      @apply row-start-2 row-end-2;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply transition-all duration-200 ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    @apply opacity-0;
  }
</style>
