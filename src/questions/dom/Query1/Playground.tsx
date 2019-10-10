/* eslint-disable react/no-danger */
import React, { FC, memo, useState } from 'react';
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
  Typography,
  Grid,
} from '@material-ui/core';
import CodeEditor from 'components/CodeEditor';
import useToggle from 'hooks/useToggle';
import useTextField from 'hooks/useTextField';
import useStyles from './styles';
import {
  useInnerHtml,
  useSubmitHandler,
  QueryFunction,
  useRefresh,
} from './hooks';

export const PlaygroundComponent: FC<PlaygroundProps> = ({
  open,
  onClose,
  onQuery,
}) => {
  const classes = useStyles();
  const [queryText, handleChangeQueryText] = useTextField('');
  const [openEditor, toggleOpenEditor] = useToggle(false);
  const [queryResult, setQueryResult] = useState<any>();
  const { containerRef, html, setHtml, updateInnerHtml } = useInnerHtml();
  const handleSubmit = useSubmitHandler({
    containerRef,
    onQuery,
    queryText,
    setQueryResult,
  });
  const refresh = useRefresh({ queryResult });

  return (
    <Modal
      className={classes.Modal}
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      closeAfterTransition
    >
      <Fade in={open} onEntered={updateInnerHtml}>
        <Card className={classes.Card}>
          <CardContent>
            <div className={classes.Display} ref={containerRef} />
            <Button
              className={classes.Button}
              variant="outlined"
              color="primary"
              onClick={toggleOpenEditor}
            >
              Toggle Edit
            </Button>
            <Collapse in={openEditor}>
              <CodeEditor
                className={classes.CodeEditor}
                language="html"
                value={html}
                onChange={setHtml}
              />
              <Button
                className={classes.Button}
                variant="outlined"
                color="primary"
                onClick={updateInnerHtml}
              >
                Update HTML
              </Button>
            </Collapse>

            <form className={classes.Form} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Query"
                value={queryText}
                onChange={handleChangeQueryText}
              />
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary" type="submit">
                    Query
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={refresh}
                  >
                    Refresh
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Box className={classes.Result}>
              <Typography variant="body1">
                Type:{' '}
                {JSON.stringify(
                  queryResult &&
                    queryResult.constructor &&
                    queryResult.constructor.name,
                )}
              </Typography>
              <Typography variant="body1">
                Length: {JSON.stringify(queryResult && queryResult.length)}
              </Typography>
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
  onQuery: QueryFunction;
}
