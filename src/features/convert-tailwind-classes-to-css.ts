import { classesMap } from '../classes/class-map'
import { squareBracketClasses } from '../classes/square-brackets'
import { Entries } from '../models/types'
import { PARSE_REGEX } from '../utils/regexs'
import { supportTailwindClassText } from '../utils/support'

// Function to find base class key
function findBaseClassKey(classMapKeys: Entries): (className: string) => string | undefined {
  const classKeys = Object.keys(classMapKeys)

  return (className: string) => {
    return classKeys.find((key) => className.startsWith(key))
  }
}

const findCustomBaseClassKey = findBaseClassKey(squareBracketClasses)

export function convertTailwindClassesToCSS(classes: string): string {
  const classesEntries = classes.trim().split(' ')
  let cssResult = ''

  classesEntries.forEach((className) => {
    const tailwindCSS = classesMap.get(className)
    const customValueMatch = className.match(PARSE_REGEX.SQUARE_BRACKET)

    if (!tailwindCSS && !customValueMatch) {
      // Invalid Tailwind class
      cssResult += `\t${className}`
      return
    }

    if (tailwindCSS) {
      // Tailwind class found
      cssResult += `\t${tailwindCSS}\n`
      return
    }

    if (customValueMatch) {
      // Custom value found
      const customValue = {
        block: customValueMatch[0],
        baseClassName: customValueMatch[1],
        value: customValueMatch[2],
      }

      // Special case for text
      if (customValue.block.startsWith('text-[')) {
        const cssPrefix = supportTailwindClassText(customValue.value)
        cssResult += `\t${cssPrefix};\n`
        return
      }

      const baseClassKey = findCustomBaseClassKey(customValue.baseClassName)
      if (baseClassKey) {
        const cssPrefix = squareBracketClasses[baseClassKey]
        cssResult += `\t${cssPrefix} ${customValue.value};\n`
        return
      }
    }
  })

  return cssResult.trim()
}
