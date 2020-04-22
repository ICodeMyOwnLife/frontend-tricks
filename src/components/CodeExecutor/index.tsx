import React, { FC, memo, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import JsCodeEditor from 'components/JsCodeEditor';
import CodeViewer from 'components/CodeViewer';
import { useHandleExecute } from './utils';
import useStyles from './styles';

export const CodeExecutorComponent: FC<CodeExecutorProps> = ({
  code,
  onCodeChange,
  functionName,
}) => {
  const classes = useStyles();
  const [resultString, setResultString] = useState('');
  const handleExecute = useHandleExecute({
    code,
    functionName,
    setResultString,
  });

  return (
    <Box className={classes.root}>
      <JsCodeEditor value={code} onChange={onCodeChange} />
      <Button
        className={classes.executeButton}
        variant="contained"
        color="primary"
        onClick={handleExecute}
      >
        Execute
      </Button>
      {resultString && <CodeViewer language="json">{resultString}</CodeViewer>}
    </Box>
  );
};

const CodeExecutor = memo(CodeExecutorComponent);
CodeExecutor.displayName = 'CodeExecutor';
export default CodeExecutor;

export interface CodeExecutorProps {
  code: string;
  onCodeChange: (code: string) => void;
  functionName: string;
}
