import OpenIde from 'vite-inspector'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxt/devtools'
  ],
  vite:{
    plugins:[
      OpenIde({
        framework:'vue'
      }),
    ]
  }
})
