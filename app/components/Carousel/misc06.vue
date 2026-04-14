<template>
  <CarouselSlides :slides="slides" />
</template>

<script setup>
  import { shallowRef } from 'vue';
  import CarouselSlides from './CarouselSlides.vue';

  const slides = shallowRef([
    { image: '/img/portfolio/06_misc/booth/jpay_tradeshow_booth2.png' },
    { image: '/img/portfolio/06_misc/email/jpay_email_jp4.jpg' },
    { image: '/img/portfolio/06_misc/email/jpay_email.jpg' },
    { image: '/img/portfolio/06_misc/mural/atlanta_tree_pro_truck.jpg' },
    { image: '/img/portfolio/06_misc/mural/jpay_mural.jpg' },
    { image: '/img/portfolio/06_misc/packaging/jp3_package.jpg' },
    { image: '/img/portfolio/06_misc/JP3_many.jpg' }
  ]);
</script>
