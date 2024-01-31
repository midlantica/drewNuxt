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
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home_prefs.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money_prefs.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_email.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_home.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_play.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_favs.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_picks.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_wallet.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_unit.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_home_screen.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_email.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_movie.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_movie_parts.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music_album.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music_home.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_radio.jpg'
    },
    {
      image: '/img/portfolio/02_mobile/jpay/jp4/jp4_commissary.jpg'
    }
  ])
</script>

<style scoped>
  @import "../../assets/css/vueperslides.css";
</style>
