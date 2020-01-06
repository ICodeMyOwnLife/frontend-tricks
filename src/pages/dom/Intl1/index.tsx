import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import { Select, MenuItem, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import questions from './questions';
import Collator from './Collator';
import DateTimeFormat from './DateTimeFormat';

export const Intl1Component: FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <QuestionPage title="Intl 1" questions={questions}>
      <Section title="Collator">
        <Collator />
      </Section>
      <Section title="DateTimeFormat">
        <DateTimeFormat />
      </Section>

      <form onSubmit={handleSubmit(console.log)}>
        <Select defaultValue={1} inputRef={register} name="value">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </QuestionPage>
  );
};

const Intl1 = memo(Intl1Component);
Intl1.displayName = 'Intl1';
export default Intl1;
