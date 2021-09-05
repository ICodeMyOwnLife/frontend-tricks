import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import BlobReadingSection from './BlobReadingSection';
import questions from './questions';
import {
  readBlobText,
  readBlobArrayBuffer,
  readBlobStream,
  readResponseText,
  readResponseArrayBuffer,
  readResponseStream,
} from './utils';

export const Blob1Component: FC = () => (
  <QuestionPage title="Blob 1" questions={questions}>
    <BlobReadingSection
      id="blobText"
      onBlobChange={readBlobText}
      title="Read Blob Text"
    />
    <BlobReadingSection
      id="blobArrayBuffer"
      onBlobChange={readBlobArrayBuffer}
      title="Read Blob Array Buffer"
    />
    <BlobReadingSection
      id="blobStream"
      onBlobChange={readBlobStream}
      title="Read Blob Stream"
    />
    <BlobReadingSection
      id="responseText"
      onBlobChange={readResponseText}
      title="Read Response Text"
    />
    <BlobReadingSection
      id="responseArrayBuffer"
      onBlobChange={readResponseArrayBuffer}
      title="Read Response Array Buffer"
    />
    <BlobReadingSection
      id="responseStream"
      onBlobChange={readResponseStream}
      title="Read Response Stream"
    />
  </QuestionPage>
);

const Blob1 = memo(Blob1Component);
Blob1.displayName = 'Blob1';
export default Blob1;
