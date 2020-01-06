import React, { FC, memo, useState } from 'react';
import QuestionPage from 'components/QuestionPage';
import Button from 'components/Button';
import NumberInput from 'components/NumberInput';
import DynamicDownloadButton from './DynamicDownloadButton';
import {
  urlAttachment,
  urlInline,
  urlDynamic,
  downloadWithFetch,
  downloadWithRequest,
  downloadWithAxios,
  saveFileManually,
  saveFileWithFileSaver,
} from './hooks';
import questions from './questions';
import StaticDownloadButton from './StaticDownloadButton';

export const Download1Component: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <QuestionPage title="Download 1" questions={questions}>
      <div>
        <div>
          <h3>Attachment Download</h3>
          <Button
            className="mr-2"
            href={urlAttachment}
            target="_blank"
            download="1.png"
          >
            Download Link
          </Button>

          <StaticDownloadButton
            className="mr-2"
            url={urlAttachment}
            downloadFile={downloadWithAxios}
            saveFile={saveFileManually}
          >
            Axios Download
          </StaticDownloadButton>

          <StaticDownloadButton
            className="mr-2"
            url={urlAttachment}
            downloadFile={downloadWithFetch}
            saveFile={saveFileManually}
          >
            Fetch Download
          </StaticDownloadButton>

          <StaticDownloadButton
            className="mr-2"
            url={urlAttachment}
            downloadFile={downloadWithRequest}
            saveFile={saveFileManually}
          >
            Request Download
          </StaticDownloadButton>
        </div>

        <div>
          <h3>Inline Download</h3>
          <Button
            className="mr-2"
            href={urlInline}
            target="_blank"
            download="1.md"
          >
            Download Link
          </Button>

          <StaticDownloadButton
            className="mr-2"
            url={urlInline}
            downloadFile={downloadWithAxios}
            saveFile={saveFileWithFileSaver}
          >
            Axios Download
          </StaticDownloadButton>

          <StaticDownloadButton
            className="mr-2"
            url={urlInline}
            downloadFile={downloadWithFetch}
            saveFile={saveFileWithFileSaver}
          >
            Fetch Download
          </StaticDownloadButton>

          <StaticDownloadButton
            className="mr-2"
            url={urlInline}
            downloadFile={downloadWithRequest}
            saveFile={saveFileWithFileSaver}
          >
            Request Download
          </StaticDownloadButton>
        </div>

        <div>
          <h3>Dynamic Download</h3>
          <form action={urlDynamic} method="GET">
            <NumberInput
              id="count"
              name="count"
              label="Count"
              value={count}
              onChange={setCount}
            />
            <div>
              <Button className="mr-2" type="submit">
                Submit
              </Button>
            </div>

            <div>
              <h6>Save File Manually</h6>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithAxios}
                saveFile={saveFileManually}
              >
                Axios Download
              </DynamicDownloadButton>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithFetch}
                saveFile={saveFileManually}
              >
                Fetch Download
              </DynamicDownloadButton>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithRequest}
                saveFile={saveFileManually}
              >
                Request Download
              </DynamicDownloadButton>
            </div>

            <div>
              <h6>Use Library</h6>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithAxios}
                saveFile={saveFileWithFileSaver}
              >
                Axios Download
              </DynamicDownloadButton>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithFetch}
                saveFile={saveFileWithFileSaver}
              >
                Fetch Download
              </DynamicDownloadButton>
              <DynamicDownloadButton
                className="mr-2"
                count={count}
                downloadFile={downloadWithRequest}
                saveFile={saveFileWithFileSaver}
              >
                Request Download
              </DynamicDownloadButton>
            </div>
          </form>
        </div>
      </div>
    </QuestionPage>
  );
};

const Download1 = memo(Download1Component);
Download1.displayName = 'Download1';
export default Download1;
