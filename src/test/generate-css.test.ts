import * as assert from 'assert'

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode'
import { convertTailwindClassesToCSS } from '../features/convert-tailwind-classes-to-css'

suite('Extension generateCSS Test', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('Convert a inline Tailwind CSS class to CSS', () => {
    const converted = convertTailwindClassesToCSS('flex')
    assert.strictEqual(converted, 'display: flex;')
  })

  test('Convert multiple Tailwind CSS classes to CSS', () => {
    const converted = convertTailwindClassesToCSS('flex absolute top-4')
    assert.strictEqual(converted, 'display: flex;\n\tposition: absolute;\n\ttop: 1rem;')
  })
})
