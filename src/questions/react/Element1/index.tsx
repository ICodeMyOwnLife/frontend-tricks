import React, { FC, memo } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import useForm from './hooks';
import classes from './styles.module.scss';

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
        <pre>
          <code>
            {`cloneElement<FieldProps>(element, {
  ...props,
  name,
  id: name,
  onChange,
});`}
          </code>
        </pre>
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

export const Element1Impl: FC = () => {
  const [data, getFieldDecorator] = useForm({
    name: '',
    value: 0,
    active: false,
  });

  return (
    <Question title="Element 1" questions={questions}>
      <form className={classes.Form}>
        <div className={classes.InputGroup}>
          <label className={classes.InputLabel} htmlFor="name">
            Name
          </label>
          {getFieldDecorator('name')(
            <input className={classes.InputControl} type="text" />,
          )}
        </div>

        <div className={classes.InputGroup}>
          <label className={classes.InputLabel} htmlFor="value">
            Value
          </label>
          {getFieldDecorator('value')(
            <input className={classes.InputControl} type="number" />,
          )}
        </div>
        <div className={classes.InputGroup}>
          <label className={classes.Checkbox} htmlFor="active">
            {getFieldDecorator('active')(<input type="checkbox" />)}
            Active
          </label>
        </div>
      </form>

      <div className={classes.Data}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Question>
  );
};

const Element1 = memo(Element1Impl);
Element1.displayName = 'Element1';
export default Element1;
