/* eslint-disable react/no-unescaped-entities */
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
   * Returns an Element object representing the element whose id property matches the specified string.
   * @param ID The ID of the element to locate. The ID is case-sensitive string which is unique within the document; only one element may have any given ID.
   * @returns An Element object describing the DOM element object matching the specified ID, or null if no matching element was found in the document.
   */
  getElementById(ID: string): HTMLElement | null;
}`}
        </CodeViewer>

        <CodeViewer language="typescript">
          const element = document.getElementById('btnSubmit');
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
  {
    question: (
      <span>
        What is <code>Document.getElementsByName()</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>getElementsByName()</code> method of the{' '}
          <code>Document</code> object returns a <code>NodeList</code>{' '}
          Collection of elements with a given <code>name</code> in the document.
        </p>

        <CodeViewer language="typescript">
          {`interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, XPathEvaluatorBase, GlobalEventHandlers, DocumentAndElementEventHandlers {
  /**
   * Returns a NodeList Collection of elements with a given name in the document.
   * @param name The value of the name attribute of the element(s).
   * @returns A live NodeList Collection, meaning it automatically updates as new elements with the same name are added to/removed from the document.
   */
  getElementsByName(name: string): NodeListOf<HTMLElement>;
}`}
        </CodeViewer>

        <CodeViewer language="typescript">
          const elements = document.getElementsByName('username');
        </CodeViewer>

        <p>
          The <code>name</code> attribute can only be applied in (X)HTML
          documents.
        </p>

        <p>
          The returned <code>NodeList</code> Collection contains all elements
          with the given name, such as <code>{`<meta>`}</code>,{' '}
          <code>{`<object>`}</code>, and even elements which do not support the
          name attribute at all.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.getElementsByName()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName`,
      },
    ],
  },
];

export default questions;
