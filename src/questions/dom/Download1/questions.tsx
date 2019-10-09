import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

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
        <CodeViewer language="markup">
          {
            '<a href="http://localhost:1333/static/1.png" download="1.png">Download<a/>'
          }
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] <a>: The Anchor element`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download`,
      },
      {
        name: `[Stack Overflow] how to download file using anchor tag <a>`,
        url: `https://stackoverflow.com/questions/21607309/how-to-download-file-using-anchor-tag-a`,
      },
      {
        name: `[Stack Overflow] How can I create download link in HTML?`,
        url: `https://stackoverflow.com/questions/2793751/how-can-i-create-download-link-in-html`,
      },
    ],
  },
  {
    question: `How to download file using AJAX request?`,
    answer: (
      <div>
        <p>
          <b>Saving file manually:</b> Creating an <code>objectURL</code> by
          calling <code>URL.createObjectURL(blob)</code> and use it to set{' '}
          <code>href</code> of an <code>a</code> element. After using{' '}
          <code>objectURL</code> we can revoke it by calling{' '}
          <code>URL.revokeObjectURL(objectURL)</code>
        </p>

        <CodeViewer language="tsx">
          {`const saveFileManually: SaveFileFunction = ({
  blob,
  contentType,
  contentDisposition,
}) => {
  const filename = createFilename({ contentType, contentDisposition });
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
        </CodeViewer>

        <p>
          Using library <code>FileSaver.js</code>
        </p>

        <CodeViewer language="tsx">
          {`import { saveAs } from 'file-saver';

saveAs(blob, filename);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] download file using an ajax request`,
        url: `https://stackoverflow.com/questions/20830309/download-file-using-an-ajax-request`,
      },
      {
        name: `[Stack Overflow] Download a file by jQuery.Ajax`,
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
      {
        name: `[GitHub] axios`,
        url: `https://github.com/axios/axios`,
      },
      {
        name: `[Medium] Handle Blobs requests with Axios the right way`,
        url: `https://medium.com/@fakiolinho/handle-blobs-requests-with-axios-the-right-way-bb905bdb1c04`,
      },
      {
        name: `[GitHub] FileSaver.js`,
        url: `https://github.com/eligrey/FileSaver.js`,
      },
    ],
  },
];

export default questions;
