import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to live edit elements and styles?`,
    answer: (
      <div>
        <p>
          Set the <code>contenteditable</code> attribute on nearly any HTML
          element to make it editable
        </p>
        <Code language="markup">
          {`<div class="EditableText" contenteditable="true">
  <p>Lorem ipsum dolor sit amet ...</p>
</div>`}
        </Code>
        <p>
          For <code>style</code> tag, we have to make it appear using{' '}
          <code>display: block</code>
        </p>
        <Code language="scss">
          {`.StyleEditor {
  display: block;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: bold;
  color: #ecffca;
  background-color: black;
  white-space: pre;
  caret-color: aquamarine;
}`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] contenteditable`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable`,
      },
      {
        name: `[MDN] Making content editable`,
        url: `https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content`,
      },
      {
        name: `[Medium] Make a HTML element editable with contenteditable`,
        url: `https://medium.com/@samanthaming/make-a-html-element-editable-with-contenteditable-abe7358640e`,
      },
      {
        name: `[Stack Overflow] Why does React warn against an contentEditable component having children managed by React?`,
        url: `https://stackoverflow.com/questions/49639144/why-does-react-warn-against-an-contenteditable-component-having-children-managed`,
      },
    ],
  },
];

export default questions;
