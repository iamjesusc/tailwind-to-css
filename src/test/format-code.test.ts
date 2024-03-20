import * as assert from 'assert'

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import { formatCode } from '../utils/format-code'

suite('Extension formatCode Test', () => {
  test('Format CSS code', () => {
    const converted = formatCode(`
    \tmargin-left: auto;
    \t margin-right: auto;
    \t     background-color: rgb(243 244 246);
    \tcolor: rgb(31 41 55);
    \tpadding: 1rem;
    `)
    assert.strictEqual(
      converted,
      '\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgb(243 244 246);\n\tcolor: rgb(31 41 55);\n\tpadding: 1rem;'
    )
  })
})
