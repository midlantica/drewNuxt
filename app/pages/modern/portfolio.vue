<script setup>
  const { store, toggleExtras } = usePageSetup('Modern');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <ModernNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <main class="mainGrid">
      <ExtrasC
        :is-show-content="store.isShowContent"
        class="col-span-2"
        @toggle-extras="toggleExtras"
      />
    </main>
  </div>
</template>

<style scoped></style>
