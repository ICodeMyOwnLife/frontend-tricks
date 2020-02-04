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
   * Returns a reference to the first object with the specified value of the ID or NAME attribute.
   * @param elementId String that specifies the ID value. Case-insensitive.
   */
  getElementById(elementId: string): HTMLElement | null;
}`}
        </CodeViewer>

        <CodeViewer language="typescript">
          const element = document.getElementById('btnSubmit');
        </CodeViewer>

        <p>
          <b>
            <code>getElementById()</code> is only available as a method of the
            global <code>document</code> object
          </b>
          , and not available as a method on all element objects in the DOM.
          Because ID values must be unique throughout the entire document, there
          is no need for "local" versions of the function.
        </p>

        <p>
          <b>
            The <code>id</code> parameter is case-sensitive
          </b>
          , so <code>document.getElementById("Main")</code> will return{' '}
          <code>null</code> instead of the element{' '}
          <code>{`<div id="main">`}</code> because "M" and "m" are different for
          the purposes of this method.
        </p>

        <p>
          <b>
            Elements not in the document are not searched by{' '}
            <code>getElementById()</code>
          </b>
          . When creating an element and assigning it an ID, you have to insert
          the element into the document tree with{' '}
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
   * Gets a collection of objects based on the value of the NAME or ID attribute.
   * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
   */
  getElementsByName(elementName: string): NodeListOf<HTMLElement>;
}`}
        </CodeViewer>

        <p>
          <b>
            The returned <code>NodeList</code> is live
          </b>
          , meaning it automatically updates as new elements with the same name
          are added to/removed from the document.
        </p>

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
  {
    question: (
      <span>
        What are <code>Document.getElementsByTagName</code> and{' '}
        <code>Element.getElementsByTagName</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>getElementsByTagName</code> method of <code>Document</code>{' '}
          interface returns an <code>HTMLCollection</code> of elements with the
          given tag name. The complete document is searched, including the root
          node.
        </p>

        <p>
          The <code>Element.getElementsByTagName()</code> method returns an
          <code>HTMLCollection</code> of elements with the given tag name. All
          descendants of the specified element are searched, but not the element
          itself.
        </p>

        <CodeViewer language="typescript">
          {`interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, XPathEvaluatorBase, GlobalEventHandlers, DocumentAndElementEventHandlers {
  /**
   * Retrieves a collection of objects based on the specified element name.
   * @param name Specifies the name of an element.
   */
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
}

interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, InnerHTML, Animatable {
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
}`}
        </CodeViewer>

        <p>
          The returned <code>HTMLCollection</code> is live, meaning that it
          updates itself automatically to stay in sync with the DOM tree without
          having to call <code>getElementsByTagName()</code> again.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.getElementsByTagName()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName`,
      },
      {
        name: `[MDN] Element.getElementsByTagName()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName`,
      },
    ],
  },
  {
    question: (
      <span>
        What are <code>Document.getElementsByClassName</code> and{' '}
        <code>Element.getElementsByClassName</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>getElementsByClassName</code> method of{' '}
          <code>Document</code> interface returns a live{' '}
          <code>HTMLCollection</code> of all child elements which have all of
          the given class names, including the root node.
        </p>

        <p>
          The <code>Element</code> method <code>getElementsByClassName</code>{' '}
          returns a live <code>HTMLCollection</code> which contains every
          descendant element which has the specified class name.
        </p>

        <CodeViewer language="typescript">
          {`interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, XPathEvaluatorBase, GlobalEventHandlers, DocumentAndElementEventHandlers {
  /**
   * Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
   */
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
}

interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, InnerHTML, Animatable {
  /**
   * Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
   */
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.getElementsByClassName()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName`,
      },
      {
        name: `[MDN] Element.getElementsByClassName()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName`,
      },
    ],
  },
];

export default questions;
