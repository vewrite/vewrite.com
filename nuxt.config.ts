// https://nuxt.com/docs/api/configuration/nuxt-config


console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY);


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
    // '@nuxtjs/supabase',
  ],

  // supabase: {
  //   redirect: false,
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY,
  // }

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
})