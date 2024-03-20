import { PARSE_REGEX } from "../utils/regexs";

/**
 * Parses the given CSS entry and returns an array of objects containing the CSS block, content, and selector.
 *
 * @param {string} entry - The CSS entry to be parsed
 * @return {Array<{ block: string; content: string; selector: string }>} An array of objects containing the CSS block, content, and selector
 */

 interface ParseCSSEntryReturn {
  block: string;
  content: string;
  selector: string;
}
export const parseCSSEntry = (entry: string): ParseCSSEntryReturn[] => {
  const parseResult: ParseCSSEntryReturn[] = []

  // Replace all comments with empty strings
  const cleanEntry = entry.replace(PARSE_REGEX.COMMENT, '')

  let match = null

  //  Find all CSS blocks
  while ((match = PARSE_REGEX.CSSBLOCK.exec(cleanEntry)) !== null) {
    // Extract the block, content, and selector
    const classInfo = {
      block: match[0].trim(),
      content: match[2].trim(),
      selector: match[1].trim(),
    }
    parseResult.push(classInfo)
  }

  return parseResult
}
