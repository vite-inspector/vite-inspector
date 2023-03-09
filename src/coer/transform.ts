import path from 'node:path'
import compiler from './compiler/vue'

function addHtmlAttr(filename: string, line: string, loc: number) {
  // match a single div, no attr <div></div>
  const cwd = process.cwd()
  const htmlTagReg1 = /<(\w+)(\s*>)/g
  const htmlTagReg2 = /<(\w+)\s+([\w|:])/g
  // stitching html parameters fileName: location
  const replaceValue = `<$1 data-loc="${filename.replace(cwd, '')}:${loc}" $2`

  const result = line.replace(htmlTagReg2, replaceValue)
    .replace(htmlTagReg1, replaceValue)
  return result
}

function generate(id: string, code: string, html?: { content: string; start: number; end: number }) {
  // if no template is passed in, the entire content of the file will be parsed
  if (!html) {
    html = {
      content: code,
      start: 0,
      end: code.length,
    }
  }
  // newline reg
  const lineEndReg = /\r?\n/
  const { content, start, end } = html
  const templateBeforeContent = code.substring(0, start)
  const templateAfterContent = code.substring(end!)
  // calculate the template start line number
  const templateLineStartNumber = templateBeforeContent.split(lineEndReg).length
  // Add data-loc attribute to html tag <div></div> --> <div data-loc="10"></div>
  const newTemplateContent = content.split(lineEndReg).map((line, i) => addHtmlAttr(id, line, i + templateLineStartNumber)).join('\n')
  return {
    id,
    code: templateBeforeContent + newTemplateContent + templateAfterContent,
  }
}
// eslint-disable-next-line unused-imports/no-unused-vars
function transform(code: string, id: string, options = { serializePath: true }) {
  const extname = path.extname(id)
  let result
  switch (extname) {
    case '.vue':
      result = generate(id, code, compiler(code))
      break
    case '.jsx':
    case '.tsx':
    case '.svelte':
      result = generate(id, code)
      break
    default:
      result = { id, code }
  }
  return result
}

export default transform
