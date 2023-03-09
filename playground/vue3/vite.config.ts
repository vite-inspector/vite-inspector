import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Inspect(),
    OpenIde()
  ],
})
