<script setup>
  const { store, toggleExtras } = usePageSetup('Techy');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <TechyNavvy
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

    <footer class="bg-techy-mango text-base-ivory shadow-none">
      <Quote />
    </footer>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid mt-0 mx-4 mb-2 gap-y-4 gap-x-0 grid-cols-1;
  }

  @media (min-width: 1025px) {
    .mainGrid {
      @apply mx-6 mb-2 grid-cols-[7fr_6fr];
    }
  }
</style>
