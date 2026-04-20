<script setup>
  const { store, toggleExtras } = usePageSetup('Punk');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <PunkNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <main class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </main>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid grid-cols-2 gap-x-2 gap-y-2 shadow-none py-0 px-4 bg-transparent;

    @media (max-width: 1024px) {
      @apply grid-cols-1 gap-x-1 gap-y-2;
    }
  }
</style>
