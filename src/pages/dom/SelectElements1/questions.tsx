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
  {
    question: (
      <span>
        What are <code>Document.querySelector</code> and{' '}
        <code>Element.querySelector</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>Document</code> method <code>querySelector()</code> returns
          the first <code>Element</code> within the document that matches the
          specified selector, or group of selectors. If no matches are found,
          <code>null</code> is returned.
        </p>

        <p>
          The <code>querySelector()</code> method of the <code>Element</code>{' '}
          interface returns the first element that is a descendant of the
          element on which it is invoked that matches the specified group of
          selectors.
        </p>

        <CodeViewer language="typescript">
          {`interface ParentNode {
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.querySelector()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector`,
      },
      {
        name: `[MDN] Element.querySelector()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector`,
      },
      {
        name: `[MDN] ParentNode.querySelector()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelector`,
      },
    ],
  },
  {
    question: (
      <span>
        What are <code>Document.querySelectorAll</code> and{' '}
        <code>Element.querySelectorAll</code> for?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>Document</code> method <code>querySelectorAll()</code>{' '}
          returns a static (not live) <code>NodeList</code> representing a list
          of the document's elements that match the specified group of
          selectors.
        </p>

        <p>
          The <code>Element</code> method <code>querySelectorAll()</code>{' '}
          returns a static (not live) <code>NodeList</code> representing a list
          of elements matching the specified group of selectors which are
          descendants of the element on which the method was called.
        </p>

        <CodeViewer language="typescript">
          {`interface ParentNode {
  /**
   * Returns all element descendants of node that match selectors.
   */
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.querySelectorAll()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll`,
      },
      {
        name: `[MDN] Element.querySelectorAll()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll`,
      },
      {
        name: `[MDN] ParentNode.querySelectorAll()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll`,
      },
    ],
  },
  {
    question: `How to query nodes using XPath?`,
    answer: (
      <div>
        <p>
          Use <code>document.evaluate()</code>
        </p>
        <CodeViewer language="typescript">
          {`(container, text) => {
      const nodes: Node[] = [];
      let node: Node | null;
      const result = document.evaluate(
        text,
        container,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      );
      // eslint-disable-next-line no-cond-assign
      while ((node = result.iterateNext())) {
        nodes.push(node);
      }
      return nodes;
    }`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Document.evaluate()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate`,
      },
      {
        name: `[MDN] Introduction to using XPath in JavaScript`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript`,
      },
      {
        name: `[Stack Overflow] Javascript .querySelector find <div> by innerTEXT`,
        url: `https://stackoverflow.com/questions/37098405/javascript-queryselector-find-div-by-innertext#answer-37098628`,
      },
    ],
  },
  {
    question: (
      <span>
        What are the differences between <code>ParentNode.children</code> and{' '}
        <code>Node.childNodes</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          The <code>ParentNode</code> property <code>children</code> is a
          read-only property that returns a live <code>HTMLCollection</code>{' '}
          which contains all of the child <code>elements</code> of the node upon
          which it was called.
        </p>
        <p>
          The <code>Node.childNodes</code> read-only property returns a live
          <code>NodeList</code> of child <code>nodes</code> of the given element
          where the first child node is assigned index 0.
        </p>
        <p>
          <code>childNodes</code> includes all child nodes—including non-element
          nodes like text and comment nodes. To get a collection of only
          elements, use <code>ParentNode.children</code> instead.
        </p>

        <CodeViewer language="typescript">
          {`interface ParentNode {
  /**
   * Returns the child elements.
   */
  readonly children: HTMLCollection;
}

interface Node extends EventTarget {
  /**
   * Returns the children.
   */
  readonly childNodes: NodeListOf<ChildNode>;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] ParentNode.children`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`,
      },
      {
        name: `[MDN] Node.childNodes`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`,
      },
    ],
  },
  {
    question: `How to query ancestor elements?`,
    answer: (
      <div>
        <p>
          Use <code>Element.closest</code>
        </p>

        <p>
          Starting with the <code>Element</code> itself, the{' '}
          <code>closest()</code> method traverses parents (heading toward the
          document root) of the <code>Element</code> until it finds a node that
          matches the provided <code>selectorString</code>. Will return itself
          or the matching ancestor. If no such element exists, it returns{' '}
          <code>null</code>.
        </p>

        <CodeViewer language="typescript">
          {`interface Element extends Node, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slotable {
  /**
   * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
   */
  closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
  closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
  closest<E extends Element = Element>(selector: string): E | null;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Element.closest()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/closest`,
      },
    ],
  },
];

export default questions;
