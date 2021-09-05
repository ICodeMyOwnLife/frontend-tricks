import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import { BASE_URL } from 'constants/common';
import { Card, CardHeader, CardContent, TextField } from '@material-ui/core';
import Uploader from './Uploader';
import questions from './questions';
import useStyles from './styles';
import {
  useUploadSingle,
  useUploadMultiple,
  useUploadWholeForm,
} from './hooks';

const URL_UPLOAD_SINGLE = `${BASE_URL}/upload-single`;
const URL_UPLOAD_MULTIPLE = `${BASE_URL}/upload-multiple`;
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

  const {
    handleUploadWholeForm,
    formRef,
    uploadWholeFormStatus,
  } = useUploadWholeForm({ url: URL_UPLOAD_MULTIPLE });

  return (
    <QuestionPage title="Upload 1" questions={questions}>
      <Card className={classes.Section}>
        <CardHeader title="Form Upload" />
        <CardContent>
          <Uploader
            title="Upload single"
            fieldName="single-file"
            url={URL_UPLOAD_SINGLE}
          >
            <input type="hidden" name="redirect" value={window.location.href} />
            <TextField
              className={classes.UploaderInput}
              label="Description"
              name="description"
              required
            />
          </Uploader>

          <Uploader
            title="Upload multiple"
            fieldName="multiple-files"
            url={URL_UPLOAD_MULTIPLE}
            multiple
          >
            <input type="hidden" name="redirect" value={window.location.href} />
            <TextField
              className={classes.UploaderInput}
              label="Category"
              name="category"
              required
            />
          </Uploader>
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="AJAX Upload" />
        <CardContent>
          <Uploader
            title="Upload single"
            inputRef={inputSingleRef}
            handleSubmit={handleUploadSingle}
            status={uploadSingleStatus}
          />
          <Uploader
            title="Upload multiple"
            inputRef={inputMultipleRef}
            handleSubmit={handleUploadMultiple}
            status={uploadMultipleStatus}
            multiple
          />
          <Uploader
            title="Upload whole form"
            formRef={formRef}
            fieldName="multiple-files"
            handleSubmit={handleUploadWholeForm}
            status={uploadWholeFormStatus}
            multiple
          >
            <TextField
              className={classes.UploaderInput}
              type="text"
              name="name"
              label="Name"
              required
            />
            <TextField
              className={classes.UploaderInput}
              type="number"
              name="value"
              label="Value"
              required
            />
          </Uploader>
        </CardContent>
      </Card>
    </QuestionPage>
  );
};

const Upload1 = memo(Upload1Component);
Upload1.displayName = 'Upload1';
export default Upload1;
