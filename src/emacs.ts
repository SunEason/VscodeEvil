"use strict";

import * as vscode from "vscode";
import * as vim from "./vim";

export class Emacs {
  async cutAllRight() {
    await vscode.commands.executeCommand("cursorEndSelect");
    await vscode.commands.executeCommand("editor.action.clipboardCutAction");
  }

  scrollLineToCenter() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const selection = editor.selection;
    const range = new vscode.Range(selection.start, selection.end);
    editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
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
      vscode.commands.registerCommand(
        "emacs.scrollLineToCenter",
        this.scrollLineToCenter
      )
    );
  }
}
