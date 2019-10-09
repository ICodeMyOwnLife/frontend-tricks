import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: 'How to stop an input field in a form from being submitted?',
    answer: (
      <div>
        <p>
          Using inputs without <code>name</code> attribute
        </p>
        <CodeViewer language="markup">
          {`<!-- This input value will be included in form data because its name attribute is set -->
<input type="text" id="text" name="text" />

<!-- This input value will not be included in form data because its name attribute is not set -->
<input type="number" id="number" />
`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] Stop an input field in a form from being submitted`,
        url: `https://stackoverflow.com/questions/3008035/stop-an-input-field-in-a-form-from-being-submitted`,
      },
      {
        name: `[Stack Overflow] How do I exclude certain form fields upon submission of the form without disabling the field`,
        url: `https://stackoverflow.com/questions/4869987/how-do-i-exclude-certain-form-fields-upon-submission-of-the-form-without-disabli/20877611`,
      },
    ],
  },
  {
    question: 'How to get form data?',
    answer: (
      <div>
        <p>
          Using <code>FormData</code>
        </p>
        <CodeViewer language="typescript">
          {`const formData = new FormData(form);
const searchParams = new URLSearchParams(formData);
console.log(searchParams.toString());`}
        </CodeViewer>
        <p>
          Using <code>jQuery.serialize()</code> or{' '}
          <code>jQuery.serializeArray()</code>
        </p>
        <CodeViewer language="typescript">
          {`console.log($form.serialize());
console.log($form.serializeArray());`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] FormData`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/FormData`,
      },
      {
        name: `[MDN] Using FormData Objects`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects`,
      },
      {
        name: `[jQuery] .serialize()`,
        url: `https://api.jquery.com/serialize/`,
      },
      {
        name: `[jQuery] .serializeArray()`,
        url: `https://api.jquery.com/serializeArray/`,
      },
      {
        name: `[Stack Overflow] How can I get form data with JavaScript/jQuery?`,
        url: `https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery`,
      },
      {
        name: `[Stack Overflow] JavaScript - Getting HTML form values`,
        url: `https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values`,
      },
    ],
  },
];

export default questions;
