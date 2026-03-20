// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildDir: '.nuxt',

  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    'nuxt-gtag'
  ],

  plugins: [
    '~/plugins/soundManager.client.js',
    '~/plugins/ndok.client.js',
    '~/plugins/ayah.client.js'
  ],

  pinia: {
    storesDirs: ['./stores/**']
  },

  imports: {
    dirs: ['stores']
  },

  gtag: {
    id: 'G-HK3TKWNCR6'
  },

  googleFonts: {
    families: {
      Dosis: [200, 500, 600],
      'Alegreya SC': {
        wght: [400, 500],
        ital: [400, 500]
      },
      Spartan: [100, 200, 300, 400, 600, 900],
      'Barlow Semi Condensed': [500],
      'Bodoni Moda': {
        wght: [400, 600],
        ital: [400, 600]
      },
      Poppins: {
        wght: [300, 400, 500],
        ital: [300, 400, 500]
      }
    },
    display: 'swap',
    preconnect: true,
    prefetch: true
  },

  css: [
    '~/assets/css/main.css',
    '~/pages/bourbon/assets/css/fonts/bourbonFonts/bourbonFonts.css'
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  routeRules: {
    '/': {
      redirect: '/modern/',
      prerender: true
    },
    '/modern/': { prerender: true },
    '/bourbon/': { prerender: true },
    '/groovy/': { prerender: true },
    '/techy/': { prerender: true },
    '/corp/': { prerender: true },
    '/punk/': { prerender: true }
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
      noscript: [
        {
          innerHTML: `<strong>We're sorry but DrewHarper.com doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>`
        }
      ]
    },
    pageTransition: false,
    layoutTransition: false
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
