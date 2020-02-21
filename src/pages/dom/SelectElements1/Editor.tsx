import React, { FC, memo, Dispatch, SetStateAction } from 'react';
import { Box, Button, Collapse } from '@material-ui/core';
import { useToggle } from 'cb-hooks';
import CodeEditor from 'components/CodeEditor';
import useStyles from './styles';

export const EditorComponent: FC<EditorProps> = ({
  html,
  setHtml,
  updateDisplay,
}) => {
  const classes = useStyles();
  const [editorVisible, toggleEditorVisible] = useToggle(false);

  return (
    <Box>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={toggleEditorVisible}
      >
        Toggle Edit
      </Button>
      <Collapse in={editorVisible}>
        <CodeEditor
          className={classes.codeEditor}
          language="html"
          value={html}
          onChange={setHtml}
        />
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={updateDisplay}
        >
          Update HTML
        </Button>
      </Collapse>
    </Box>
  );
};

const Editor = memo(EditorComponent);
Editor.displayName = 'Editor';
export default Editor;

export interface EditorProps {
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
  updateDisplay: VoidFunction;
}