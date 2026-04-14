<template>
  <CarouselSlides :slides="slides" />
</template>

<script setup>
  import { shallowRef } from 'vue';
  import CarouselSlides from './CarouselSlides.vue';

  const slides = shallowRef([
    { image: '/img/portfolio/01_uiux/Zander_screenshot_v1.png' },
    { image: '/img/portfolio/01_uiux/design-system-uiux.png' },
    { image: '/img/portfolio/01_uiux/tdoe/tn_doc_01.jpg' },
    { image: '/img/portfolio/01_uiux/tdoe/tn_doc_02.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_bridge_01.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_bridge_02.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_bridge_03.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_funding_01.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_funding_02.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_land_01.jpg' },
    { image: '/img/portfolio/01_uiux/civicinc/civicinc_land_02.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_home.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_signed_in.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_money.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_email.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_stamps.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website_old.jpg' },
    { image: '/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website.jpg' },
    {
      image:
        '/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website_responsive.jpg'
    },
    { image: '/img/portfolio/01_uiux/prisonride/prisonride_home.jpg' },
    { image: '/img/portfolio/01_uiux/prisonride/prisonride_profile.jpg' },
    { image: '/img/portfolio/01_uiux/mlotto_web.jpg' },
    { image: '/img/portfolio/01_uiux/valentina_website.jpg' },
    { image: '/img/portfolio/01_uiux/tinsley_website.jpg' }
  ]);
</script>
