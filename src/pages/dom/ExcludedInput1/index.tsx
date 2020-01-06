import React, { FC, memo, useState, FormEvent, useCallback } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';
import classes from './styles.module.scss';

export const ExcludedInput1Component: FC = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchParams = new URLSearchParams(formData as any);
    setQuery(searchParams.toString());
  }, []);

  return (
    <QuestionPage title="Excluded Input 1" questions={questions}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.InputLine}>
            <div className={classes.InputGroup}>
              <label htmlFor="name1">Name</label>
              <input
                type="text"
                id="name1"
                value={name1}
                onChange={e => setName1(e.target.value)}
              />
            </div>
            <div className={classes.InputGroup}>
              <label htmlFor="input1">Text</label>
              <input type="text" id="input1" name={name1} />
            </div>
          </div>

          <div className={classes.InputLine}>
            <div className={classes.InputGroup}>
              <label htmlFor="name2">Name</label>
              <input
                type="text"
                id="name2"
                value={name2}
                onChange={e => setName2(e.target.value)}
              />
            </div>
            <div className={classes.InputGroup}>
              <label htmlFor="input2">Number</label>
              <input type="number" name={name2} />
            </div>
          </div>

          <div className={classes.InputLine}>
            <div className={classes.InputGroup}>
              <label htmlFor="name3">Name</label>
              <input
                type="text"
                id="name3"
                value={name3}
                onChange={e => setName3(e.target.value)}
              />
            </div>
            <div className={classes.InputOnly}>
              <label htmlFor="input3">
                <input type="checkbox" id="input3" name={name3} value={1} />
                Checkbox
              </label>
            </div>
          </div>
          <div className={classes.InputOnly}>
            <button type="submit">Submit</button>
          </div>
        </form>
        {query && <pre>{query}</pre>}
      </div>
    </QuestionPage>
  );
};

const ExcludedInput1 = memo(ExcludedInput1Component);
ExcludedInput1.displayName = 'ExcludedInput1';
export default ExcludedInput1;
