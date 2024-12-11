<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
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
  import { shallowRef } from 'vue';
  import { VueperSlides, VueperSlide } from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';

  const slides = shallowRef([
    {
      image: '/img/portfolio/05_print/jpay/jpay_newsletters.png'
    },
    {
      image: '/img/portfolio/05_print/mlotto_brochure.jpg'
    },
    {
      image: '/img/portfolio/05_print/celebrity_cruise_lines_brochure.jpg'
    },
    {
      image: '/img/portfolio/05_print/starclippers_email_panel.png'
    }
  ]);
</script>

<style scoped>
  @import '../../assets/css/vueperslides.css';
</style>
