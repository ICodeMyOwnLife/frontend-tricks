import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `List some pseudo-elements?`,
    answer: (
      <div>
        <p>
          <code>::before</code>: In CSS, <code>::before</code> creates a
          pseudo-element that is the first child of the selected element. It is
          often used to add cosmetic content to an element with the{' '}
          <code>content</code> property. It is inline by default.
        </p>

        <p>
          <code>::after</code>: In CSS, <code>::after</code> creates a
          pseudo-element that is the last child of the selected element. It is
          often used to add cosmetic content to an element with the{' '}
          <code>content</code> property. It is inline by default.
        </p>

        <CodeViewer language="css">
          {`.PseudoElement1-button-181 {
  color: #18ffff;
  border: none;
  cursor: pointer;
  padding: 12px 32px;
  position: relative;
  font-size: 16px;
  transition: 250ms ease;
  background-color: transparent;
  transition-property: padding, opacity;
}

.PseudoElement1-button-181::before, .PseudoElement1-button-181::after {
  top: 8px;
  position: absolute;
  font-size: 40px;
  line-height: 20px;
}

.PseudoElement1-button-181::before {
  left: 0;
  content: "»";
}

.PseudoElement1-button-181::after {
  right: 0;
  content: "«";
}

.PseudoElement1-button-181:hover {
  opacity: 0.7;
}

.PseudoElement1-button-181:active, .PseudoElement1-button-181:focus {
  outline: none;
  box-shadow: none;
}

.PseudoElement1-button-181:active {
  padding: 12px 28px;
}`}
        </CodeViewer>
        <p>
          <code>::first-letter</code>: The <code>::first-letter</code> CSS
          pseudo-element applies styles to the first letter of the first line of
          a block-level element, but only when not preceded by other content
          (such as images or inline tables).
        </p>

        <p>
          <code>::first-line</code>: The <code>::first-line</code> CSS
          pseudo-element applies styles to the first line of a block-level
          element. Note that the length of the first line depends on many
          factors, including the width of the element, the width of the
          document, and the font size of the text.
        </p>

        <p>
          <code>::selection</code>: The <code>::selection</code> CSS
          pseudo-element applies styles to the part of a document that has been
          highlighted by the user (such as clicking and dragging the mouse
          across text).
        </p>

        <CodeViewer language="css">
          {`.PseudoElement1-paragraphs-182 ::selection {
  color: #006064;
  background-color: #18ffff;
}

.PseudoElement1-paragraphs-182 ::first-line {
  font-style: italic;
  font-weight: bold;
}

.PseudoElement1-paragraphs-182 ::first-letter {
  color: #ef5350;
  position: absolute;
  font-size: 48px;
  line-height: 0.85;
}`}
        </CodeViewer>

        <p>
          <code>::marker</code>: The <code>::marker</code> CSS pseudo-element
          selects the marker box of a list item, which typically contains a
          bullet or number. It works on any element or pseudo-element set to{' '}
          <code>display: list-item</code>, such as the <code>{`<p>`}</code> and{' '}
          <code>{`<summary>`}</code> elements.
        </p>

        <CodeViewer language="css">
          {`.PseudoElement1-lists-183 li {
  padding-left: 16px;
}

.PseudoElement1-lists-183 ::marker {
  color: #26c6da;
  content: "😃 ";
}`}
        </CodeViewer>

        <p>
          <code>::placeholder</code>: The <code>::placeholder</code> CSS
          pseudo-element represents the placeholder text in an{' '}
          <code>{`<input>`}</code> or <code>{`<textarea>`}</code> element.
        </p>

        <CodeViewer language="css">
          {`.PseudoElement1-inputs-184 {
  display: grid;
  grid-gap: 16px 0px;
  margin-top: 24px;
  align-items: center;
  grid-auto-flow: row;
  justify-content: center;
}

.PseudoElement1-inputs-184 ::placeholder {
  color: #ff8a80;
  font-size: italic;
}

.PseudoElement1-input-185 {
  color: white;
  border: 1px solid #f5f5f5;
  padding: 6px 12px;
  min-width: 300px;
  background: transparent;
  caret-color: #ea80fc;
  border-radius: 4px;
}

.PseudoElement1-textarea-186 {
  resize: none;
  padding: 12px;
}`}
        </CodeViewer>

        <p>
          <code>::backdrop</code>: The <code>::backdrop</code> CSS
          pseudo-element is a box the size of the viewport which is rendered
          immediately beneath any element being presented in full-screen mode.
          This includes both elements which have been placed in full-screen mode
          using the Fullscreen API and <code>{`<dialog>`}</code> elements.
        </p>

        <CodeViewer language="css">
          {`.PseudoElement1-fullScreenTarget-179:fullscreen {
  display: flex;
  padding: 48px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.PseudoElement1-fullScreenTarget-179::backdrop {
  background-image: conic-gradient(from 50deg, #9e9e9e, black, #9e9e9e);
}

.PseudoElement1-video-187 {
  margin: 24px auto 0;
  display: block;
}

.PseudoElement1-video-187::backdrop {
  background-image: linear-gradient(to right, black, #311b92, black);
}

.PseudoElement1-dialog-188 {
  top: 50%;
  border: none;
  padding: 0;
  position: fixed;
  transform: translateY(-50%);
  border-radius: 8px;
}

.PseudoElement1-dialog-188::backdrop {
  background-image: radial-gradient(rgba(33, 33, 33, 0.8), #212121);
}

.PseudoElement1-modal-189 {
  display: flex;
  padding: 24px;
  min-width: 280px;
  min-height: 160px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: white;
}

.PseudoElement1-modalButtons-190 {
  display: grid;
  grid-gap: 0px 24px;
  grid-auto-flow: column;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] ::before (:before)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::before`,
      },
      {
        name: `[MDN] ::after (:after)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::after`,
      },
      {
        name: `[MDN] ::first-letter (:first-letter)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter`,
      },
      {
        name: `[MDN] ::first-line (:first-line)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line`,
      },
      {
        name: `[MDN] ::selection`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::selection`,
      },
      {
        name: `[MDN] ::marker`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::marker`,
      },
      {
        name: `[MDN] ::placeholder`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder`,
      },
      {
        name: `[MDN] ::backdrop`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop`,
      },
      {
        name: `[MDN] <dialog>: The Dialog element`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog`,
      },
      {
        name: `[MDN] Pseudo-elements`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements`,
      },
    ],
  },
];

export default questions;
