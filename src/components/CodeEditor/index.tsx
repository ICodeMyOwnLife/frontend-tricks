/* eslint-disable import/first */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { FC, memo } from 'react';
import ReactAce, { IAceEditorProps } from 'react-ace';
import 'brace/mode/jsx';

const languages = ['typescript', 'javascript', 'html', 'scss', 'json'] as const;
languages.forEach(lang => {
  require(`brace/mode/${lang}`);
  require(`brace/snippets/${lang}`);
});

const themes = [
  'ambiance',
  'chaos',
  'chrome',
  'clouds',
  'dawn',
  'dracula',
  'eclipse',
  'github',
  'katzenmilch',
  'kr_theme',
  'kuroir',
  'merbivore',
  'monokai',
  'tomorrow_night',
  'tomorrow',
  'twilight',
] as const;
themes.forEach(theme => {
  require(`brace/theme/${theme}`);
});

import 'brace/ext/language_tools';
import 'brace/ext/beautify';
import 'brace/ext/emmet';
import 'brace/ext/searchbox';

export const CodeEditorComponent: FC<CodeEditorProps> = ({
  language,
  theme = 'merbivore',
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
    mode={language}
    theme={theme}
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
    {...props}
  />
);

const CodeEditor = memo(CodeEditorComponent);
CodeEditor.displayName = 'CodeEditor';
export default CodeEditor;

export interface CodeEditorProps
  extends OmitFrom<
    IAceEditorProps,
    'mode' | 'theme' | 'editorProps' | 'setOptions'
  > {
  language: typeof languages[number];
  theme?: typeof themes[number];
}
