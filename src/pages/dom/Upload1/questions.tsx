import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

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

        <CodeViewer language="markup">
          {`<form
  action="http://127.0.0.1:1333/upload-single"
  method="POST"
  enctype="multipart/form-data"
>
  <input type="file" name="single-file" required="" />
  <input
    type="hidden"
    name="redirect"
    value="http://localhost:3000/dom/upload"
  />

  <input
    aria-invalid="false"
    name="description"
    required=""
    type="text"
    value=""
  />
  <button type="submit">Upload</button>
</form>`}
        </CodeViewer>
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
    answer: (
      <div>
        <p>
          Create a <code>FormData</code> object and send it as body of a request
        </p>
        <CodeViewer language="typescript">
          {`const upload = ({
  formData,
  url,
  setStatus,
}: {
  formData: FormData;
  url: string;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener(
    'progress',
    e => {
      if (e.lengthComputable) {
        console.log(e.loaded);
        const progressPercentage = Math.round((e.loaded * 100) / e.total);
        setStatus(status => ({ ...status, progressPercentage }));
      }
    },
    false,
  );
  xhr.addEventListener(
    'load',
    () =>
      setStatus({
        loading: false,
        progressPercentage: 100,
        result: JSON.parse(xhr.response),
      }),
    false,
  );
  xhr.addEventListener('error', () => {
    const error = xhr.responseText || 'UNKNOWN ERROR';
    setStatus({ loading: false, error, progressPercentage: 0 });
  });
  xhr.open('POST', url, true);
  xhr.timeout = 2000;
  setStatus({ loading: true, progressPercentage: 0 });
  xhr.send(formData);
};

export const uploadWholeForm = ({
  form,
  url,
  setStatus,
}: {
  form: HTMLFormElement | null | undefined;
  url: string;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
  if (!form) return;

  const formData = new FormData(form);
  upload({ formData, url, setStatus });
};

export const uploadFilesOnly = ({
  input,
  url,
  fieldName,
  multiple,
  setStatus,
}: {
  input: HTMLInputElement | undefined | null;
  url: string;
  fieldName: string;
  multiple: boolean;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
  const files = input && input.files;

  if (!files) return;

  const count = multiple ? files.length : Math.max(1, files.length);
  const formData = new FormData();

  for (let i = 0; i < count; ++i) {
    const file = files[i];
    formData.append(fieldName, file, file.name);
  }

  upload({ formData, url, setStatus });
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Ridiculously sComponente Ajax uploads with FormData`,
        url: `https://thoughtbot.com/blog/ridiculously-sComponente-ajax-uploads-with-formdata`,
      },
      {
        name: `Uploading Files with AJAX`,
        url: `https://blog.teamtreehouse.com/uploading-files-ajax`,
      },
      {
        name: `[MDN] Uploading a user-selected file`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Uploading_a_user-selected_file`,
      },
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
