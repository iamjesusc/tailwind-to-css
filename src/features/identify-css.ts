import { CssSelectorEnum } from '../enums/css-selector-enum';
import { CSS_SELECTOR_REGEX } from '../utils/regexs';

/**
 * Identifies the type of CSS selector and checks if it is valid.
 *
 * @param {string} selector - The CSS selector to be identified
 * @return {{ isValid: boolean, type: string | null }} An object indicating if the selector is valid and its type
 */

interface IdentifyCssSelectorReturn {
  isValid: boolean;
  type: string | null;
}

export const identifyCssSelector = (selector: string): IdentifyCssSelectorReturn => {
  const result = {
    isValid: false,
    type: null,
  } as IdentifyCssSelectorReturn;

  for (let key in CSS_SELECTOR_REGEX) {
    // Check if the selector matches the regex
    const isIdentify = CSS_SELECTOR_REGEX[key as CssSelectorEnum].test(selector.trim());
    
    if (isIdentify) {
      result.isValid = true;
      result.type = key;

      return result;
    }
  }

  return result;
}
