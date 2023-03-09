export const templateTagStart = '<template>'
export const templateTagEnd = '</template>'

export default function compileVue(code: string) {
  const start = code.indexOf(templateTagStart) + 10
  const end = code.indexOf(templateTagEnd)
  return {
    start,
    end,
    content: code.substring(start, end),
  }
}
