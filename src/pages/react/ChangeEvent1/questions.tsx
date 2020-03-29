import React from 'react';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What is the difference between React <code>onChange</code> and DOM{' '}
        <code>change</code> event?
      </span>
    ),
    answer: (
      <div>
        <p>
          It seems that React use DOM <code>click</code> event for checkboxes
          and radio buttons and <code>input</code> event for remaining input
          types instead of <code>change</code> event when register{' '}
          <code>onChange</code>.
        </p>
      </div>
    ),
    references: [
      {
        name: `[Medium] How onChange Differs Between React and Vanilla JavaScript`,
        url: `https://medium.com/better-programming/how-onchange-differs-between-react-and-vanilla-javascript-90b56d6a340a`,
      },
      {
        name: `[React] DOM Elements - onChange`,
        url: `https://reactjs.org/docs/dom-elements.html#onchange`,
      },
      {
        name: `HTMLElement: change event`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`,
      },
      {
        name: `[MDN] HTMLElement: input event`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event`,
      },
      {
        name: `[MDN] Element: click event`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event`,
      },
    ],
  },
];

export default questions;
