/// <reference types="vitest" />
import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import-api/vite'
import Props from 'unplugin-vue-prop'
import SfcName from 'unplugin-vue-sfc-name/vite'
import UnoCss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Inspect from 'vite-plugin-inspect'
import OpenIde from 'vite-inspector'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    OpenIde({
      framework: 'vue',
    }),
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/elonehoo/unplugin-auto-import-api
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vitest',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/elonehoo/unplugin-vue-prop
    Props(),

    // https://github.com/elonehoo/unplugin-vue-sfc-name
    SfcName({}),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCss(),
    Inspect(),
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
