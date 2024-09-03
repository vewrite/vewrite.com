// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/assets/main.scss',
    '@/assets/_variables.scss',
  ],

  googleFonts: {
    families: {
      Roboto: true,
      Judson: true,
    }
  },

  modules: ['@nuxtjs/google-fonts', '@nuxt/content'],
})