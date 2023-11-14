# vite-inspector

[![NPM version](https://img.shields.io/npm/v/vite-inspector?color=a1b858&label=)](https://www.npmjs.com/package/vite-inspector)

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
| Svelte | [Example](./playground/svelte)|

## Install

```bash
pnpm install vite-inspector -D
```

<details>
<summary>Vue2</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'vue'
    }),
    Vue(),
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
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'vue'
    }),
    Vue(),
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
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'react'
    }),
    React(),
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
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'preact'
    }),
    Preact(),
  ],
})
```

<br></details>

<details>
<summary>Solid</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import SolidPlugin from 'vite-plugin-solid'
import OpenIde from 'vite-inspector'

export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'solid'
    }),
    SolidPlugin(),
  ],
  build: {
    target: 'esnext',
  },
})
```

<br></details>

<details>
<summary>Svelte</summary><br>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import openIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    openIde({
      framework: 'svelte'
    }),
    svelte(),
  ],
})
```

<br></details>

## Config

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import OpenIde from 'vite-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    OpenIde({
      framework: 'react' | 'vue' | 'solid' | 'preact' | 'svelte'
    }),
  ]
})
```

## Credits

Thanks to:

- [@webfansplz/vite-plugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector)

- [@zthxxx/react-dev-inspector](https://github.com/zthxxx/react-dev-inspector)

- [vite-plugin-svelte-inspector](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte/src/ui/inspector)

- [@sudongyuer/vite-plugin-react-inspector](https://github.com/sudongyuer/vite-plugin-react-inspector)

- [@songjiachao/vite-plugin-inspector](https://github.com/songjiachao/vite-plugin-inspector)

## License

[MIT](./LICENSE) License © 2023 [Elone Hoo](https://github.com/elonehoo)
