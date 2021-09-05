/* eslint-disable import/first */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { FC, memo } from 'react';
import ReactAce, { IAceEditorProps } from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/theme-merbivore';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

export const CodeEditorComponent: FC<CodeEditorProps> = ({
  enableBasicAutocompletion = true,
  enableLiveAutocompletion = true,
  enableSnippets = true,
  fontSize = '15px',
  width = '100%',
  height = '400px',
  highlightActiveLine = true,
  showGutter = true,
  tabSize = 2,
  ...props
}) => (
  <ReactAce
    {...props}
    theme="merbivore"
    enableBasicAutocompletion={enableBasicAutocompletion}
    enableLiveAutocompletion={enableLiveAutocompletion}
    enableSnippets={enableSnippets}
    fontSize={fontSize}
    width={width}
    height={height}
    highlightActiveLine={highlightActiveLine}
    showGutter={showGutter}
    tabSize={tabSize}
    editorProps={{ $blockScrolling: Infinity }}
  />
);

const CodeEditor = memo(CodeEditorComponent);
CodeEditor.displayName = 'CodeEditor';
export default CodeEditor;

export interface CodeEditorProps
  extends OmitFrom<IAceEditorProps, 'theme' | 'editorProps' | 'setOptions'> {}
