import { QuestionInfo } from 'components/Question';

const questions: QuestionInfo[] = [
  {
    question: `How to live edit an element?`,
    answer: null,
    references: [
      {
        name: `[MDN] contenteditable`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable`,
      },
      {
        name: `[MDN] Making content editable`,
        url: `https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content`,
      },
      {
        name: `[Medium] Make a HTML element editable with contenteditable`,
        url: `https://medium.com/@samanthaming/make-a-html-element-editable-with-contenteditable-abe7358640e`,
      },
      {
        name: `[Stack Overflow] Why does React warn against an contentEditable component having children managed by React?`,
        url: `https://stackoverflow.com/questions/49639144/why-does-react-warn-against-an-contenteditable-component-having-children-managed`,
      },
    ],
  },
];

export default questions;
