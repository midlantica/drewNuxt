<template>
  <div>
    <div class="grid grid-cols-[88px_auto] auto-rows-auto gap-x-1.5 justify-items-start items-center mt-4 mb-3 gap-2">
      <div @click="emit('toggleExtras')"  
        class="col-start-1 col-end-2 row-start-1 row-end-2 bg-no-repeat bg-cover w-[78px] h-[94px] self-start bg-[url('/img/drew_mug_red.png')] jelloHorizontal cursor-pointer"
      />
      <h1 class="col-start-2 col-end-3 row-start-1 row-end-2 inline-block font-modernSubhead tracking-[-0.01ch] p-0 self-center mt-[2.2rem] w-auto text-white font-normal text-[1.1rem] drop-shadow-[1px_1px_4px_black] breakSm:max-w-[30ch] breakLg:w-auto max-[535px]:mt-[.75rem]">
        {{ copy.druHead }}
      </h1>
    </div>
    <p class="font-light text-[0.95rem] leading-[2.2rem] tracking-[0.03rem] m-0 font-modernCopy text-white" v-html="copy.druCopy" />
  </div>
</template>

<script setup>
  const copy = useCopy()
  const emit = defineEmits()
    
  // console.log('isShowContent:', isShowContent)
  
</script>
