<template>
  <div>
    <div></div>
    <div class="h-[700px] bg-white p-12">
      <button @click="addJessica" class="px-3 py-2 mb-12 text-black rounded-lg bg-amber-600">Add Jessica</button>
      <pre class="text-black text-1xl">{{ characters }}</pre>
    </div>
  </div>
</template>

<script setup>
  // import { storeToRefs } from "vue"
  import { useCopy } from "~/store/copy";

  const copy = useCopy()
  const { characters } = storeToRefs(copy)

  function addJessica() {
    copy.addCharacter({
      name: "Lady Jessica",
      line: "I must not fear; fear is the mind-killer."
    })
  }

  const line = copy.getLineByName("Jessica")

</script>

<style scoped>

</style>