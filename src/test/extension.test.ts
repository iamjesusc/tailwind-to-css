// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import assert from 'assert'
import * as vscode from 'vscode'
import { generateCSS } from '../generate-css'
// import * as myExtension from '../../extension';

suite('Generate CSS Test', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('Convert a inline Tailwind CSS class to CSS', () => {
    const converted = generateCSS(`mx-auto  bg-gray-100 text-gray-800 p-4`)

    assert.strictEqual(
      converted,
      '\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgb(243 244 246);\n\tcolor: rgb(31 41 55);\n\tpadding: 1rem;'
    )
  })

  test('Convert multiple Tailwind CSS classes to CSS', () => {
    const converted = generateCSS(`/* Estilo para el contenedor principal */
	.container { 
	  mx-auto  bg-gray-100 text-gray-800 p-4 
	}
	
	.container {
      mx-auto  bg-gray-100 text-gray-800 p-4 
  }
	
	`)

    assert.equal(
      converted,
      '.container {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgb(243 244 246);\n\tcolor: rgb(31 41 55);\n\tpadding: 1rem;\n}\n\n.container {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgb(243 244 246);\n\tcolor: rgb(31 41 55);\n\tpadding: 1rem;\n}'
    )
  })
})
