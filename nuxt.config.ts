import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/prismic',
    '@vite-pwa/nuxt',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
        title: 'English lessons | Valeria Radchenko',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
        { hid: 'googlebot', name: 'googlebot', content: 'noindex' },
        { hid: 'description', name: 'description', content: 'Veniam magna proident ipsum aute ipsum sit. Mollit ut officia aute fugiat Lorem enim quis aliquip velit duis irure anim aliquip.' },
        { hid: 'theme-color', name: 'theme-color', content: '#F0E8DD' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]  
    },
    // baseURL: "/valeria/"
  },

  // static: {
  //   maxAge: 1000 * 60 * 60 * 4
  // },


  prismic: {
    endpoint: 'mc-dev'
  },

  image: {
    prismic: {}
  },

  vite: {
    plugins: [svgLoader()]
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'vr-256.jpg',
          sizes: '192x192',
          type: 'image/jpg',
        },
        {
          src: 'vr-512.jpg',
          sizes: '512x512',
          type: 'image/jpg',
        },
        {
          src: 'vr-512.jpg',
          sizes: '512x512',
          type: 'image/jpg',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      // periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})