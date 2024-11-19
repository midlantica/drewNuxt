<!-- pages/modern/components/Navvy.vue -->
<template>
  <header class="w-full">
    <nav class="flex flex-col flex-nowrap justify-center items-center gap-y-4 p-0 mt-14">
      <h1
        class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modernSubhead text-[2.25rem] text-modern-accentRed tracking-[-0.05em] w-full flex grow justify-center items-center gap-2 antialiased font-light leading-10 text-center lowercase transition duration-200 ease-in breakLg:text-[3.25rem] breakSm:text-[2.75rem] breakXsm:text-[2.25rem] hover:text-modern-accent"
      >
        <div class="text-modern-accentRed cursor-pointer" @click="$emit('toggleExtras')">
          drew harper
        </div>
        <AuthenticStamp class="authenticStamp cursor-pointer" @click="$emit('toggleExtras')" />
      </h1>

      <h2
        class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modernCopy leading-[1.5em] text-[1.3rem] text-[hsla(0,0%,100%,0.85)] tracking-0 antialiased font-normal text-center lowercase"
      >
        {{ copy.uiuxDesigner }} / {{ copy.vizDesigner }}
      </h2>

      <section class="duration-[.25s] z-10 mt-0 transition ease-in">
        <p
          class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modernCopy leading-[1.4rem] text-[0.8rem] tracking-[0.05rem] flex flex-row flex-wrap grow justify-center gap-x-3 gap-y-3 antialiased font-medium text-center"
        >
          <nuxt-link :to="`mailto:` + `${copy.druEmail}`" class="btn">{{
            copy.druEmail
          }}</nuxt-link>
          <a :href="`${copy.portfolio}`" target="_blank" class="btn">PDF&nbsp;Resume</a>
        </p>
      </section>
    </nav>
  </header>
</template>

<script setup>
const copy = useCopy()
const store = useToggleExtrasStore()

const props = defineProps(["store.isShowContent", "store.selectedBtn"])

onMounted(() => {
  store.initialize()
})
</script>

<style scoped>
.authenticStamp {
  @apply -mr-[420px] h-auto fill-base-ivory w-[90px] fixed max-w-[90px] min-w-[90px];

  @media (max-width: theme("screens.breakLg")) {
    @apply -mr-[380px] -mt-[10px] w-[90px];
  }

  @media (max-width: theme("screens.breakSm")) {
    @apply -mr-[330px] -mt-[20px] w-[80px];
  }

  @media (max-width: theme("screens.breakXsm")) {
    @apply -mr-[300px] -mt-[20px] w-[70px];
  }

  @media (max-width: theme("screens.breakXxsm")) {
    @apply -mr-[300px] -mt-[10px] w-[70px];
  }
}
.btn {
  @apply border border-[#ff000054] border-solid py-[0.3rem] rounded-[2rem] my-0 px-5 text-base-ivory hover:text-black hover:no-underline hover:bg-modern-ruby no-underline;
}
</style>
