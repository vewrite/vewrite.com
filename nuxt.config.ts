// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hotjar: {
    hotjarId: 5129596,
    scriptVersion: 6,
  },
  css: [
    '@/assets/main.scss',
    '@/assets/_variables.scss',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      RobotoCondensed: {
        weight: [400, 700, 900],
      },
      Judson: true,
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    'nuxt-module-hotjar'
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})