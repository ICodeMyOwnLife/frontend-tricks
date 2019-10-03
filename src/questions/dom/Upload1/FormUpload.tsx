import React, { FC, memo } from 'react';
import { Box, Typography, Paper, Button } from '@material-ui/core';
import useStyles from './styles';

export const FormUploadComponent: FC<FormUploadProps> = ({
  title,
  url,
  fieldName,
  multiple,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.UploadContainer}>
      <Typography variant="h6">{title}</Typography>
      <Paper className={classes.UploadWrapper}>
        <form action={url} method="POST" encType="multipart/form-data">
          <input type="hidden" name="redirect" value={window.location.href} />
          <input
            className={classes.FileInput}
            type="file"
            name={fieldName}
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
        </form>
      </Paper>
    </Box>
  );
};

const FormUpload = memo(FormUploadComponent);
FormUpload.displayName = 'FormUpload';
export default FormUpload;

export interface FormUploadProps {
  title: string;
  url: string;
  fieldName: string;
  multiple: boolean;
}
