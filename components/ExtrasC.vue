<template>
  <transition name="bounce3" appear>
    <div class="flex flex-row flex-wrap w-full gap-4 m-auto extrasWrapper">
      <h1 class="text-[2em] text-center px-auto pt-2 mx-auto mt-2 leading-normal text-black">
        Portfolio Extras
      </h1>

      <div class="flex flex-row flex-wrap items-start w-full p-0 extrasWrap place-content-center gap-x-4">
        <div v-for="(item, index) in portfolioExtras" :key="index" class="content-center gap-x-4">
          <a :href="itemUrl(item)" target="_BLANK">
            <img class="portThumbs" :src="itemSrc(item)">
            <div class="text-center">
              <p>{{ item.text }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  // import { ref } from 'vue'

  const myUrl = '/img/portfolio/extras/'

  const itemUrl = (item) => {
    return myUrl + item.imageUrl
  }

  const itemSrc = (item) => {
    return myUrl + item.imageSrc
  }

  const portfolioExtras = [
    {
      text: 'Design System',
      imageUrl: 'design-system-lg.png',
      imageSrc: 'design-system@2x.png'
    },
    {
      text: 'Zander Insurance',
      imageUrl: 'zander.png',
      imageSrc: 'zander_sm@2x.png'
    },
    {
      text: 'JPay.com multipage PDF',
      imageUrl: 'jpay_com_ui_email_v64.pdf',
      imageSrc: 'jpay-email@2x.png'
    },
    {
      text: 'Multi-page JPay Mobile interface pdf',
      imageUrl: 'JP4_ui_v4.pdf',
      imageSrc: 'jp4-device-music@2x.png'
    },
    {
      text: 'Bridge Admin Business Analysis',
      imageUrl: 'Bridge_Program.png',
      imageSrc: 'bridge-analysis@2x.png'
    },
    {
      text: 'Civic Inc - Axure Wireframe',
      imageUrl: 'Axure-Bridge-Info-TDOT.png',
      imageSrc: 'axure-bridge@2x.png'
    },
    {
      text: 'JPay Kiosk Email screens',
      imageUrl: 'jpay_kiosk_emessages_v18.pdf',
      imageSrc: 'jpay-kiosk-email@2x.png'
    },
    {
      text: 'JPay Kiosk Music screens',
      imageUrl: 'Jpay_kiosk_music_v18b.pdf',
      imageSrc: 'jpay-kiosk-music@2x.png'
    },
    {
      text: 'Mobile Lottery interface, interactive pdf',
      imageUrl: 'mlotto_app.pdf',
      imageSrc: 'm-lotto-ui@2x.png'
    },
    {
      text: 'JPay Extras: Web, Mobile, Corp ID, Print Ads, Newsletters, Brochures, Package Design, PDF forms, Kiosk Design, Murals',
      imageUrl: 'JPay_Extras.pdf',
      imageSrc: 'JPay_Extras@2x.png'
    }
  ]

</script>
