// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }
  ]
})
