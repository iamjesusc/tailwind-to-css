import { CssSelectorEnum } from './enums/css-selector-enum'
import { convertTailwindClassesToCSS } from './features/convert-tailwind-classes-to-css'
import { identifyCssSelector } from './features/identify-css'
import { parseCSSEntry } from './features/parse-css-entry'
import { formatCode } from './utils/format-code'

/**
 * Generate CSS based on the input string which can be a Tailwind CSS class or a CSS block entry.
 *
 * @param {string} input - the input string to be processed
 * @return {string} the generated CSS string
 */
export const generateCSS = (input: string): string => {
  const cssResults: string[] = []
  // Check if the input is a Tailwind class or a CSS block entry
  const { isValid, type } = identifyCssSelector(input)

  console.log(isValid, type)

  // If the selector is valid and it is a Tailwind class, generate CSS for that class
  if (isValid && type === CssSelectorEnum.TAILWIND) {
    const css = convertTailwindClassesToCSS(input)
    const formatedCss = formatCode(css)
    cssResults.push(formatedCss)
  } else {
    // If the selector is valid and it is a CSS block entry, generate CSS for that block
    const parsedEntries = parseCSSEntry(input)
    parsedEntries.forEach((entry) => {
      let css = convertTailwindClassesToCSS(entry.content)
      const formatedCss = formatCode(css)
      const cssBlock = `${entry.selector} {\n${formatedCss}\n}`
      cssResults.push(cssBlock)
    })
  }

  console.log(cssResults, 'css results')
  // Join the CSS results
  return cssResults.join('\n\n')
}
