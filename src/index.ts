import type { Plugin } from 'vite'
import { bold ,green, dim, white } from 'kolorist'
import { transform, middleware, injectScript } from './coer'
import VitePluginOpenIdeOptions from './type'

const DEFAULT_INSPECTOR_OPTIONS:VitePluginOpenIdeOptions = {
  route:'/open-ide'
}

const toggleComboKeysMap = {
  command: process.platform === 'darwin' ? 'Command(⌘)' : 'Ctrl(^)',
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
    configureServer(server) {
      //@ts-ignore
      server.middlewares.use(normalizedOptions.route, middleware)
      const _print = server.printUrls
      server.printUrls = () => {
        _print()
        // eslint-disable-next-line no-console
        console.log(`  ${dim(green('➜'))}  ${dim(bold('Open-IDE: '))} ${white(`${toggleComboKeysMap.command}`)} ${dim('+ click element to open in IDE')}`)
      }
    },
    transform(code, id) {
      const { code: newCode } = transform(code, id)
      return newCode
    },
  }
}
