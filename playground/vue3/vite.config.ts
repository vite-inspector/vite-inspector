import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework:'vue'
    }),
    Vue(),
    Inspect(),
  ],
})
