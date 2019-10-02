import React, { FC, memo } from 'react';
import Question from 'components/Question';
import { BASE_URL } from 'constants/common';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import questions from './questions';
import useStyles from './styles';
import { useUploadSingle, useUploadMultiple } from './hooks';
import AjaxUpload from './AjaxUpload';
import FormUpload from './FormUpload';

export const Upload1Component: FC = () => {
  const classes = useStyles();
  const {
    handleUploadSingle,
    inputSingleRef,
    uploadSingleStatus,
  } = useUploadSingle();
  const {
    handleUploadMultiple,
    inputMultipleRef,
    uploadMultipleStatus,
  } = useUploadMultiple();

  return (
    <Question title="Upload 1" questions={questions}>
      <Card className={classes.Section}>
        <CardHeader title="Upload Form" />
        <CardContent>
          <FormUpload
            title="Upload single"
            fieldName="single-file"
            url={`${BASE_URL}/upload-single`}
            multiple={false}
          />
          <FormUpload
            title="Upload multiple"
            fieldName="multiple-files"
            url={`${BASE_URL}/upload-multiple`}
            multiple
          />
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Upload AJAX" />
        <CardContent>
          <AjaxUpload
            title="Upload single"
            inputRef={inputSingleRef}
            handleUpload={handleUploadSingle}
            loading={uploadSingleStatus.loading}
            progressPercentage={uploadSingleStatus.progressPercentage}
            result={uploadSingleStatus.result}
            multiple={false}
          />
          <AjaxUpload
            title="Upload multiple"
            inputRef={inputMultipleRef}
            handleUpload={handleUploadMultiple}
            loading={uploadMultipleStatus.loading}
            progressPercentage={uploadMultipleStatus.progressPercentage}
            result={uploadMultipleStatus.result}
            multiple
          />
        </CardContent>
      </Card>
    </Question>
  );
};

const Upload1 = memo(Upload1Component);
Upload1.displayName = 'Upload1';
export default Upload1;
