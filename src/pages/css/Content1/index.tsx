import React, { FC, memo } from 'react';
import { Grid, FormLabel, Input, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import classes from './styles.module.scss';

export const Content1Component: FC = () => (
  <QuestionPage title="Content 1" questions={questions}>
    <Section title="String Content">
      <Grid container spacing={3}>
        <Grid
          item
          className={clsx(classes.FormGroup, classes.required)}
          xs={12}
          sm={6}
        >
          <FormLabel htmlFor="name" className={classes.FormLabel}>
            Name
          </FormLabel>
          <Input className={classes.FormControl} id="name" name="name" />
        </Grid>

        <Grid item className={clsx(classes.FormGroup)} xs={12} sm={6}>
          <FormLabel htmlFor="value" className={classes.FormLabel}>
            Value
          </FormLabel>
          <Input
            type="number"
            className={classes.FormControl}
            id="value"
            name="value"
          />
        </Grid>
      </Grid>
    </Section>

    <Section title="Image Content">
      <Grid container spacing={2}>
        <Grid item>
          <Button className={classes.ButtonTime} variant="outlined">
            Time
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.ButtonDate} variant="outlined">
            Date
          </Button>
        </Grid>
      </Grid>
    </Section>

    <Section title="Attribute Content">
      <Typography className={classes.Task} data-status="&#x2705;">
        Do homework
      </Typography>
      <Typography className={classes.Task} data-status="&#10062;">
        Hangout with friends
      </Typography>
    </Section>

    <Section title="Quote Content">
      <Typography className={classes.Quote}>
        Life is just a chance to grow a soul.
      </Typography>
      <Typography className={classes.Quote}>
        People living deeply have no fear of death.
      </Typography>
    </Section>

    <Section title="Counter Content">
      <Grid container spacing={2}>
        <Grid item sm={6} lg={3}>
          <Typography variant="h6">Decimal</Typography>
          <Typography className={classes.DecimalCounterItem}>Apple</Typography>
          <Typography className={classes.DecimalCounterItem}>Banana</Typography>
          <Typography className={classes.DecimalCounterItem}>
            Coconut
          </Typography>
        </Grid>

        <Grid item sm={6} lg={3}>
          <Typography variant="h6">Lower Roman</Typography>
          <Typography className={classes.LowerRomanCounterItem}>
            Apple
          </Typography>
          <Typography className={classes.LowerRomanCounterItem}>
            Banana
          </Typography>
          <Typography className={classes.LowerRomanCounterItem}>
            Coconut
          </Typography>
        </Grid>

        <Grid item sm={6} lg={3}>
          <Typography variant="h6">Upper Alpha</Typography>
          <Typography className={classes.UpperAlphaCounterItem}>
            Apple
          </Typography>
          <Typography className={classes.UpperAlphaCounterItem}>
            Banana
          </Typography>
          <Typography className={classes.UpperAlphaCounterItem}>
            Coconut
          </Typography>
        </Grid>

        <Grid item sm={6} lg={3}>
          <Typography variant="h6">Lower Greek</Typography>
          <Typography className={classes.LowerGreekCounterItem}>
            Apple
          </Typography>
          <Typography className={classes.LowerGreekCounterItem}>
            Banana
          </Typography>
          <Typography className={classes.LowerGreekCounterItem}>
            Coconut
          </Typography>
        </Grid>
      </Grid>
    </Section>
  </QuestionPage>
);

const Content1 = memo(Content1Component);
Content1.displayName = 'Content1';
export default Content1;
