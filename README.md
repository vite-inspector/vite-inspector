# vite-plugin-open-ide

[![NPM version](https://img.shields.io/npm/v/vite-plugin-open-ide?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-open-ide)

> Jump to the local IDE source code while clicking the element of the browser automatically.

https://user-images.githubusercontent.com/43719490/223932417-35b4195a-71cd-4df1-a448-2d269ecbddcf.mp4

## TODO

- [x] Support Vue
- [x] Support React
- [x] Support PReact
- [x] Support Solid
- [x] Support Svelte

## Examples

| Framework | Example |
| --- | --- |
| Vue2 | [Example](./playground/vue2)|
| Vue3 | [Example](./playground/vue3)|
| React | [Example](./playground/react)|
| PReact | [Example](./playground/preact)|
| Solid | [Example](./playground/solid)|

## Install

```bash
pnpm install vite-plugin-open-ide -D
```

<details>
<summary>Vue2</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    OpenIde({
      framework:'vue'
    }),
  ],
})

```

<br></details>

<details>
<summary>Vue3</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    OpenIde({
      framework:'vue'
    }),
  ],
})
```

<br></details>

<details>
<summary>React</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    OpenIde({
      framework:'react'
    }),
  ],
})

```

<br></details>

<details>
<summary>PReact</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Preact from '@preact/preset-vite'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Preact(),
    OpenIde({
      framework:'preact'
    }),
  ],
})
```

<br></details>

<details>
<summary>Solid</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import SolidPlugin from 'vite-plugin-solid';
import OpenIde from 'vite-plugin-open-ide'

export default defineConfig({
  plugins: [
    SolidPlugin(),
    OpenIde({
      framework:'solid'
    }),
  ],
  build: {
    target: 'esnext',
  },
})
```

<br></details>

## Config

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import OpenIde from 'vite-plugin-open-ide'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'react' | 'vue' | 'solid' | 'preact' | 'svelte'
    }),
  ]
})
```

## License

[MIT](./LICENSE) License © 2023 [Elone Hoo](https://github.com/elonehoo)
