"use strict";

import * as vscode from "vscode";
import * as vim from "./vim";
import { Emacs } from "./emacs";

export function activate(context: vscode.ExtensionContext) {
  const emacs = new Emacs();
  emacs.activate(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
