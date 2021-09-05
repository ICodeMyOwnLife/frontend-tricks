import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to change/add/remove props of an <code>ReactElement</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          Using <code>cloneElement()</code>
        </p>
        <CodeViewer language="tsx">
          {`cloneElement<FieldProps>(element, {
  ...props,
  name,
  id: name,
  onChange,
});`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[React] cloneElement()`,
        url: `https://reactjs.org/docs/react-api.html#cloneelement`,
      },
      {
        name: `[Medium] Transforming Elements In React`,
        url: `https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba`,
      },
      {
        name: `[Medium] How to change or add React Component properties — clone element with React.cloneElement`,
        url: `https://medium.com/@vygandas/how-to-change-or-add-react-component-properties-clone-element-with-react-cloneelement-be060097a44a`,
      },
    ],
  },
];

export default questions;
