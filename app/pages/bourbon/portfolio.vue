<script setup>
  const { store, toggleExtras } = usePageSetup('Bourbon');
</script>

<template>
  <div>
    <transition name="topDown" appear>
      <BourbonNavvy
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </transition>

    <main class="w-full grid col-span-2 gap-x-0 gap-y-2 px-4">
      <ExtrasC
        class="col-span-2"
        :is-show-content="store.isShowContent"
        @toggle-extras="toggleExtras"
      />
    </main>

    <footer
      class="bg-[url(/img/bg/bg_bag_dk.webp)] shadow-dru-shadow h-3 col-start-1 col-end-3 bg-repeat"
    />
  </div>
</template>

<style scoped></style>
