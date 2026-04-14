<template>
  <CarouselSlides :slides="slides" />
</template>

<script setup>
  import { shallowRef } from 'vue';
  import CarouselSlides from './CarouselSlides.vue';

  const slides = shallowRef([
    { image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home_prefs.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money.jpg' },
    {
      image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money_prefs.jpg'
    },
    { image: '/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_email.jpg' },
    { image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_home.jpg' },
    { image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_play.jpg' },
    { image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_favs.jpg' },
    { image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_picks.jpg' },
    { image: '/img/portfolio/02_mobile/mlotto/mlotto_ui_wallet.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_unit.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_home_screen.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_email.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_movie.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_movie_parts.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music_album.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music_home.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_music.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_radio.jpg' },
    { image: '/img/portfolio/02_mobile/jpay/jp4/jp4_commissary.jpg' }
  ]);
</script>
