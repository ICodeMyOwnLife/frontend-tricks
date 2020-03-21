/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How is CSS specificity calculated?`,
    answer: (
      <div>
        <p>
          <b>Selector Types</b>
        </p>
        <p>The following list of selector types increases by specificity:</p>
        <ol>
          <li>
            Type selectors (e.g., <code>h1</code>) and pseudo-elements (e.g.,
            <code>::before</code>).
          </li>
          <li>
            Class selectors (e.g., <code>.example</code>), attributes selectors
            (e.g., <code>[type="radio"]</code>) and pseudo-classes (e.g.,
            <code>:hover</code>).
          </li>
          <li>
            ID selectors (e.g., <code>#example</code>).
          </li>
        </ol>
        <p>
          Universal selector (<code>*</code>), combinators (<code>+</code>,{' '}
          <code>></code>, <code>~</code>, <code>' '</code>, <code>||</code>) and
          negation pseudo-class (<code>:not()</code>) have no effect on
          specificity. (The selectors declared inside <code>:not()</code> do,
          however.)
        </p>
        <p>
          Inline styles added to an element (e.g.,{' '}
          <code>style="font-weight: bold;"</code>) always overwrite any styles
          in external stylesheets, and thus can be thought of as having the
          highest specificity.
        </p>

        <p>
          <b>
            The <code>!important</code> exception
          </b>
        </p>
        <p>
          When an <code>!important</code> rule is used on a style declaration,
          this declaration overrides any other declarations. Although
          technically <code>!important</code> has nothing to do with
          specificity, it interacts directly with it. When two conflicting
          declarations with the <code>!important</code> rule are applied to the
          same element, the declaration with a greater specificity will be
          applied.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] CSS: Cascading Style Sheets > Specificity`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity`,
      },
      {
        name: `CSS Specificity: Things You Should Know`,
        url: `https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/`,
      },
      {
        name: `CSS Specificity Wars`,
        url: `https://stuffandnonsense.co.uk/archives/css_specificity_wars.html`,
      },
      {
        name: `Specifishity :: Specificity with Fish`,
        url: `https://specifishity.com/`,
      },
      {
        name: `CSS Specificity`,
        url: `https://cssspecificity.com/`,
      },
      {
        name: `Specificity Calculator`,
        url: `https://specificity.keegan.st/`,
      },
      {
        name: `CSS Specificity calculator`,
        url: `https://polypane.app/css-specificity-calculator/`,
      },
      {
        name: `[Stack Overflow] What are the implications of using “!important” in CSS?`,
        url: `https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css`,
      },
      {
        name: `[Stack Overflow] What does !important mean in CSS?`,
        url: `https://stackoverflow.com/questions/9245353/what-does-important-mean-in-css`,
      },
      {
        name: `[Stack Overflow] When to use the !important property in CSS`,
        url: `https://stackoverflow.com/questions/5701149/when-to-use-the-important-property-in-css`,
      },
      {
        name: `[Stack Overflow] How to override !important?`,
        url: `https://stackoverflow.com/questions/11178673/how-to-override-important`,
      },
      {
        name: `[Stack Overflow] When to use “!important” to save the day (when working with CSS)`,
        url: `https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css`,
      },
    ],
  },
];

export default questions;
