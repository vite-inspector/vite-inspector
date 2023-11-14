import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import inspect from 'vite-plugin-inspect'
import openIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    openIde({
      framework: 'svelte',
    }),
    svelte(),
    inspect(),
  ],
})
