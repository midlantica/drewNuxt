<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()

  useHead({
    bodyAttrs: {
      class: `modern`
    }
  })
</script>

<template>
  <div class="">
    <h1>Home Modern</h1>
  </div>
</template>