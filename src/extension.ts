"use strict";

import * as vscode from "vscode";
import * as vim from "./vim";
import { Emacs } from "./emacs";

export function activate(context: vscode.ExtensionContext) {
  const emacs = new Emacs();
  emacs.activate(context);

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.focusOnEditor", () => {
      vscode.commands.executeCommand("workbench.action.closePanel");
      vscode.commands.executeCommand("workbench.action.closeSidebar");
      vscode.commands.executeCommand("workbench.action.closeAuxiliaryBar");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-u", async () => {
      await vscode.commands.executeCommand("cursorWordRight");
      await vscode.commands.executeCommand(
        "editor.action.transformToUppercase"
      );
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-l", async () => {
      await vscode.commands.executeCommand("cursorWordRight");
      await vscode.commands.executeCommand(
        "editor.action.transformToLowercase"
      );
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("evil.alt-c", async () => {
      await vscode.commands.executeCommand("cursorWordRight");
      await vscode.commands.executeCommand(
        "editor.action.transformToTitlecase"
      );
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
