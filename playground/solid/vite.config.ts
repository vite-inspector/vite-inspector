import { defineConfig } from 'vite'
import SolidPlugin from 'vite-plugin-solid'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-inspector'

export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'solid',
    }),
    SolidPlugin(),
    Inspect(),
  ],
  build: {
    target: 'esnext',
  },
})
