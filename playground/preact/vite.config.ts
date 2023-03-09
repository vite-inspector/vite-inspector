import { defineConfig } from 'vite'
import Preact from '@preact/preset-vite'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-plugin-open-ide'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Preact(),
    Inspect(),
    OpenIde(),
  ],
})
