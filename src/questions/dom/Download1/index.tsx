import React, { FC, memo, useState } from 'react';
import Question from 'components/Question';
import Button from 'components/Button';
import NumberInput from 'components/NumberInput';
import {
  urlAttachment,
  handleAttachmentDownload,
  urlInline,
  handleInlineDownload,
  urlDynamic,
  useHandleDynamicDownload,
  downloadWithFetch,
  downloadWithRequest,
} from './hooks';
import questions from './questions';
import classes from './styles.module.scss';

export const Download1Impl: FC = () => {
  const [count, setCount] = useState(0);
  const handleFetchDownload = useHandleDynamicDownload({
    count,
    ajaxDownload: downloadWithFetch,
  });
  const handleRequestDownload = useHandleDynamicDownload({
    count,
    ajaxDownload: downloadWithRequest,
  });

  return (
    <Question title="Download 1" questions={questions}>
      <div>
        <div>
          <h5>Attachment Download</h5>
          <Button
            className={classes.Button}
            href={urlAttachment}
            target="_blank"
            download="1.png"
          >
            Download
          </Button>
          <Button
            className={classes.Button}
            type="button"
            onClick={handleAttachmentDownload}
          >
            AJAX Download
          </Button>
        </div>

        <div>
          <h5>Inline Download</h5>
          <Button
            className={classes.Button}
            href={urlInline}
            target="_blank"
            download="1.md"
          >
            Download
          </Button>
          <Button
            className={classes.Button}
            type="button"
            onClick={handleInlineDownload}
          >
            AJAX Download
          </Button>
        </div>

        <div>
          <h5>Dynamic Download</h5>
          <form action={urlDynamic} method="GET">
            <NumberInput
              id="count"
              name="count"
              label="Count"
              value={count}
              onChange={setCount}
            />
            <div>
              <Button className={classes.Button} type="submit">
                Download
              </Button>
              <Button className={classes.Button} onClick={handleFetchDownload}>
                Fetch Download
              </Button>
              <Button
                className={classes.Button}
                onClick={handleRequestDownload}
              >
                Request Download
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Question>
  );
};

const Download1 = memo(Download1Impl);
Download1.displayName = 'Download1';
export default Download1;
