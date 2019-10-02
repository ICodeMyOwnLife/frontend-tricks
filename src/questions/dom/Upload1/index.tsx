import React, { FC, memo } from 'react';
import Question from 'components/Question';
import { BASE_URL } from 'constants/common';
import Button from 'components/Button';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import questions from './questions';
import useStyles from './styles';
import { useUploadSingle, useUploadMultiple } from './hooks';

export const Upload1Component: FC = () => {
  const classes = useStyles();
  const {
    handleUploadSingle,
    inputSingleRef,
    uploadSingleResult,
  } = useUploadSingle();
  const {
    handleUploadMultiple,
    inputMultipleRef,
    uploadMultipleResult,
  } = useUploadMultiple();

  return (
    <Question title="Upload 1" questions={questions}>
      <Card className={classes.Section}>
        <CardHeader title="Upload Form" />
        <CardContent>
          <form
            className={classes.Form}
            action={`${BASE_URL}/upload-single`}
            method="POST"
            encType="multipart/form-data"
          >
            <Typography variant="h6">Upload single file</Typography>
            <input type="hidden" name="redirect" value={window.location.href} />
            <input
              className={classes.FileInput}
              type="file"
              name="single-file"
              id="inpSingleFile"
              required
            />
            <Button type="submit">Upload</Button>
          </form>

          <form
            className={classes.Form}
            action={`${BASE_URL}/upload-multiple`}
            method="POST"
            encType="multipart/form-data"
          >
            <Typography variant="h6">Upload multiple files</Typography>
            <input type="hidden" name="redirect" value={window.location.href} />
            <input
              className={classes.FileInput}
              type="file"
              name="multiple-files"
              id="inputMultipleFile"
              required
              multiple
            />
            <Button type="submit">Upload</Button>
          </form>
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Upload AJAX" />
        <CardContent>
          <form className={classes.Form} onSubmit={handleUploadSingle}>
            <Typography variant="h6">Upload single</Typography>
            <input
              className={classes.FileInput}
              type="file"
              name="ajaxSingle"
              ref={inputSingleRef}
              required
            />
            <Button type="submit">Upload</Button>
            {uploadSingleResult && (
              <pre>{JSON.stringify(uploadSingleResult)}</pre>
            )}
          </form>

          <form className={classes.Form} onSubmit={handleUploadMultiple}>
            <Typography variant="h6">Upload multiple</Typography>
            <input
              className={classes.FileInput}
              type="file"
              name="ajaxSingle"
              ref={inputMultipleRef}
              required
              multiple
            />
            <Button type="submit">Upload</Button>
            {uploadMultipleResult && (
              <pre>{JSON.stringify(uploadMultipleResult)}</pre>
            )}
          </form>
        </CardContent>
      </Card>
    </Question>
  );
};

const Upload1 = memo(Upload1Component);
Upload1.displayName = 'Upload1';
export default Upload1;
