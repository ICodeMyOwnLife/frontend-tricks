import React, { FC, memo, useState } from 'react';
import Question, { QuestionInfo } from 'components/Question';
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
import classes from './styles.module.scss';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to download file using anchor tag <code>{'<a>'}</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          Setting <code>href</code> and <code>download</code> attribute
        </p>
        <pre>
          <code>
            {
              '<a href="http://localhost:1333/static/1.png" download="1.png">Download<a/>'
            }
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[MDN] <a>: The Anchor element`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download`,
      },
      {
        name: `[stack overflow] how to download file using anchor tag <a>`,
        url: `https://stackoverflow.com/questions/21607309/how-to-download-file-using-anchor-tag-a`,
      },
      {
        name: `[stack overflow] How can I create download link in HTML?`,
        url: `https://stackoverflow.com/questions/2793751/how-can-i-create-download-link-in-html`,
      },
    ],
  },
  {
    question: `How to download file using AJAX request?`,
    answer: (
      <div>
        <p>
          Creating an <code>objectURL</code> by calling{' '}
          <code>URL.createObjectURL(blob)</code> and use it to set{' '}
          <code>href</code> of an <code>a</code> element. After using{' '}
          <code>objectURL</code> we can revoke it by calling{' '}
          <code>URL.revokeObjectURL(objectURL)</code>
        </p>
        <pre>
          <code>
            {`const download = ({
  blob,
  contentType,
  contentDisposition,
}: {
  blob: Blob;
  contentType?: string | null;
  contentDisposition?: string | null;
}) => {
  const extensionMatch = contentType && contentType.match(/\\/(\\w+)/);
  const extension = (extensionMatch && extensionMatch[1]) || 'txt';
  const filenameMatch =
    contentDisposition && contentDisposition.match(/filename="(.+)"/);
  const filename =
    (filenameMatch && filenameMatch[1]) || \`unnamed.$\{extension}\`;
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.style.display = 'none';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(objectUrl);
  document.body.removeChild(link);
};`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[stack overflow] download file using an ajax request`,
        url: `https://stackoverflow.com/questions/20830309/download-file-using-an-ajax-request`,
      },
      {
        name: `[stack overflow] Download a file by jQuery.Ajax`,
        url: `https://stackoverflow.com/questions/4545311/download-a-file-by-jquery-ajax`,
      },
      {
        name: `[Medium] Download Files With Ajax`,
        url: `https://medium.com/tyrone-tudehope/download-files-with-ajax-74d371f548f3`,
      },
      {
        name: `[MDN] URL.createObjectURL()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL`,
      },
      {
        name: `[MDN] URL.revokeObjectURL()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL`,
      },
      {
        name: `[MDN] Fetch API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`,
      },
      {
        name: `[MDN] XMLHttpRequest`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,
      },
      {
        name: `[MDN] Blob`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Blob`,
      },
    ],
  },
];

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
