export const formatCode = (code: string) => {
  const lines = code.trim().split('\n')

  const formated = lines.map((result) => {
    return `\t${result.trim()}`
  })

  return formated.join('\n')
}
