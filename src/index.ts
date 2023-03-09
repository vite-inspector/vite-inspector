import type { Plugin } from 'vite'
import { bold, dim, green, white } from 'kolorist'
import { injectScript, middleware, transform } from './coer'
import type VitePluginOpenIdeOptions from './type'

const DEFAULT_INSPECTOR_OPTIONS: VitePluginOpenIdeOptions = {
  route: '/open-ide',
}

const toggleComboKeysMap = {
  command: process.platform === 'darwin' ? 'Command(⌘)' : 'Ctrl(^)',
}

export default function (options?: VitePluginOpenIdeOptions): Plugin {
  // merge default parameters
  const normalizedOptions = { ...DEFAULT_INSPECTOR_OPTIONS, ...options }
  // the file path is too long, which affects the viewing efficiency of the page dom. It is more beautiful to use the path corresponding to the 6-digit hash value
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
      // @ts-expect-error error
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
