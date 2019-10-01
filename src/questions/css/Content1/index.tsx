import React, { FC, memo } from 'react';
import {
  Card,
  CardContent,
  Grid,
  FormLabel,
  Input,
  CardHeader,
  Button,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import Question from 'components/Question';
import questions from './questions';
import useStyles from './styles';

export const Content1Component: FC = () => {
  const classes = useStyles();

  return (
    <Question title="Content 1" questions={questions}>
      <Card className={classes.Section}>
        <CardHeader title="Text Content" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid
              item
              className={clsx(classes.FormGroup, 'required')}
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
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Image Content" />
        <CardContent>
          <Button className={classes.ButtonTime} variant="outlined">
            Time
          </Button>
          <Button className={classes.ButtonDate} variant="outlined">
            Date
          </Button>
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Attr Content" />
        <CardContent>
          <Typography className={classes.Task} data-status="&#x2705;">
            Do homework
          </Typography>
          <Typography className={classes.Task} data-status="&#10062;">
            Hangout with friends
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Quote Content" />
        <CardContent>
          <Typography className={classes.Quote}>
            Life is just a chance to grow a soul.
          </Typography>
          <Typography className={classes.Quote}>
            People living deeply have no fear of death.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.Section}>
        <CardHeader title="Counter Content" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6} lg={3}>
              <Typography variant="h6">Decimal</Typography>
              <Typography className={classes.DecimalCounterItem}>
                Apple
              </Typography>
              <Typography className={classes.DecimalCounterItem}>
                Banana
              </Typography>
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
        </CardContent>
      </Card>
    </Question>
  );
};

const Content1 = memo(Content1Component);
Content1.displayName = 'Content1';
export default Content1;