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
      vscode.commands.executeCommand("workbench.action.closePanel");
      vscode.commands.executeCommand("workbench.action.closeSidebar");
      vscode.commands.executeCommand("workbench.action.closeAuxiliaryBar");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-u", () => {
      vscode.commands.executeCommand("cursorWordRight");
      vscode.commands.executeCommand("editor.action.transformToUppercase");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-l", () => {
      vscode.commands.executeCommand("cursorWordRight");
      vscode.commands.executeCommand("editor.action.transformToLowercase");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-c", () => {
      vscode.commands.executeCommand("cursorWordRight");
      vscode.commands.executeCommand("editor.action.transformToTitlecase");
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {
  region.deactivate();
}
