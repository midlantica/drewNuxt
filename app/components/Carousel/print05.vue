<template>
  <CarouselSlides :slides="slides" />
</template>

<script setup>
  import { shallowRef } from 'vue';
  import CarouselSlides from './CarouselSlides.vue';

  const slides = shallowRef([
    { image: '/img/portfolio/05_print/jpay/jpay_newsletters.png' },
    { image: '/img/portfolio/05_print/mlotto_brochure.jpg' },
    { image: '/img/portfolio/05_print/celebrity_cruise_lines_brochure.jpg' },
    { image: '/img/portfolio/05_print/starclippers_email_panel.png' }
  ]);
</script>
