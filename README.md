# evil-mode README

## extensionDependencies

Vim , File Browser

### Emacs keybindings

| key              | command                                 |
| ---------------- | --------------------------------------- |
| alt+w            | `editor.action.clipboardCopyAction`     |
| ctrl+w           | `editor.action.clipboardCutAction`      |
| ctrl+y           | `editor.action.clipboardPasteAction`    |
| ctrl+s           | `editor.action.nextMatchFindAction`     |
| ctrl+r           | `editor.action.previousMatchFindAction` |
| ctrl+f           | `cursorRight`                           |
| ctrl+b           | `cursorLeft`                            |
| alt+f            | `cursorWordRight`                       |
| alt+b            | `cursorWordLeft`                        |
| ctrl+a           | `cursorHome`                            |
| ctrl+e           | `cursorEnd`                             |
| ctrl+d           | `deleteRight`                           |
| ctrl+h           | `deleteLeft`                            |
| alt+d            | `deleteWordRight`                       |
| alt+h            | `deleteWordLeft`                        |
| **ctrl+g**       | `emacs.exitRegionMode`                  |
| **ctrl+k**       | `emacs.cutAllRight`                     |
| **ctrl+l**       | `emacs.scrollLineToCenter`              |
| **C-x d**        | `file-browser open`                     |
| **C-x b**        | `Switch to another open buffer`         |
| **C-x C-f**      | `QuickOpen a file`                      |
| **C-x k**        | `Close current tab (buffer)`            |
| **C-x C-k**      | `Close all tabs`                        |
| **C-x s**        | `Save`                                  |
| **C-x C-s**      | `Save all`                              |
| **C-x C-w**      | `Save as`                               |
| **C-x z**        | `zen mode`                              |
| **C-x r**        | `recent project`                        |
| **C-M-n**        | `Add selection to next find match`      |
| **M-x**          | `Open command palette`                  |
| **ctrl+j**       | `editor.action.marker.next`             |
| **ctrl+shift+j** | `editor.action.marker.prev`             |
| **ctrl+shift+k** | `Close all side bar and panel`          |

## Suggested Custom Keybindings

```jsonc
  // keyboard shortcuts json
  { "key": "ctrl+p", "command": "editor.action.marker.prev", "when": "editorTextFocus && vim.active && vim.mode != 'Insert'" },
  { "key": "ctrl+n", "command": "editor.action.marker.next", "when": "editorTextFocus && vim.active && vim.mode != 'Insert'" },
  { "key": "ctrl+c ctrl+f", "command": "workbench.action.quickTextSearch", "when": "editorFocus" },
  { "key": "ctrl+c ctrl+v", "command": "workbench.action.openView", "when": "editorFocus" },
  { "key": "ctrl+c ctrl+s", "command": "workbench.action.gotoSymbol", "when": "editorFocus" },
```

### explorer keybindings

| key     | command       |
| ------- | ------------- |
| /       | `list.find`   |
| a       | `new file`    |
| p       | `paste file`  |
| d d     | `cut`         |
| y y     | `copy`        |
| shift+d | `delete file` |
| shift+a | `new folder`  |
| shift+r | `rename file` |

## My settings.json

```json
  //vim
  "vim.easymotion": false,
  "vim.sneak": false,
  "vim.camelCaseMotion.enable": true,
  "vim.replaceWithRegister": true,
  // "vim.foldfix": true, // 折叠时自动展开,为true是11j会一行一行的向下执行
  "vim.enableNeovim": true,
  "vim.leader": "<space>",
  "vim.incsearch": true,
  "vim.hlsearch": true,
  "vim.overrideCopy": true,
  "vim.useSystemClipboard": false,
  "vim.visualstar": true,
  "vim.useCtrlKeys": true,
  "vim.handleKeys": {
    "<C-n>": false,
    "<C-p>": false
  },
  "vim.autoSwitchInputMethod.enable": true,
  // "vim.autoSwitchInputMethod.defaultIM": "1033",
  // "vim.autoSwitchInputMethod.obtainIMCmd": "D:\\im-select.exe",
  // "vim.autoSwitchInputMethod.switchIMCmd": "D:\\im-select.exe {im}",
  "vim.autoSwitchInputMethod.defaultIM": "1",
  "vim.autoSwitchInputMethod.obtainIMCmd": "/usr/bin/fcitx5-remote",
  "vim.autoSwitchInputMethod.switchIMCmd": "/usr/bin/fcitx5-remote -t {im}",
  // prettier-ignore
  "vim.normalModeKeyBindingsNonRecursive": [
    { "before": ["]", "b"], "after": ["g", "t"] },
    { "before": ["[", "b"], "after": ["g", "T"] },
    { "before": ["Y"], "after": ["y", "$" ] }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    { "before": ["Y"], "after": ["\"", "+", "y"] }
  ],
  // To 18 improve performance
  "extensions.experimental.affinity": {
    "vscodevim.vim": 1
  },
  //vim ^
```

## License

MIT
