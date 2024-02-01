// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  routeRules: {
    '/': { redirect: '/bourbon/' },
  },
  app: {
    baseURL: '/',
    head: {
      "meta": [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        { charset: "utf-8" },
      ],
      "link": [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;500;600&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;1,400;1,500&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;600;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap' },
      ],
      "style": [],
      "script": [],
      "noscript": [
        // <noscript>JavaScript is required</noscript>
        { children: `<strong>We're sorry but DrewHarper.com doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>` }
      ]
    },
  },
  experimental: {
    viewTransition: true
  },
  build: {
    quiet: false,
  },
})
