import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'react',
    }),
    React(),
    Inspect(),
  ],
})
