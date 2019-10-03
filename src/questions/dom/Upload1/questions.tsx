import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to upload file(s) using a <code>form</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          Use an <code>input</code> with <code>type</code> attribute set to{' '}
          <code>file</code> inside a <code>form</code> with <code>enctype</code>{' '}
          attribute set to <code>multipart/form-data</code> and{' '}
          <code>method</code> attribute set to <code>POST</code>
        </p>

        <Code language="tsx">
          {`<form action={url} method="POST" encType="multipart/form-data">
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
</form>`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] how to upload a file to my server using html?`,
        url: `https://stackoverflow.com/questions/5628011/how-to-upload-a-file-to-my-server-using-html`,
      },
      {
        name: `[MDN] <form>`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype`,
      },
    ],
  },
  {
    question: <span>How to upload file(s) using AJAX requests?</span>,
    answer: <div />,
    references: [
      {
        name: `[MDN] FormData.append()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/append`,
      },
      {
        name: `[MDN] XMLHttpRequest.send()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send`,
      },
    ],
  },
];

export default questions;
