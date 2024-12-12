<template>
  <div>
    <div
      class="grid-cols-[88px_auto] grid auto-rows-auto justify-items-start items-center gap-2 gap-x-1.5 mt-4 mb-3"
    >
      <div
        @click="emit('toggleExtras')"
        class="h-[94px] jelloHorizontal w-[78px] col-start-1 col-end-2 row-start-1 row-end-2 self-start bg-no-repeat bg-cover cursor-pointer"
      >
        <drewMug />
      </div>
      <h1
        class="drop-shadow-[1px_1px_4px_black] font-modernSubhead mt-[2.2rem] text-[1.1rem] tracking-[-0.01ch] w-auto inline-block col-start-2 col-end-3 row-start-1 row-end-2 self-center p-0 font-normal text-white breakLg:w-auto breakSm:max-w-[30ch] max-[535px]:mt-[.75rem]"
      >
        {{ copy.druHead }}
      </h1>
    </div>
    <p
      class="font-modernCopy leading-[2.2rem] text-[0.95rem] tracking-[0.03rem] m-0 font-light text-white"
      v-html="copy.druCopy"
    />
  </div>
</template>

<script setup>
  import { markRaw, defineAsyncComponent } from 'vue';
  const drewMug = markRaw(
    defineAsyncComponent(() => import('@/components/Icons/drewMug.vue'))
  );

  const copy = useCopy();
  const emit = defineEmits();

  // console.log('isShowContent:', isShowContent)
  const store = useToggleExtrasStore();
</script>

<style scoped></style>
