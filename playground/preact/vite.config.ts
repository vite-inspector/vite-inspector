import { defineConfig } from 'vite'
import Preact from '@preact/preset-vite'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'preact',
    }),
    Preact(),
    Inspect(),
  ],
})
