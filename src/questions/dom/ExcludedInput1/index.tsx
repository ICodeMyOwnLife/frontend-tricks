import React, { FC, memo, useState, FormEvent, useCallback } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import classes from './styles.module.scss';

const questions: QuestionInfo[] = [
  {
    question: 'How to stop an input field in a form from being submitted?',
    answer: (
      <div>
        <p>
          Using inputs without <code>name</code> attribute
        </p>
        <pre>
          <code>
            {`<!-- This input value will be included in form data -->
<input type="text" id="text" name="text" />

<!-- This input value will not be included in form data -->
<input type="number" id="number" />
`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] Stop an input field in a form from being submitted`,
        url: `https://stackoverflow.com/questions/3008035/stop-an-input-field-in-a-form-from-being-submitted`,
      },
      {
        name: `[Stack Overflow] How do I exclude certain form fields upon submission of the form without disabling the field`,
        url: `https://stackoverflow.com/questions/4869987/how-do-i-exclude-certain-form-fields-upon-submission-of-the-form-without-disabli/20877611`,
      },
    ],
  },
  {
    question: 'How to get form data?',
    answer: (
      <div>
        <p>
          Using <code>FormData</code>
        </p>
        <pre>
          <code>
            {`const formData = new FormData(form);
const searchParams = new URLSearchParams(formData);
console.log(searchParams.toString());`}
          </code>
        </pre>
        <p>
          Using <code>jQuery.serialize()</code> or{' '}
          <code>jQuery.serializeArray()</code>
        </p>
        <pre>
          <code>$form.serialize();</code>
          <br />
          <code>$form.serializeArray();</code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[MDN] FormData`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/FormData`,
      },
      {
        name: `[MDN] Using FormData Objects`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects`,
      },
      {
        name: `[jQuery] .serialize()`,
        url: `https://api.jquery.com/serialize/`,
      },
      {
        name: `[jQuery] .serializeArray()`,
        url: `https://api.jquery.com/serializeArray/`,
      },
      {
        name: `[Stack Overflow] How can I get form data with JavaScript/jQuery?`,
        url: `https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery`,
      },
      {
        name: `[Stack Overflow] JavaScript - Getting HTML form values`,
        url: `https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values`,
      },
    ],
  },
];

export const ExcludedInput1Impl: FC = () => {
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
    <Question title="Excluded Input 1" questions={questions}>
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
    </Question>
  );
};

const ExcludedInput1 = memo(ExcludedInput1Impl);
ExcludedInput1.displayName = 'ExcludedInput1';
export default ExcludedInput1;
