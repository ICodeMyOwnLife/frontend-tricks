import React, { FC, memo } from 'react';
import Question from 'components/Question';
import useForm from './hooks';
import questions from './questions';
import classes from './styles.module.scss';

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
