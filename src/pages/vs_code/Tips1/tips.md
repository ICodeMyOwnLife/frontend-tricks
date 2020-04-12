# VISUAL STUDIO CODE: TIPS AND TRICKS

## Setup Fonts

1. Install [Fira Code](https://github.com/tonsky/FiraCode) font
1. Update settings

   ```json
   "editor.fontFamily": "Fira Code",
   "editor.fontLigatures": true,
   ```

## Keyboard Shortcuts Reference

- [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

## Categories

### Basics

1. Command Palette: F1 or ⇧⌘P

1. Quick Open: ⌘P

   - Open multiple files from Quick Open by pressing the Right arrow key

### Command line

### Window

1. New window: ⇧⌘N

1. Close window: ⌘W

### Status Bar

1. Change language mode: ⌘K M

### Customization

1. Change your theme: ⌘K ⌘T

1. Customize your keyboard shortcuts: ⌘K ⌘S

1. Tune your settings: ⌘,

### Extensions

1. Go to Extensions view: ⇧⌘X

### Editor

1. Side by side editing: ⌘\

1. Switch between editors: ⌘1, ⌘2, ⌘3

### Files and folders

1. New File: ⌘N

1. Open File: ⌘O

1. Save: ⌘S

1. Save As: ⇧⌘S

1. Save All: ⌥⌘S

1. Close: ⌘W

1. Close All: ⌘K ⌘W

1. Close others: ⌥⌘T

1. Reopen closed editor: ⇧⌘T

1. Keep preview mode editor open: ⌘K Enter

1. Copy path of active file: ⌘K P

1. Reveal active file in Explorer: ⌘K R

1. Show active file in new window/instance: ⌘K O

### Display

1. Toggle full screen: ⌃⌘F

1. Toggle editor layout (horizontal/vertical): ⌥⌘0

1. Zoom in/out: ⌘= / ⇧⌘-

1. Toggle Sidebar visibility: ⌘B

1. Show Explorer / Toggle focus: ⇧⌘E

1. Show Search: ⇧⌘F

1. Show Source Control: ⌃⇧G

1. Show Debug: ⇧⌘D

1. Show Extensions: ⇧⌘X

1. Replace in files: ⇧⌘H

1. Toggle Search details: ⇧⌘J

1. Show Output panel: ⇧⌘U

1. Open Markdown preview: ⇧⌘V

1. Open Markdown preview to the side: ⌘K V

1. Zen Mode (Esc Esc to exit): ⌘K Z

### Editing hacks

1. Multi-cursor selection

   - Add cursors at arbitrary positions: Option+Click

   - Set cursors above or below the current position: ⌥⌘↑ or ⌥⌘↓

   - Insert cursor at end of each line selected: ⇧⌥I

   - Add cursors to all occurrences of the current selection: ⇧⌘L

   - Select all occurrences of current word: ⌘F2

   - Add cursor to the next occurrence after the one you selected: ⌘D

   - Undo cursor position: ⌘U

1. Colume (box) selection: holding Shift+Option while dragging your mouse

   - Column Select Down: ⇧⌥⌘↓

   - Column Select Up: ⇧⌥⌘↑

   - Column Select Left: ⇧⌥⌘←

   - Column Select Right: ⇧⌥⌘→

1. Lines

   - Select current line: ⌘I

   - Delete the entire line with ⇧⌘K

   - Copy line up/down: ⇧⌥↑ or ⇧⌥↓

   - Move line up/down: ⌥↑ or ⌥↓

   - Insert line below/above: ⌘Enter / ⇧⌘Enter

   - Indent/outdent line: ⌘] / ⌘[

1. Expand/shrink selection: ⌃⇧⌘→ or ⌃⇧⌘←

1. Trim trailing whitespace: ⌘K ⌘X

1. Code formating

   - Currently selected source code: ⌘K ⌘F

   - Whole document: ⇧⌥F

1. Comments

   - Add line comment: ⌘K ⌘C

   - Remove line comment: ⌘K ⌘U

   - Toggle line comment: ⌘/

   - Toggle block comment: ⇧⌥A

1. Folding

   - Fold regions of source code using the folding icons on the gutter

   - Use Shift+Click on the folding icon to fold/unfold the region and all regions inside

   - Fold the innermost un-collapsed region at the cursor: ⌥⌘[

   - Unfold the collapsed region at the cursor: ⌥⌘]

   - Fold the innermost un-collapsed region at the cursor and all regions inside that region: ⌘K ⌘[

   - Unfold the region at the cursor and all regions inside that region: ⌘K ⌘]

   - Fold all regions in the editor: ⌘K ⌘0

   - Unfold all regions in the editor: ⌘K ⌘J

   - Fold all regions of level X, except the region at the current cursor position: ⌘K ⌘2 for level 2

   - Fold all regions that start with a block comment token: ⌘K ⌘/

   - Fold all marker regions: ⌘K ⌘8

   - Unfold all marker regions: ⌘K ⌘9

1. Toggle word wrap: ⌥Z

### IntelliSense

1. Trigger Suggestions widget: ⌃Space

1. Trigger parameter hints: ⇧⌘Space

### Refactor

1. Refactor: ⌃⇧R

1. Quick Fix: ⌘.

1. Rename symbol: F2

1. Rename all occurrences: ⌘F2

### Search and replace

1. Find: ⌘F

1. Replace: ⌥⌘F

1. Find next or previous: ⌘G or ⇧⌘G

1. Select all occurrences of Find match: ⌥Enter

1. Add selection to next Find match: ⌘D

1. Move last selection to next Find match: ⌘K ⌘D

### Navigation

1. Navigate group history: ⌃Tab and ⌃⇧Tab

1. Navigate back: ⌃-

1. Navigate forward: ⌃⇧-

1. Go to definition: F12 or Cmd+click

1. Peek definition: ⌥F12

1. Open Definition to the side: ⌘K F12

1. See the type definition: press Cmd when hovering over the type

1. Go to implementation: ⌘F12

1. Find all references: ⇧F12

1. List all references: ⌥⇧F12

1. Go to Symbol in File: ⇧⌘O

   You can group the symbols by kind by adding a colon: @:

1. Go to Symbol in Workspace: ⌘T

1. Go to Line: ⌃G

1. Jump to the matching bracket: ⇧⌘\

1. Navigate to beginning and end of file: ⌘→ and ⌘←

1. Navigate to beginning and end of file: ⌘↑ and ⌘↓

1. Errors and warnings

   - Display the PROBLEMS panel: ⇧⌘M

   - Quickly jump to errors and warnings in the project: F8 or ⇧F8

### Integrated Terminal

1. Open the terminal: ⌃`

1. Add terminal instances: ⌃⇧`

1. Terminal Splitting: ⌘\

   - Focus Previous Pane: ⌥⌘←

   - Focus Next Pane: ⌥⌘→

   - Resize Pane Left: ⌃⌘←

   - Resize Pane Right: ⌃⌘→

   - Resize Pane Up: ⌃⌘↑

   - Resize Pane Down: ⌃⌘↓

1. Clear the terminal: ⌘K

1. Rename terminal sessions: using **Terminal: Rename** command

### Working with JSON

1. Create TypeScript declarations from JSON

1. Copy JSON text to clipboard

1. Create a TypeScript file

1. Parse: ⇧⌥⌘V or **Paste JSON as Types** command

### Git integration: ⌃⇧G

### Debugging

1. Go to Debug view: ⇧⌘D

1. Open DEBUG CONSOLE panel: ⇧⌘Y

1. Create/open debug launch.json: using **Debug: Open launch.json**

1. Debug actions

   - Start/continue debugging: F5

   - Step over: F10

   - Step into: F11

   - Step out: ⇧F11

   - Restart: ⇧⌘F5

   - Stop: ⇧F5

   - Show hover: ⌘K ⌘I

1. Start without debugging: ⌃F5

1. Breakpoints

   - Normal breakpoints

     - Use F9

     - Click on the editor margin

     - Use **Debug: Toggle Breakpoint** command

   - Conditional breakpoints

     - Use the **Add Conditional Breakpoint** action on the editor margin

     - Use the **Edit Breakpoint** action for existing breakpoints

     - Use **Debug: Add Conditional Breakpoint...** command

   - Inline breakpoints

     - Use ⇧F9

     - Use **Debug: Inline Breakpoint** command

1. Logpoints

   - Righclick on the editor margin and choose **Add Logpoint...**

   - Use **Debug: Add Logpoint...** command

### Task runner

### Portable mode

### Insiders builds

### Live Share

### IntelliCode

## References

1. [Visual Studio Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

1. [Keyboard Reference Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

1. [Key Bindings for Visual Studio Code](https://code.visualstudio.com/docs/getstarted/keybindings)

1. [Basic Editing](https://code.visualstudio.com/docs/editor/codebasics)

1. [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)

1. [Code Navigation](https://code.visualstudio.com/docs/editor/editingevolved)

1. [Refactoring](https://code.visualstudio.com/docs/editor/refactoring)

1. [Debugging](https://code.visualstudio.com/docs/editor/debugging)

1. [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)

1. [What is Visual Studio Live Share?](https://docs.microsoft.com/en-us/visualstudio/liveshare/)

1. [Introducing Visual Studio Live Share](https://code.visualstudio.com/blogs/2017/11/15/live-share)

1. [IntelliCode for TypeScript/JavaScript](https://blogs.msdn.microsoft.com/typescript/2018/12/05/intellicode-for-typescript-javascript/)

1. [Fira Code](https://github.com/tonsky/FiraCode)

1. [Fira Code - VS Code Instructions](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)
