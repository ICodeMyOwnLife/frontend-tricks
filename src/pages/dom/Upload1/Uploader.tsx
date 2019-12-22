import React, { FC, memo, RefObject, FormEventHandler, ReactNode } from 'react';
import {
  Typography,
  Button,
  Box,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import useStyles from './styles';
import { UploadStatus } from './hooks';

export const UploaderComponent: FC<UploaderProps> = ({
  title,
  url,
  fieldName,
  formRef,
  inputRef,
  handleSubmit,
  status,
  multiple,
  children,
}) => {
  const classes = useStyles();
  const {
    loading = false,
    progressPercentage = 0,
    result = undefined,
    error = undefined,
  } = status || {};

  return (
    <Box className={classes.UploadContainer}>
      <Typography variant="h6">{title}</Typography>

      <Paper className={classes.UploadWrapper}>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          action={url}
          method="POST"
          encType="multipart/form-data"
        >
          <input
            className={classes.FileInput}
            type="file"
            name={fieldName}
            ref={inputRef}
            required
            multiple={multiple}
          />
          {children}
          <Button
            className={classes.ButtonSubmit}
            type="submit"
            variant="contained"
            color="default"
            size="small"
          >
            Upload
          </Button>
          {result && <pre>{JSON.stringify(result)}</pre>}
        </form>

        {error && (
          <Typography
            className={classes.ErrorText}
            color="error"
            variant="subtitle1"
          >
            {error}
          </Typography>
        )}

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

const Uploader = memo(UploaderComponent);
Uploader.displayName = 'Uploader';
export default Uploader;

export interface UploaderProps {
  title: string;
  url?: string;
  fieldName?: string;
  formRef?: RefObject<HTMLFormElement>;
  inputRef?: RefObject<HTMLInputElement>;
  handleSubmit?: FormEventHandler;
  status?: UploadStatus;
  multiple?: boolean;
  children?: ReactNode;
}
