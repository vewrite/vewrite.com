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
      RobotoCondensed: true,
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

  hotjar: {
    hotjarId: 5129596,
    scriptVersion: 6,
  }
})