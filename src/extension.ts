// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

function insertCharacters(symbols: string){
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const selection = editor.selection;

        editor.edit(editBuilder => {
            editBuilder.insert(selection.start, symbols);
        });
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerTextEditorCommand("extension.braces", () => {
        insertCharacters('{}');
    });

    vscode.commands.registerTextEditorCommand("extension.parentheses", () => {
        insertCharacters('()');
    });

    vscode.commands.registerTextEditorCommand("extension.brackets", () => {
        insertCharacters('[]');
    });

    vscode.commands.registerTextEditorCommand("extension.arrowFunction", () => {
        insertCharacters('() => {}');
    });
    
    vscode.commands.registerTextEditorCommand("extension.dollar", () => {
        insertCharacters('${}');
    });

    vscode.commands.registerTextEditorCommand("extension.ternary", () => {
        insertCharacters('? :');
    });

    vscode.commands.registerTextEditorCommand("extension.backticks", () => {
        insertCharacters('``');
    });

    vscode.commands.registerTextEditorCommand("extension.tilda", () => {
        insertCharacters('~');
    });

    vscode.commands.registerTextEditorCommand("extension.backslash", () => {
        insertCharacters('\\');
    });
}

// this method is called when your extension is deactivated
export function deactivate() {}
