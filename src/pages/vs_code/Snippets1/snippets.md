# VISUAL STUDIO CODE: SNIPPETS

## Create your own snippets

Select **User Snippets** under Code > Preferences and select the language (by language identifier) for which the snippets should appear or create a new global snippet (**New Global Snippets file**).

```json
{
  "My Class Component": {
    "prefix": "rcc",
    "body": [
      "import { Component } from 'react';\n\n",
      "export class ${1:MyComponent} extends Component<$1Props, $1State> {",
      "\treadonly state: Readonly<$1State> = {$4};\n",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$0",
      "\t\t);",
      "\t}",
      "}\n\n",
      "export interface $1Props {$2}\n",
      "export interface $1State {$3}\n"
    ]
  },
  "My Pure Component": {
    "prefix": "rpc",
    "body": [
      "import { PureComponent } from 'react';\n\n",
      "export class ${1:MyComponent} extends PureComponent<$1Props, $1State> {",
      "\treadonly state: Readonly<$1State> = {$4};\n",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$0",
      "\t\t);",
      "\t}",
      "}\n\n",
      "export interface $1Props {$2}\n",
      "export interface $1State {$3}\n"
    ]
  },
  "My Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';\n\n",
      "export function ${1:MyComponent} (${3:props}: $1Props) {",
      "\treturn (",
      "\t\t$0",
      "\t);",
      "}\n\n",
      "export interface $1Props {$2}\n"
    ]
  },
  "My Component Constructor": {
    "prefix": "cctor",
    "body": [
      "constructor(${1:props}: ${2:Props}) {",
      "\tsuper($1);",
      "\t$0",
      "}"
    ]
  }
}
```

## References

1. [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

1. [Snippet Guide](https://code.visualstudio.com/api/language-extensions/snippet-guide)
