import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Inspect(),
    OpenIde()
  ],
})
