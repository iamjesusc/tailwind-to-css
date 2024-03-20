import * as vscode from 'vscode'
import { generateCSS } from './generate-css'

export function activate(context: vscode.ExtensionContext) {
  let converterFunction = vscode.commands.registerCommand('twindcss.convertTailwindToCSS', () => {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor

    if (!editor) {
      return
    }

    let selection = editor.selection

    let selectionText = ''

    if (selection.isEmpty) {
      const lineNumber = selection.active.line
      const line = editor.document.lineAt(lineNumber)
      const startPos = new vscode.Position(lineNumber, 0)
      const endPos = new vscode.Position(lineNumber, line.range.end.character)
      selection = new vscode.Selection(startPos, endPos)
      selectionText = line.text
    } else {
      selectionText = editor.document.getText(selection)
    }

    let convertedCSS = generateCSS(selectionText)
    // Replace the selected text with the converted CSS
    editor.edit((editBuilder) => {
      editBuilder.replace(selection, convertedCSS)
    })
  })

  context.subscriptions.push(converterFunction)
}

export function deactivate() {}
