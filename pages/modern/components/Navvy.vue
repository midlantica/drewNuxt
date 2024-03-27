<template>
  <header v-show="isShowContent" class="w-full">
    <nav class="flex flex-col items-center justify-center p-0 mt-14 flex-nowrap gap-y-4">
      <h1 class="flex items-center w-full justify-center gap-2 font-modernSubhead breakXsm:text-[2.25rem] breakSm:text-[2.75rem] breakLg:text-[3.25rem] text-[2.25rem] font-light tracking-[-0.05em] leading-10 transition ease-in duration-200 text-center antialiased grow drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] text-modern-accentRed hover:text-modern-accent lowercase">
        <div class="cursor-pointer text-modern-accentRed" 
          @click="$emit('toggleExtras')" 
        >
          drew harper
        </div>
        <AuthenticStamp class="cursor-pointer authenticStamp" @click="$emit('toggleExtras')" />
      </h1>

      <h2 class="text-[1.3rem] tracking-0 leading-[1.5em] font-modernCopy font-normal text-[hsla(0,0%,100%,0.85)] text-center lowercase antialiased drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        {{ copy.uiuxDesigner }} / {{ copy.vizDesigner }}
      </h2>

      <section class="mt-0 z-10 transition duration-[.25s] ease-in">
        <p class="flex flex-row flex-wrap justify-center gap-x-3 gap-y-3 grow font-modernCopy font-medium text-center leading-[1.4rem] tracking-[0.05rem] antialiased text-[0.8rem] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
          <nuxt-link
            :to="`mailto:` + `${copy.druEmail}`"
            class="btn"
          >{{ copy.druEmail }}</nuxt-link>
          <nuxt-link
            :to="`${copy.portfolio}`"
            target="_blank"
            class="btn"
          >PDF&nbsp;Resume</nuxt-link>
        </p>
      </section>
    </nav>
  </header>
</template>

<script setup>
  const copy = useCopy()
  const { isShowContent, toggleExtras } = useToggleExtras();

  const props = defineProps(['isShowContent', 'selectedBtn'])
</script>

<style scoped>
  .authenticStamp {
    @apply -mr-[420px] h-auto fill-base-ivory w-[90px] fixed max-w-[90px] min-w-[90px];

    @media (max-width: theme("screens.breakLg")) {
      @apply -mr-[380px] -mt-[10px] w-[90px];
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply -mr-[330px] -mt-[20px] w-[80px] ;
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
