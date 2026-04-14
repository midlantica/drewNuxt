<template>
  <CarouselSlides :slides="slides" />
</template>

<script setup>
  import { shallowRef } from 'vue';
  import CarouselSlides from './CarouselSlides.vue';

  const slides = shallowRef([
    { image: '/img/portfolio/03_kiosk/inmate_kiosk.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_home.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_home_signed_in.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_buy_jp3.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_music.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_music_songs_list.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_inbox.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_pic.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_read.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_buys.jpg' },
    { image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_manage.jpg' }
  ]);
</script>
