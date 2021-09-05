import { FC, memo } from 'react';
// Import to CodeEditor should go before imports to ace-builds mode and snippet
import CodeEditor, { CodeEditorProps } from 'components/CodeEditor';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/snippets/html';

export const HtmlCodeEditorComponent: FC<HtmlCodeEditorProps> = props => (
  <CodeEditor {...props} mode="html" />
);

const HtmlCodeEditor = memo(HtmlCodeEditorComponent);
HtmlCodeEditor.displayName = 'HtmlCodeEditor';
export default HtmlCodeEditor;

export interface HtmlCodeEditorProps
  extends OmitFrom<CodeEditorProps, 'mode'> {}
