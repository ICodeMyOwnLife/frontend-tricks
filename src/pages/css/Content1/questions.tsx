import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to insert some content before or after an element?`,
    answer: (
      <div>
        <p>Use string content:</p>
        <CodeViewer language="scss">
          {`.FormGroup {
  &.required {
    .FormLabel::after {
      content: ' *';
    }
  }
}`}
        </CodeViewer>

        <p>Use image content:</p>
        <CodeViewer language="scss">
          {`.ButtonTime {
  display: inline-block;
  &::after {
    content: url(./time.png);
  }
}

.ButtonDate {
  display: inline-block;
  &::after {
    content: url(./date.png);
  }
}`}
        </CodeViewer>

        <p>Use attribute content</p>
        <CodeViewer language="scss">
          {`.Task {
  display: block;
  &::before {
    content: attr(data-status);
  }
}`}
        </CodeViewer>

        <p>Use quote content</p>
        <CodeViewer language="scss">
          {`.Quote {
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
}`}
        </CodeViewer>

        <p>Use counter content</p>
        <CodeViewer language="scss">
          {`.DecimalCounterItem {
  counter-increment: decimalCounter;
  &::before {
    content: counter(decimalCounter) ' .';
  }
}

.LowerRomanCounterItem {
  counter-increment: lowerRomanCounter;
  &::before {
    content: counter(lowerRomanCounter, lower-roman) ' .';
  }
}

.UpperAlphaCounterItem {
  counter-increment: upperAlphaCounter;
  &::before {
    content: counter(upperAlphaCounter, upper-alpha) ' .';
  }
}

.LowerGreekCounterItem {
  counter-increment: lowerGreekCounter;
  &::before {
    content: counter(lowerGreekCounter, lower-greek) ' .';
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Valid CSS Content`,
        url: `https://css-tricks.com/valid-css-content/`,
      },
      {
        name: `[MDN] content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/content`,
      },
      {
        name: `[W3C] SComponente Predefined Counter Styles`,
        url: `https://www.w3.org/TR/css-counter-styles-3/#predefined-counters`,
      },
      {
        name: `[MDN] ::before (:before)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::before`,
      },
      {
        name: `[MDN] ::after (:after)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::after`,
      },
    ],
  },
];

export default questions;
