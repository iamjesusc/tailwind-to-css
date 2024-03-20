import { CssSelectorEnum } from '../enums/css-selector-enum'

export const CSS_SELECTOR_REGEX: Record<CssSelectorEnum, RegExp> = {
  TAILWIND: /^[^\{\}]+$/,
  CLASS: /\.([a-zA-Z][\w-]*)/,
  ID: /#([a-zA-Z][\w-]*)/,
  TAG: /^[a-zA-Z][-a-zA-Z0-9]*$/,
}

export const PARSE_REGEX: Record<string, RegExp> = {
  CSSBLOCK: /(?:^|\n)([^{\n]+?)\s*{([^{}]*)}/g,
  COMMENT: /(?:\/\*[\s\S]*?\*\/)|([^{}]*?)\{(.*?)\}/g,
  SQUARE_BRACKET: /(.+?)\[(.+?)\]/,
}
