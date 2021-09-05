/* eslint-disable react/no-unescaped-entities */
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What is the shortcut for <code>querySelector()</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          <code>$(selector, [startNode])</code>
        </p>
        <p>
          <code>$(selector)</code> returns the reference to the first DOM
          element with the specified CSS selector. This function is an alias for
          the <code>document.querySelector()</code> function.
        </p>
        <p>
          This function also supports a second parameter, <code>startNode</code>
          , that specifies an 'element' or Node from which to search for
          elements. The default value of this parameter is <code>document</code>
          .
        </p>
        <CodeViewer language="javascript">
          {`$('a');
$('code', $('p'));`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#queryselector`,
      },
    ],
  },
  {
    question: (
      <span>
        What is the shortcut for <code>querySelectorAll()</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          <code>$$(selector, [startNode])</code>
        </p>
        <p>
          <code>$$(selector)</code> returns an array of elements that match the
          given CSS selector. This command is equivalent to calling
          <code>document.querySelectorAll()</code>.
        </p>
        <p>
          This function also supports a second parameter, <code>startNode</code>
          , that specifies an element or Node from which to search for elements.
          The default value of this parameter is <code>document</code>.
        </p>
        <CodeViewer language="javascript">
          {`$$('.MuiBox-root');
$$('.MuiTypography-root', $('.MuiBox-root'));`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#queryselectorall`,
      },
    ],
  },
  {
    question: 'What is the shortcut for query elements using XPath?',
    answer: (
      <div>
        <p>
          <code>$x(path, [startNode])</code>
        </p>
        <p>
          <code>$x(path)</code> returns an array of DOM elements that match the
          given XPath expression.
        </p>
        <p>
          Similar to the other selector functions, <code>$x(path)</code> has an
          optional second parameter, <code>startNode</code>, that specifies an
          element or Node from which to search for elements.
        </p>
        <CodeViewer language="javascript">
          {`$x('//a[contains(., "Development")]');
$x('.//*[contains(text(), "Development")]', document.head);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#xpath`,
      },
    ],
  },
  {
    question: 'What is the shortcut for referencing last inspected element(s)?',
    answer: (
      <div>
        <p>
          <code>$0</code> - <code>$4</code>
        </p>
        <p>
          The <code>$0</code>, <code>$1</code>, <code>$2</code>, <code>$3</code>{' '}
          and <code>$4</code> commands work as a historical reference to the
          last five DOM elements inspected within the Elements panel or the last
          five JavaScript heap objects selected in the Profiles panel.{' '}
          <code>$0</code> returns the most recently selected element or
          JavaScript object, <code>$1</code> returns the second most recently
          selected one, and so on.
        </p>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#dom`,
      },
    ],
  },
  {
    question: 'What is the shortcut for retrieving last evaluated result?',
    answer: (
      <div>
        <p>
          <code>$_</code>
        </p>
        <p>
          <code>$_</code> returns the value of the most recently evaluated
          expression.
        </p>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#recent`,
      },
    ],
  },
  {
    question: `How to copy the text representing an object to clipboard?`,
    answer: (
      <div>
        <p>
          <code>copy(object)</code>
        </p>
        <p>
          <code>copy(object)</code> copies a string representation of the
          specified object to the clipboard.
        </p>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#copy`,
      },
    ],
  },
  {
    question: `How to open Elements panel and view a specified element?`,
    answer: (
      <div>
        <p>
          <code>inspect(object/function)</code>
        </p>
        <p>
          <code>inspect(object/function)</code> opens and selects the specified
          element or object in the appropriate panel: either the Elements panel
          for DOM elements or the Profiles panel for JavaScript heap objects.
        </p>
        <p>
          When passing a function to inspect, the function opens the document up
          in the Sources panel for you to inspect.
        </p>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] Console Utilities API Reference`,
        url: `https://developers.google.com/web/tools/chrome-devtools/console/utilities#inspect`,
      },
    ],
  },
];

export default questions;
