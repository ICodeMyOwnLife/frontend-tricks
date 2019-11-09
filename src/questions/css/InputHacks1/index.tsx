import React, { FC, memo } from 'react';
import { Grid } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';
import SearchInput from './SearchInput';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';

export const InputHacks1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      title="Input Hacks 1"
      questions={questions}
    >
      <Section title="Checkboxes and Radio Buttons">
        <Grid container spacing={3}>
          <Grid item>
            <Checkbox id="checkbox1" label="Option 1" />
          </Grid>
          <Grid item>
            <Checkbox id="checkbox2" label="Option 2" />
          </Grid>
          <Grid item>
            <Checkbox id="checkbox3" label="Option 3" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item>
            <RadioButton id="radio1" label="Option 1" name="group1" />
          </Grid>
          <Grid item>
            <RadioButton id="radio2" label="Option 2" name="group1" />
          </Grid>
          <Grid item>
            <RadioButton id="radio3" label="Option 3" name="group1" />
          </Grid>
        </Grid>
      </Section>

      <Section title="Search Inputs">
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <SearchInput id="search1" />
          </Grid>
          <Grid item>
            <SearchInput id="search2" />
          </Grid>
          <Grid item>
            <SearchInput id="search3" />
          </Grid>
        </Grid>
      </Section>
    </QuestionPage>
  );
};

const InputHacks1 = memo(InputHacks1Component);
InputHacks1.displayName = 'InputHacks1';
export default InputHacks1;
