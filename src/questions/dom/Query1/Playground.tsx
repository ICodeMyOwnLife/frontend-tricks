/* eslint-disable react/no-danger */
import React, { FC, memo, useState, useRef } from 'react';
import {
  Modal,
  Fade,
  Button,
  Collapse,
  Backdrop,
  Card,
  CardContent,
  TextField,
  Box,
} from '@material-ui/core';
import CodeEditor from 'components/CodeEditor';
import useToggle from 'hooks/useToggle';
import useBind from 'hooks/useBind';
import useTextField from 'hooks/useTextField';
import useStyles from './styles';

const sampleHtml = `
<div id="div1">
  <div id="div2">
    <div id="div3" />
  </div>
  <div id="div4" />
  <div id="div5">
    <div id="div6" />
  </div>
</div>`;

export const PlaygroundComponent: FC<PlaygroundProps> = ({
  open,
  onClose,
  onQuery,
}) => {
  const classes = useStyles();
  const [html, setHtml] = useState(sampleHtml);
  const [editingHtml, setEditingHtml] = useState(html);
  const [queryText, handleChangeQueryText] = useTextField('');
  const [openEditor, toggleOpenEditor] = useToggle(false);
  const handleSetHtml = useBind(setHtml, null, editingHtml);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleQuery = useBind(onQuery, null, containerRef.current!, queryText);

  return (
    <Modal
      className={classes.Modal}
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      closeAfterTransition
    >
      <Fade in={open}>
        <Card className={classes.Card}>
          <CardContent>
            <div
              className={classes.Display}
              ref={containerRef}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Button
              className={classes.Button}
              variant="outlined"
              onClick={toggleOpenEditor}
            >
              Toggle Edit
            </Button>
            <Collapse in={openEditor}>
              <CodeEditor
                className={classes.CodeEditor}
                language="html"
                value={editingHtml}
                onChange={setEditingHtml}
              />
              <Button
                className={classes.Button}
                variant="outlined"
                onClick={handleSetHtml}
              >
                Update HTML
              </Button>
            </Collapse>

            <Box>
              <TextField
                fullWidth
                label="Query"
                value={queryText}
                onChange={handleChangeQueryText}
              />
              <Button
                className={classes.Button}
                variant="outlined"
                color="primary"
                onClick={handleQuery}
              >
                Query
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

const Playground = memo(PlaygroundComponent);
Playground.displayName = 'Playground';
export default Playground;

export interface PlaygroundProps {
  open: boolean;
  onClose: VoidFunction;
  onQuery: TypedFunction<[HTMLDivElement, string]>;
}
