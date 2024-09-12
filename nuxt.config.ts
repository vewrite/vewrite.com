// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/main.scss',
    '@/assets/_variables.scss',
  ],

  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      title: 'Vewrite - Modern Productivity for Technical Writers',
      charset: 'utf-8',
      meta: [
        { name: 'author', content: 'Vewrite' },
        { name: 'description', content: 'Project management tailored for technical writing teams, with an integrated talent marketplace.' }
      ],
    }
  },

  googleFonts: {
    families: {
      RobotoFlex: [100, 300, 400, 500, 700, 900],
      Judson: true,
    }
  },

  plugins: [
    '~/plugins/hotjar.js'
  ],

  modules: ['@nuxtjs/google-fonts', '@nuxt/content', 'nuxt-module-hotjar', '@pinia/nuxt', 'nuxt-gtag'],

  hotjar: {
    hotjarId: 5129596,
    scriptVersion: 6,
    debug: true
  },

  gtag: {
    id: 'G-87K5F89NX5'
  },

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

  compatibilityDate: '2024-09-12',
})

