// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/prismic'],

  app: {
    head: {
      title: 'English lessons | Valeria Radchenko',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
        { hid: 'googlebot', name: 'googlebot', content: 'noindex' },
        { hid: 'description', name: 'description', content: 'Veniam magna proident ipsum aute ipsum sit. Mollit ut officia aute fugiat Lorem enim quis aliquip velit duis irure anim aliquip.' }
      ]
    },
    baseURL: "/valeria/"
  },

  prismic: {
    endpoint: 'mc-dev'
  }
})