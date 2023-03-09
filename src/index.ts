import type { Plugin } from 'vite'
import { transform, middleware, injectScript } from './coer'
import { VitePluginOpenIdeOptions } from './type'

const DEFAULT_INSPECTOR_OPTIONS:VitePluginOpenIdeOptions = {
  route:'/open-editor',
  framework: 'vue',
}

export default function (options?:VitePluginOpenIdeOptions): Plugin {
  // 合并默认参数
  const normalizedOptions = { ...DEFAULT_INSPECTOR_OPTIONS, ...options }
  // 文件路径太长，影响页面dom查看效率，使用路径对应6位hash值较为美观
  // const filePathMap = new Map()
  return {
    name: 'vite-plugin-open-ide',
    enforce: 'pre',
    apply: 'serve',
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [{
          tag: 'script',
          children: injectScript(normalizedOptions),
          injectTo: 'head',
        }]
      },
    },
    configureServer({ middlewares }) {
      //@ts-expect-error
      middlewares.use(normalizedOptions.route, middleware)
    },
    //@ts-ignore
    transform(code, id) {
      const { code: newCode } = transform(code, id, options!.framework)
      return newCode
    },
  }
}
