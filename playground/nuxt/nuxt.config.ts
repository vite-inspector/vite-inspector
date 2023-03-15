import OpenIde from 'vite-plugin-open-ide'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite:{
    plugins:[
      OpenIde({framework:'vue'})
    ]
  }
})
