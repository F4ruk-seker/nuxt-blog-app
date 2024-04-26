// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  runtimeConfig:{
    API_HOST: process.env.API_PATH,
    public:{
      API_HOST: process.env.API_PATH,
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  googleFonts: {
    families: {
        'Nunito': [400, 500, 600, 700],
        'Roboto':[400, 500, 700 ],
        'Ubuntu':[400, 500, 700 ]
    },
},
})
