<script setup>
  const { store, toggleExtras } = usePageSetup('Corp');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <CorpNavvy
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

    <footer class="shadow-none">
      <Quote />
    </footer>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid-cols-2 grid gap-y-2 gap-x-0 ml-4 mb-4 mr-6;

    @media (max-width: 1024px) {
      @apply grid-cols-1 gap-y-2 mx-4;
    }
  }
</style>
