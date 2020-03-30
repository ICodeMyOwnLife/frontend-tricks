import React, { FC, memo, useState, useMemo } from 'react';
import QuestionPage from 'components/QuestionPage';
import TextInput from 'components/TextInput';
import NumberInput from 'components/NumberInput';
import questions from './questions';
import classes from './styles.module.scss';

export const Array1Component: FC = () => {
  const [text, setText] = useState('abc');
  const characters = useMemo(() => Array.from(text), [text]);

  const [length, setLength] = useState(5);
  const [fillValue, setFillValue] = useState(0);
  const fillArray = useMemo(() => Array(length).fill(fillValue), [
    length,
    fillValue,
  ]);

  const [rangeEnd, setRangeEnd] = useState(5);
  const range = useMemo(
    () => Array.from({ length: rangeEnd }, (_, idx) => idx),
    [rangeEnd],
  );

  const [itemsString, setItemsString] = useState('1 1 2 3 3');
  const uniqueArray = useMemo(() => {
    const items = itemsString.split(' ').filter(Boolean).map(Number);
    return Array.from(new Set(items));
  }, [itemsString]);

  return (
    <QuestionPage title="Array 1" questions={questions}>
      <div className={classes.Section}>
        <h4>Convert text to array of character</h4>
        <TextInput label="Text" value={text} onChange={setText} />
        <pre>{JSON.stringify(characters)}</pre>
      </div>

      <div className={classes.Section}>
        <h4>Fill an array with values</h4>
        <NumberInput label="Length" value={length} onChange={setLength} />
        <NumberInput
          label="Fill Value"
          value={fillValue}
          onChange={setFillValue}
        />
        <pre>{JSON.stringify(fillArray)}</pre>
      </div>

      <div className={classes.Section}>
        <h4>Generate range of numbers</h4>
        <NumberInput
          label="Range End"
          value={rangeEnd}
          onChange={setRangeEnd}
        />
        <pre>{JSON.stringify(range)}</pre>
      </div>

      <div className={classes.Section}>
        <h4>Create array of unique items</h4>
        <TextInput
          label="Items"
          value={itemsString}
          onChange={setItemsString}
        />
      </div>
      <pre>{JSON.stringify(uniqueArray)}</pre>
    </QuestionPage>
  );
};

const Array1 = memo(Array1Component);
Array1.displayName = 'Array1';
export default Array1;
