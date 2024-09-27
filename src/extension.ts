"use strict";

import * as vscode from "vscode";
import * as region from "./emacs-region";
import * as vim from "./vim";
import * as emacs from "./emacs";

export function activate(context: vscode.ExtensionContext) {
  region.activate(context);
  emacs.activate(context);

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.focusOnEditor", () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      // vscode.window.showInformationMessage('Hello World from evil-mode!');
      vscode.commands.executeCommand("workbench.action.closePanel");
      vscode.commands.executeCommand("workbench.action.closeSidebar");
      vscode.commands.executeCommand("workbench.action.closeAuxiliaryBar");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.killAllRight", async () => {
      await vscode.commands.executeCommand("cursorEndSelect");
      await vscode.commands.executeCommand("editor.action.clipboardCutAction");
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {
  region.deactivate();
}
