# vite-plugin-open-ide

[![NPM version](https://img.shields.io/npm/v/vite-plugin-open-ide?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-open-ide)

> Jump to the local IDE source code while clicking the element of the browser automatically.

https://user-images.githubusercontent.com/43719490/223932417-35b4195a-71cd-4df1-a448-2d269ecbddcf.mp4

## TODO

- [x] Support Vue
- [x] Support React
- [x] Support PReact
- [ ] Support Svelte

## Install

```bash
pnpm install vite-plugin-open-ide -D
```

## Config

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde(),
  ]
})
```

## License

[MIT](./LICENSE) License © 2023 [Elone Hoo](https://github.com/elonehoo)
