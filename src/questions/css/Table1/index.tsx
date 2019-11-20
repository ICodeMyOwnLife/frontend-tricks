import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import { Box } from '@material-ui/core';
import questions from './questions';
import useStyles from './styles';
import StickyHeaderTable from './StickyHeaderTable';

const cols = Array.from({ length: 10 }, (_, i) => i + 1);

const data = Array.from({ length: 240 }, (_, i) => i + 1).map(row =>
  Object.fromEntries(cols.map(col => [col, col * (row + 1)])),
);

export const Table1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      title="Table 1"
      questions={questions}
    >
      <Section title="Sticky Header">
        <Box className={classes.tableWrapper}>
          <StickyHeaderTable cols={cols} data={data} />
        </Box>
      </Section>
    </QuestionPage>
  );
};

const Table1 = memo(Table1Component);
Table1.displayName = 'Table1';
export default Table1;
