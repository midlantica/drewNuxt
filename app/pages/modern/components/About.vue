<template>
  <div class="aboutGrid">
    <transition name="bounce3" appear>
      <ModernHeadAndCopy
        :is-show-content="store.isShowContent"
        @toggle-extras="store.toggleExtras"
      />
    </transition>
    <transition name="bounce4" appear>
      <About />
    </transition>
  </div>
</template>

<script setup>
  import { ModernHeadAndCopy } from '#components';

  const store = useToggleExtrasStore();

  onMounted(() => {
    store.selectedBtn = 'ModernAbout';
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  .aboutGrid {
    @apply w-[80%] grid grid-cols-[minmax(auto,2fr)_minmax(225px,1fr)] gap-8 m-auto;

    @media (max-width: 850px) {
      @apply w-[90%] grid grid-cols-1;
    }
  }
</style>
