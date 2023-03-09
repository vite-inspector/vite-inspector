export const templateTagStart = '<main>'
export const templateTagEnd = '</main>'

export default function compileSvelte(code: string) {
  const start = code.indexOf(templateTagStart) + 7
  const end = code.indexOf(templateTagEnd)
  return {
    start,
    end,
    content: code.substring(start, end),
  }
}
