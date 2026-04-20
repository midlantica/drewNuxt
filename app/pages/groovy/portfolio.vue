<script setup>
  const { store, toggleExtras } = usePageSetup('Groovy');
</script>

<template>
  <div>
    <Transition name="topDown" appear>
      <GroovyNavvyHead
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </Transition>

    <main class="mainGrid">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </main>

    <Transition name="bounce3" appear>
      <GroovyFooter />
    </Transition>
  </div>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";

  .mainGrid {
    @apply grid grid-cols-[7fr_6fr] gap-y-4 mt-0 mx-4 mb-2;

    @media (max-width: 1024px) {
      @apply grid-cols-1 mt-0 mx-4 mb-4;
    }
  }
</style>
