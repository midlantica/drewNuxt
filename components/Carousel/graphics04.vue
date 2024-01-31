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
      image: '/img/portfolio/04_graphics/Wild_Card_logo_study_01.png'
    },
    {
      image: '/img/portfolio/04_graphics/Wild_Card_logo_study_02.png'
    },
    {
      image: '/img/portfolio/04_graphics/Tank_font.png'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_app_logos.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_infographgic_cloud.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_icons_doc.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/icons_doc_parole.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_icons_cards_kiosk.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_infographic_01.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_infographic_02.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_inforgraphic_money.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_icons_email.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/jpay_mural.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/newsletter_hero1.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/newsletter_hero2.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/celebrity_cruise_lines.jpg'
    },
    {
      image: '/img/portfolio/04_graphics/bike_icons.png'
    }
  ])
</script>

<style scoped>
  @import "../../assets/css/vueperslides.css";
</style>
