import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  console.log('Supabase URL:', config.public.supabaseUrl)
  console.log('Supabase Key:', config.public.supabaseKey)

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  )

  console.log('Supabase:', supabase)

  return {
    provide: {
      supabase: supabase
    }
  }
})