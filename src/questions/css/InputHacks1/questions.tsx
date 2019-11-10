import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create custom checkboxes and radio buttons?`,
    answer: (
      <div>
        <p>
          Place a <code>label</code> next to an{' '}
          <code>input[type=checkbox]</code> or <code>input[type=radio]</code>
        </p>

        <CodeViewer language="tsx">
          {`<div>
  <input
    className={clsx(classes.checkbox, className)}
    type="checkbox"
    id={id}
    {...props}
  />
  <label className={classes.boxLabel} htmlFor={id}>
    {label}
  </label>
</div>

<div>
  <input
    className={clsx(classes.radio, className)}
    type="radio"
    id={id}
    {...props}
  />
  <label className={classes.boxLabel} htmlFor={id}>
    {label}
  </label>
</div>`}
        </CodeViewer>

        <p>
          Use CSS to hide the <code>input</code>, use <code>::before</code>{' '}
          pseudo-element of the <code>label</code> to show the icons and{' '}
          <code>:checked</code> pseudo-class to switch between 2 states
        </p>

        <CodeViewer language="css">
          {`.InputHacks1-boxLabel-387 {
  display: inline-flex;
  align-items: center;
}
.InputHacks1-boxLabel-387::before {
  font-size: 1.5rem;
  font-family: 'Material Icons';
  line-height: 1;
  margin-right: 4px;
  font-feature-settings: 'liga';
}
.InputHacks1-checkbox-388 {
  display: none;
}
.InputHacks1-checkbox-388 + .InputHacks1-boxLabel-387::before {
  content: 'check_box_outline_blank';
}
.InputHacks1-checkbox-388:checked + .InputHacks1-boxLabel-387::before {
  content: 'check_box';
}
.InputHacks1-radio-389 {
  display: none;
}
.InputHacks1-radio-389 + .InputHacks1-boxLabel-387::before {
  content: 'radio_button_unchecked';
}
.InputHacks1-radio-389:checked + .InputHacks1-boxLabel-387::before {
  content: 'radio_button_checked';
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] :checked`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/:checked`,
      },
      {
        name: `[CSS-TRICKS] :checked`,
        url: `https://css-tricks.com/almanac/selectors/c/checked/`,
      },
      {
        name: `[CSS-TRICKS] Stuff you can do with the “Checkbox Hack”`,
        url: `https://css-tricks.com/the-checkbox-hack/`,
      },
    ],
  },
  {
    question: `How to show search button when user start to type?`,
    answer: (
      <div>
        <p>
          Place the search button next to the <code>input</code>
        </p>

        <CodeViewer language="tsx">
          {`<div className={classes.searchInputGroup}>
  <label htmlFor={id}>{label}:</label>
  <input
    className={clsx(classes.searchInput, className)}
    id={id}
    placeholder={placeholder}
    {...props}
  />
  <button className={classes.searchButton} type="button" tabIndex={0}>
    search
  </button>
</div>`}
        </CodeViewer>

        <p>
          Use <code>:placeholder-shown</code> pseudo-class of the{' '}
          <code>input</code> to hide/show the search button
        </p>

        <CodeViewer language="css">
          {`.InputHacks1-searchButton-177 {
  color: #888888;
  right: 4px;
  width: 30px;
  cursor: pointer;
  height: 30px;
  display: none;
  padding: 0;
  position: absolute;
  font-size: 1.25rem;
  font-family: 'Material Icons';
  line-height: 1;
  border-color: transparent;
  border-radius: 50%;
  background-color: transparent;
  font-feature-settings: 'liga';
}
.InputHacks1-searchInput-178 {
  border: 1px solid #dcdcdc;
  padding: 0px 40px 0px 12px;
  flex-grow: 1;
  line-height: 36px;
}
.InputHacks1-searchInput-178::placeholder {
  color: #676767;
}
.InputHacks1-searchInput-178:not(:placeholder-shown) + .InputHacks1-searchButton-177 {
  display: block;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] :placeholder-shown`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown`,
      },
      {
        name: `[CSS-TRICKS] :placeholder-shown`,
        url: `https://css-tricks.com/almanac/selectors/p/placeholder-shown/`,
      },
      {
        name: `[CSS-TRICKS] Show Search Button when Search Field is Non-Empty`,
        url: `https://css-tricks.com/show-search-button-when-search-field-is-non-empty/`,
      },
    ],
  },
  {
    question: (
      <span>
        How to change to style the <code>label</code> when the
        <code>input</code> is focused?
      </span>
    ),
    answer: (
      <div>
        <p>
          Use <code>:focus-within</code> pseudo-class on the wrapper element
        </p>

        <CodeViewer language="css">
          {`.InputHacks1-searchInputGroup-176 {
  display: flex;
  position: relative;
  align-items: center;
}
.InputHacks1-searchInputGroup-176 label {
  width: 60px;
  margin-right: 8px;
}
.InputHacks1-searchInputGroup-176:focus-within label {
  font-weight: bold;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] :focus-within`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within`,
      },
      {
        name: `[CSS-TRICKS] :focus-within`,
        url: `https://css-tricks.com/almanac/selectors/f/focus-within/`,
      },
    ],
  },
];

export default questions;
