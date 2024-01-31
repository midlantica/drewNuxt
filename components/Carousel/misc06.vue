<template>
  <vueper-slides
    fade :infinite="false" :bullets="false"
    :slide-ratio="1 / 1.3" autoplay fractions
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
  import { shallowRef } from 'vue'
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  const slides = shallowRef([
    {
      image: '/img/portfolio/06_misc/booth/jpay_tradeshow_booth2.png'
    },
    {
      image: '/img/portfolio/06_misc/email/jpay_email_jp4.jpg'
    },
    {
      image: '/img/portfolio/06_misc/email/jpay_email.jpg'
    },
    {
      image: '/img/portfolio/06_misc/mural/atlanta_tree_pro_truck.jpg'
    },
    {
      image: '/img/portfolio/06_misc/mural/jpay_mural.jpg'
    },
    {
      image: '/img/portfolio/06_misc/packaging/jp3_package.jpg'
    },
    {
      image: '/img/portfolio/06_misc/JP3_many.jpg'
    }
  ])
</script>

<style scoped>
  @import "../../assets/css/vueperslides.css";
</style>
