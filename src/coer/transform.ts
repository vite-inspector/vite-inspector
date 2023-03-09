import path from 'path'
import compiler from './compiler/vue'


function addHtmlAttr(filename: string, line: string, loc: number) {
  // 匹配单个div,无attr  <div></div>
  const cwd = process.cwd()
  const htmlTagReg1 = /<(\w+)(\s*>)/g
  const htmlTagReg2 = /<(\w+)\s+([\w|:])/g
  // 拼接html参数 fileName:位置
  const replaceValue = `<$1 data-loc="${filename.replace(cwd, '')}:${loc}" $2`

  const result = line.replace(htmlTagReg2, replaceValue)
    .replace(htmlTagReg1, replaceValue)
  return result
}

function generate(id: string, code: string, html?: { content: string, start: number, end: number }) {
  // 如果没有传入模板，则解析文件全部内容
  if (!html) {
    html = {
      content: code,
      start: 0,
      end: code.length
    }
  }
  // 换行reg
  const lineEndReg = /\r?\n/
  const { content, start, end } = html
  const templateBeforeContent = code.substring(0, start)
  const templateAfterContent = code.substring(end!)
  // 计算template开始行号
  const templateLineStartNumber = templateBeforeContent.split(lineEndReg).length
  // 给 html tag 添加 data-loc 属性 <div></div> --> <div data-loc="10"></div>
  const newTemplateContent = content.split(lineEndReg).map((line, i) => addHtmlAttr(id, line, i + templateLineStartNumber)).join('\n')
  return {
    id: id,
    code: templateBeforeContent + newTemplateContent + templateAfterContent,
  }
}

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
