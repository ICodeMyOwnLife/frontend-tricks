import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';
import EventLogger from './EventLogger';

const textInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'input'];
const numberInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'input'];
const checkInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'click'];
const radioInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'click'];
const rangeInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'input'];
const colorInputEvents: (keyof HTMLElementEventMap)[] = ['change', 'input'];

export const ChangeEvent1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Change Event 1"
    >
      <Section title="Text Input">
        <EventLogger eventNames={textInputEvents} inputType="text" />
      </Section>

      <Section title="Number Input">
        <EventLogger eventNames={numberInputEvents} inputType="number" />
      </Section>

      <Section title="Check Input">
        <EventLogger eventNames={checkInputEvents} inputType="checkbox" />
      </Section>

      <Section title="Radio Input">
        <EventLogger eventNames={radioInputEvents} inputType="radio" />
      </Section>

      <Section title="Range Input">
        <EventLogger eventNames={rangeInputEvents} inputType="range" />
      </Section>

      <Section title="Color Input">
        <EventLogger eventNames={colorInputEvents} inputType="color" />
      </Section>
    </QuestionPage>
  );
};

const ChangeEvent1 = memo(ChangeEvent1Component);
ChangeEvent1.displayName = 'ChangeEvent1';
export default ChangeEvent1;
