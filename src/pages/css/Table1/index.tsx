import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import StickyHeaderTable from './components/StickyHeaderTable';
import RoundedTable1 from './components/RoundedTable1';
import RoundedTable2 from './components/RoundedTable2';
import RoundedTable3 from './components/RoundedTable3';
import useStyles from './styles';

const cols = Array.from({ length: 10 }, (_, i) => i + 1);

const data = Array.from({ length: 240 }, (_, i) => i + 1).map(row =>
  Object.fromEntries(cols.map(col => [col, col * (row + 1)])),
);

const products: Product[] = [
  { ID: 1363, Name: 'Product 1', Date: '2020-03-14', Status: 'Active' },
  { ID: 3724, Name: 'Product 2', Date: '2019-10-03', Status: 'Pending' },
  { ID: 5321, Name: 'Product 3', Date: '2015-12-22', Status: 'Inactive' },
  { ID: 6125, Name: 'Product 4', Date: '2011-07-30', Status: 'Active' },
];

export const Table1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      title="Table 1"
      questions={questions}
    >
      <Section title="Rounded Table">
        <div className={classes.roundedTableGrid}>
          <RoundedTable1 className={classes.roundedTable} dataList={products} />
          <RoundedTable2 className={classes.roundedTable} dataList={products} />
          <RoundedTable3 className={classes.roundedTable} dataList={products} />
        </div>
      </Section>
      <Section title="Sticky Header">
        <div className={classes.stickyTableWrapper}>
          <StickyHeaderTable cols={cols} data={data} />
        </div>
      </Section>
    </QuestionPage>
  );
};

const Table1 = memo(Table1Component);
Table1.displayName = 'Table1';
export default Table1;

interface Product {
  ID: number;
  Name: string;
  Date: string;
  Status: string;
}
