// nuxt.config.ts
const path = require('path');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // rootDir: __dirname,
  // srcDir: "client",
  // serverDir: "server",
  // baseUrl: "/",
  // devServer: {
  // https: {
  //   key: './server.key',
  //   cert: './server.crt'
  // }
  // },
  buildDir: '.nuxt',

  ssr: false,
  devtools: { enabled: true },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // "@vueuse/sound/nuxt",
    'nuxt-gtag'
  ],

  plugins: [
    '~/plugins/soundManager.js',
    '~/plugins/ndok.js',
    '~/plugins/ayah.js'
  ],

  pinia: {
    storesDirs: ['./stores/**'] // './custom-folder/stores/**'
  },

  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores']
  },

  gtag: {
    id: 'G-HK3TKWNCR6'
  },

  // vueTransitions: {
  //   // The same options as in the plugin itself.
  //   // You will get an autocomplete using Nuxt 3.
  // },
  css: [
    '~/assets/css/main.css',
    '~/pages/bourbon/assets/css/fonts/bourbonFonts/bourbonFonts.css'
  ],

  postcss: {
    plugins: {
      // "postcss-import": {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  routeRules: {
    '/': {
      redirect: '/modern/',
      prerender: true
    }
  },

  components: [
    { path: '~/pages/bourbon/components', prefix: 'Bourbon' },
    { path: '~/pages/corp/components', prefix: 'Corp' },
    { path: '~/pages/groovy/components', prefix: 'Groovy' },
    { path: '~/pages/modern/components', prefix: 'Modern' },
    { path: '~/pages/punk/components', prefix: 'Punk' },
    { path: '~/pages/techy/components', prefix: 'Techy' },
    '~/components' // this must be last line
  ],

  // sound: {
  //   sounds: {
  //     jollyGoodSound: {
  //       src: "/jollyGood.mp3",
  //       options: {
  //         volume: 0.75
  //       }
  //     },
  //     yeehawSound: {
  //       src: "/yeehaw.mp3",
  //       options: {
  //         volume: 0.75
  //       }
  //     }
  //   }
  // },

  app: {
    baseURL: '/',
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;500;600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;1,400;1,500&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;600;900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap'
        }
      ],
      // "style": [],
      // "script": [],
      noscript: [
        {
          children: `<strong>We're sorry but DrewHarper.com doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>`
        }
      ]
    },
    pageTransition: false,
    layoutTransition: false
  },

  experimental: {
    // viewTransition: false,
    // appManifest: false,
    // watcher: "chokidar",
  },

  build: {
    //
  },

  // quiet: false,
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
  vue: {
    // propsDestructure: true
  },

  nitro: {
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: '.output/public'
    }
  },

  compatibilityDate: '2024-08-30'
});
