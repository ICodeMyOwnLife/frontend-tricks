import React, { FC, memo } from 'react';
// Import to CodeEditor should go before imports to ace-builds mode and snippet
import CodeEditor, { CodeEditorProps } from 'components/CodeEditor';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';

export const JsCodeEditorComponent: FC<JsCodeEditorProps> = ({ ...props }) => (
  <CodeEditor {...props} mode="javascript" />
);

const JsCodeEditor = memo(JsCodeEditorComponent);
JsCodeEditor.displayName = 'JsCodeEditor';
export default JsCodeEditor;

export interface JsCodeEditorProps extends OmitFrom<CodeEditorProps, 'mode'> {}
