import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to give checkboxes and radio buttons custom styles without using extra elements?`,
    answer: (
      <div>
        <p>
          Style <code>::before</code> and/or <code>::after</code>{' '}
          pseudo-elements of inputs
        </p>
        <CodeViewer language="markdown">{`<div class="MuiBox-root MuiBox-root-191 Input1-checkInputs-175">
  <div class="MuiBox-root MuiBox-root-192">
    <div class="MuiBox-root MuiBox-root-193 Input1-checkInputWrapper-176">
      <input
        class="Input1-checkInput-177 Input1-box-178 Input1-checkbox-179"
        id="checkbox1"
        type="checkbox"
      />
      <label for="checkbox1">Checkbox 1</label>
    </div>
    <div class="MuiBox-root MuiBox-root-194 Input1-checkInputWrapper-176">
      <input
        class="Input1-checkInput-177 Input1-box-178 Input1-checkbox-179"
        id="checkbox2"
        type="checkbox"
      />
      <label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="MuiBox-root MuiBox-root-195">
    <div class="MuiBox-root MuiBox-root-196 Input1-checkInputWrapper-176">
      <input
        name="radio"
        class="Input1-checkInput-177 Input1-box-178 Input1-radio-180"
        id="radio1"
        type="radio"
      />
      <label for="radio1">Radio 1</label>
    </div>
    <div class="MuiBox-root MuiBox-root-197 Input1-checkInputWrapper-176">
      <input
        name="radio"
        class="Input1-checkInput-177 Input1-box-178 Input1-radio-180"
        id="radio2"
        type="radio"
      />
      <label for="radio2">Radio 2</label>
    </div>
  </div>
  <div class="MuiBox-root MuiBox-root-198">
    <div class="MuiBox-root MuiBox-root-199 Input1-checkInputWrapper-176">
      <input
        class="Input1-checkInput-177 Input1-switch-181"
        id="switch1"
        type="checkbox"
      />
      <label for="switch1">Switch 1</label>
    </div>
    <div class="MuiBox-root MuiBox-root-200 Input1-checkInputWrapper-176">
      <input
        class="Input1-checkInput-177 Input1-switch-181"
        id="switch2"
        type="checkbox"
      />
      <label for="switch2">Switch 2</label>
    </div>
  </div>
</div>`}</CodeViewer>
        <CodeViewer language="css">
          {`
.Input1-checkInputWrapper-176 {
  display: flex;
  padding: 8px 0px;
  align-items: center;
}
.Input1-checkInput-177 {
  border: 2px solid;
  height: 32px;
  position: relative;
  transition: 200ms ease;
  border-color: #757575;
  margin-right: 12px;
}
.Input1-checkInput-177::after {
  content: "";
  position: absolute;
  transition: 200ms ease;
}
.Input1-checkInput-177:checked {
  border-color: #c8e6c9;
  background-color: #43a047;
}
.Input1-checkInput-177:focus, .Input1-checkInput-177:active {
  outline: none;
  box-shadow: none;
}
@supports (-webkit-appearance:none) or (-moz-appearance:none) {
  .Input1-checkInput-177 {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
}
.Input1-box-178 {
  width: 32px;
}
.Input1-box-178::after {
  opacity: 0;
}
.Input1-box-178:checked::after {
  opacity: 1;
}
.Input1-checkbox-179 {
  border-radius: 4px;
}
.Input1-checkbox-179::after {
  top: 5px;
  left: 5px;
  width: 20px;
  border: 4px solid;
  height: 12px;
  transform: rotate(-50deg);
  border-top: 0;
  border-color: #c8e6c9;
  border-right: 0;
}
.Input1-radio-180 {
  border-radius: 100%;
}
.Input1-radio-180::after {
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background-color: #c8e6c9;
}
.Input1-switch-181 {
  width: 52px;
  position: relative;
  border-radius: 16px;
}
.Input1-switch-181::after {
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  transform: translateX(0);
  border-radius: 50%;
  background-color: #757575;
}
.Input1-switch-181:checked::after {
  transform: translateX(20px);
  background-color: #c8e6c9;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Custom Styling Form Inputs With Modern CSS Features`,
        url: `https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/`,
      },
    ],
  },
];

export default questions;
