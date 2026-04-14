<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
    lazy
    lazy-load-on-drag
  >
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template #loader>
        <i class="icon icon-loader spinning" />
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
  import { VueperSlides, VueperSlide } from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';

  defineProps({
    slides: {
      type: Array,
      required: true
    }
  });
</script>

<style scoped>
  @import '../../assets/css/vueperslides.css';
</style>
