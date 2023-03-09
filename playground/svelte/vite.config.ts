import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import inspect from 'vite-plugin-inspect'
import openIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    inspect(),
    openIde({
      framework: 'svelte'
    })
  ],
})
