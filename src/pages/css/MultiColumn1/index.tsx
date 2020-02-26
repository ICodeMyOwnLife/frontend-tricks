import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Masonry from 'components/Masonry';
import questions from './questions';
import useStyles from './styles';

export const MultiColumn1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Multi-Column 1"
    >
      <Section title="Static Masonry Layout">
        <Box className={classes.masonryGrid}>
          <Masonry
            className={classes.masonry}
            itemClassName={classes.masonryItem}
            itemPanelClassName={classes.masonryItemPanel1}
          />
          <Masonry
            className={classes.masonry}
            itemClassName={classes.masonryItem}
            itemPanelClassName={classes.masonryItemPanel2}
          />
        </Box>
      </Section>
    </QuestionPage>
  );
};

const MultiColumn1 = memo(MultiColumn1Component);
MultiColumn1.displayName = 'MultiColumn1';
export default MultiColumn1;
