"use strict";

import * as vscode from "vscode";
import * as vim from "./vim";

export class Emacs {
  async cutAllRight() {
    await vscode.commands.executeCommand("cursorEndSelect");
    await vscode.commands.executeCommand("editor.action.clipboardCutAction");
  }

  focusEditor() {
    vscode.commands.executeCommand("workbench.action.closePanel");
    vscode.commands.executeCommand("workbench.action.closeSidebar");
    vscode.commands.executeCommand("workbench.action.closeAuxiliaryBar");
  }

  async lowerNextWord() {
    await vscode.commands.executeCommand("cursorWordRight");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
  }

  async upperNextWord() {
    await vscode.commands.executeCommand("cursorWordRight");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
  }

  async titleNextWord() {
    await vscode.commands.executeCommand("cursorWordRight");
    await vscode.commands.executeCommand("editor.action.transformToTitlecase");
  }

  activate(context: vscode.ExtensionContext) {
    const cursorMoves: string[] = [
      "cursorUp",
      "cursorDown",
      "cursorLeft",
      "cursorRight",
      "cursorHome",
      "cursorEnd",
      "cursorWordLeft",
      "cursorWordRight",
      "cursorPageDown",
      "cursorPageUp",
      "cursorTop",
      "cursorBottom",
    ];

    cursorMoves.forEach((element) => {
      context.subscriptions.push(
        vscode.commands.registerCommand("emacs." + element, () => {
          vscode.commands.executeCommand(element);
        })
      );
    });

    context.subscriptions.push(
      vscode.commands.registerCommand("emacs.cutAllRight", this.cutAllRight)
    );

    context.subscriptions.push(
      vscode.commands.registerCommand("emacs.focusOnEditor", this.focusEditor)
    );

    context.subscriptions.push(
      vscode.commands.registerCommand("emacs.alt-u", this.upperNextWord)
    );

    context.subscriptions.push(
      vscode.commands.registerCommand("emacs.alt-l", this.lowerNextWord)
    );

    context.subscriptions.push(
      vscode.commands.registerCommand("emacs.alt-c", this.titleNextWord)
    );
  }
}
