import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What is <code>Document.getElementById()</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>Document</code> method <code>getElementById()</code> returns
          an <code>Element</code> object representing the element whose id
          property matches the specified string or <code>null</code> if no
          matching element was found.
        </p>

        <CodeViewer language="typescript">
          {`interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, XPathEvaluatorBase, GlobalEventHandlers, DocumentAndElementEventHandlers {
    /**
     * Returns a reference to the first object with the specified value of the ID attribute.
     * @param elementId String that specifies the ID value. Case-sensitive.
     */
    getElementById(elementId: string): HTMLElement | null;
}`}
        </CodeViewer>

        <p>
          <code>getElementById()</code> is only available as a method of the
          global <code>document</code> object, and not available as a method on
          all element objects in the DOM. Because ID values must be unique
          throughout the entire document, there is no need for "local" versions
          of the function.
        </p>

        <p>
          The <code>id</code> parameter is case-sensitive, so{' '}
          <code>document.getElementById("Main")</code> will return{' '}
          <code>null</code> instead of the element{' '}
          <code>{`<div id="main">`}</code> because "M" and "m" are different for
          the purposes of this method.
        </p>

        <p>
          Elements not in the document are not searched by{' '}
          <code>getElementById()</code>. When creating an element and assigning
          it an ID, you have to insert the element into the document tree with{' '}
          <code>Node.insertBefore()</code> or a similar method before you can
          access it with <code>getElementById()</code>
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.getElementById()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById`,
      },
    ],
  },
];

export default questions;
