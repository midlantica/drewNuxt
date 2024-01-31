<script setup>
  import { useCopy } from "~/store/copy";
  const copy = useCopy()
</script>

<template>
  <div class="">
    {{ copy.value }}
    <h1>Hello Root Home</h1>
    <p>Home page!</p>
  </div>
  <!-- <div id="modal"></div> -->
</template>