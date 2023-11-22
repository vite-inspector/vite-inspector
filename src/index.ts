import type { Plugin } from 'vite'
import { injectScript, middleware, transform } from './coer'
import type { VitePluginOpenIdeOptions } from './type'

const DEFAULT_INSPECTOR_OPTIONS: VitePluginOpenIdeOptions = {
  route: '/open-editor',
  framework: 'vue',
}

export default function (options?: VitePluginOpenIdeOptions): Plugin {
  // Merge default parameters
  const normalizedOptions = { ...DEFAULT_INSPECTOR_OPTIONS, ...options }
  return {
    name: 'vite-inspector',
    enforce: 'pre',
    apply: 'serve',
    transformIndexHtml: {
      order: 'pre',
      handler() {
        return [{
          tag: 'script',
          children: injectScript(normalizedOptions),
          injectTo: 'head',
        }]
      },
    },
    configureServer({ middlewares }) {
      // @ts-expect-error error
      middlewares.use(normalizedOptions.route, middleware)
    },
    transform(code, id) {
      const { code: newCode } = transform(code, id, options!.framework)
      return newCode
    },
  }
}
