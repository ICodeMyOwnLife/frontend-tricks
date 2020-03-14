import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Switch from './Switch';
import questions from './questions';
import useStyles from './styles';

export const Input1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Input 1"
    >
      <Section title="Check Inputs">
        <Box className={classes.checkInputs}>
          <Box>
            <Checkbox id="checkbox1" label="Checkbox 1" />
            <Checkbox id="checkbox2" label="Checkbox 2" />
          </Box>
          <Box>
            <Radio id="radio1" label="Radio 1" name="radio" />
            <Radio id="radio2" label="Radio 2" name="radio" />
          </Box>
          <Box>
            <Switch id="switch1" label="Switch 1" />
            <Switch id="switch2" label="Switch 2" />
          </Box>
        </Box>
      </Section>
    </QuestionPage>
  );
};

const Input1 = memo(Input1Component);
Input1.displayName = 'Input1';
export default Input1;
