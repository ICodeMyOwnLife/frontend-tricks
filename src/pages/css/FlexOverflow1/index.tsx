import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';

export const FlexOverflow1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage title="Flex Overflow 1" questions={questions}>
      <Section title="Horizontal Overflow">
        <div className={classes.horizontalContainer}>
          <div className={classes.leftBar} />
          <div className={classes.rightBar}>
            <div className={classes.leftColumn} />
            <div className={classes.rightColumn}>
              <div className={classes.longBlock} />
            </div>
          </div>
        </div>
      </Section>
      <Section title="Vertical Overflow">
        <div className={classes.verticalContainer}>
          <div className={classes.topBar} />
          <div className={classes.bottomBar}>
            <div className={classes.tallBlock} />
          </div>
        </div>
      </Section>
    </QuestionPage>
  );
};

const FlexOverflow1 = memo(FlexOverflow1Component);
FlexOverflow1.displayName = 'FlexOverflow1';
export default FlexOverflow1;
