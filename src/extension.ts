// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerTextEditorCommand("extension.leftBracket", () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;

            editor.edit(editBuilder => {
                editBuilder.insert(selection.start, "{");
            });
        }
    });

    vscode.commands.registerTextEditorCommand("extension.rightBracket", () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;

            editor.edit(editBuilder => {
                editBuilder.insert(selection.start, "}");
            });
        }
    });

    vscode.commands.registerTextEditorCommand("extension.arrowFunction", () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;

            editor.edit(editBuilder => {
                editBuilder.insert(selection.start, "() => { }");
            });
        }
    });
}

// this method is called when your extension is deactivated
export function deactivate() {}
