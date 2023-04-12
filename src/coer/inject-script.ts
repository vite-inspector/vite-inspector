import type { VitePluginOpenIdeOptions } from '../type'

export default function (options: VitePluginOpenIdeOptions) {
  return `
(function () {
  function getFilePath(el) {
    const { loc } = el.dataset
    if (!loc) {
      return getFilePath(el.parent || el.parentNode)
    } else {
      return loc
    }
  }
  document.addEventListener('click', (e) => {
    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      e.preventDefault()
      e.stopPropagation()
      const loc = getFilePath(e.target)
      fetch("${options.route}?loc="+loc)
    }
  })
}())
`
}
