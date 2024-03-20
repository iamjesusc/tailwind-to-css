const SUPPORT_TEXT_CLASS_REGEXS = {
  SIZE_REGEX: /^\d+(\.\d+)?(px|em|rem|%)$/,
  COLOR_REGEX: /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/,
}

export const supportTailwindClassText = (classValue: string) => {
  if (SUPPORT_TEXT_CLASS_REGEXS.SIZE_REGEX.test(classValue)) {
    return `font-size: ${classValue}`
  }

  if (SUPPORT_TEXT_CLASS_REGEXS.COLOR_REGEX.test(classValue)) {
    return `color: ${classValue.replace(/_/g, ' ')}`
  }

  return `--value-is-not-a-size-or-color: ${classValue}`
}
