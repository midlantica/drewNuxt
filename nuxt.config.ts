// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // rootDir: __dirname,
  // srcDir: "client",
  // serverDir: "server",
  devServer: {},
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
    '/': {
      redirect: '/bourbon/',
      prerender: true,
    },
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
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&display=swap' },
      ],
      // "style": [],
      // "script": [],
      "noscript": [
        { children: `<strong>We're sorry but DrewHarper.com doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>` }
      ]
    },
  },
  experimental: {
    viewTransition: true
  },
  build: {
    quiet: false,
    appManifest: false,
  },
  appManifest: false,
})
