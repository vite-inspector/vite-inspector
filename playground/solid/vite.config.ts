import { defineConfig } from 'vite';
import SolidPlugin from 'vite-plugin-solid';
import Inspect from 'vite-plugin-inspect'
import OpenIde from '../../src'

export default defineConfig({
  plugins: [
    SolidPlugin(),
    Inspect(),
    OpenIde({
      framework:'solid'
    }),
  ],
  build: {
    target: 'esnext',
  },
});
