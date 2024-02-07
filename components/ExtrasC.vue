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
  import { ref } from 'vue'

  const myUrl = '/img/portfolio/extras/'

  const itemUrl = (item) => {
    return myUrl + item.imageUrl
  }

  const itemSrc = (item) => {
    return myUrl + item.imageSrc
  }

  const portfolioExtras = ref([
    {
      text: 'Design System 01',
      imageUrl: 'design-system-01-lg.png',
      imageSrc: 'design-system-01-sm.png'
    },
    {
      text: 'Design System 02',
      imageUrl: 'design-system-02-lg.png',
      imageSrc: 'design-system-02-sm.png'
    },
    {
      text: 'Design System 3',
      imageUrl: 'design-system-03-lg.png',
      imageSrc: 'design-system-03-sm.png'
    },
    {
      text: 'Design System 04',
      imageUrl: 'design-system-04-lg.png',
      imageSrc: 'design-system-04-sm.png'
    },
    {
      text: 'Design System 05',
      imageUrl: 'design-system-05-lg.png',
      imageSrc: 'design-system-05-sm.png'
    },
    {
      text: 'Design System 06',
      imageUrl: 'design-system-06-lg.png',
      imageSrc: 'design-system-06-sm.png'
    },
    {
      text: 'Zander Insurance',
      imageUrl: 'zander_pg_lg.png',
      imageSrc: 'zander_pg_sm.png'
    },
    {
      text: 'Dollar General mockup',
      imageUrl: 'dollar-general-01-lg.png',
      imageSrc: 'dollar-general-01-sm.png'
    },
    {
      text: 'TN Dept of Education',
      imageUrl: 'tdot-01-lg.png',
      imageSrc: 'tdot-01-sm.png'
    },
    {
      text: 'TN Dept of Education',
      imageUrl: 'tdot-02-lg.png',
      imageSrc: 'tdot-02-sm.png'
    },
    {
      text: 'Civic Inc - Capital-fund-mgmt-01',
      imageUrl: 'capital-fund-mgmt-01-lg.png',
      imageSrc: 'capital-fund-mgmt-01-sm.png'
    },
    {
      text: 'Civic Inc - Capital Funding Mgmt',
      imageUrl: 'capital-fund-mgmt-02-lg.png',
      imageSrc: 'capital-fund-mgmt-02-sm.png'
    },
    {
      text: 'Civic Inc - Land Mgmt 01',
      imageUrl: 'land-mgmt-01-lg.png',
      imageSrc: 'land-mgmt-01-sm.png'
    },
    {
      text: 'Civic Inc - Land Mgmt 02',
      imageUrl: 'land-mgmt-02-lg.png',
      imageSrc: 'land-mgmt-02-sm.png'
    },
    {
      text: 'Civic Inc - Bridge Mgmt',
      imageUrl: 'bridge-mgmt-01-lg.png',
      imageSrc: 'bridge-mgmt-01-sm.png'
    },
    {
      text: 'Civic Inc - Axure Wireframe',
      imageUrl: 'Axure-Bridge-Info-TDOT.png',
      imageSrc: 'axure-bridge@2x.png'
    },
    {
      text: 'Civic Inc - Bridge Admin Business Analysis',
      imageUrl: 'Bridge_Program.png',
      imageSrc: 'bridge-analysis@2x.png'
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
      text: 'JPay Extras: Web, Mobile, Corp ID, Print Ads, Newsletters, Brochures, Package Design, PDF forms, Kiosk Design, Murals',
      imageUrl: 'JPay_Extras.pdf',
      imageSrc: 'JPay_Extras@2x.png'
    },
    {
      text: 'Mobile Lottery interface, interactive pdf',
      imageUrl: 'mlotto_app.pdf',
      imageSrc: 'm-lotto-ui@2x.png'
    }
  ])

</script>
