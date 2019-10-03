import React, { FC, memo, RefObject, FormEventHandler } from 'react';
import {
  Typography,
  Button,
  Box,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import useStyles from './styles';

export const AjaxUploadComponent: FC<AjaxUploadProps> = ({
  title,
  formRef,
  inputRef,
  handleUpload,
  loading,
  progressPercentage,
  result,
  multiple,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.UploadContainer}>
      <Typography variant="h6">{title}</Typography>

      <Paper className={classes.UploadWrapper}>
        <form onSubmit={handleUpload} ref={formRef}>
          <input
            className={classes.FileInput}
            type="file"
            name="ajaxSingle"
            ref={inputRef}
            required
            multiple={multiple}
          />
          <Button
            type="submit"
            variant="contained"
            color="default"
            size="small"
          >
            Upload
          </Button>
          {result && <pre>{JSON.stringify(result)}</pre>}
        </form>

        {loading && (
          <Box className={classes.ProgressOverlay}>
            <CircularProgress
              value={progressPercentage}
              variant="determinate"
              color="primary"
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

const AjaxUpload = memo(AjaxUploadComponent);
AjaxUpload.displayName = 'AjaxUpload';
export default AjaxUpload;

export interface AjaxUploadProps {
  title: string;
  formRef?: RefObject<HTMLFormElement>;
  inputRef?: RefObject<HTMLInputElement>;
  handleUpload: FormEventHandler;
  loading: boolean;
  progressPercentage: number;
  result: any;
  multiple: boolean;
}
