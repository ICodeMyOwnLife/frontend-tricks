import { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ResponsiveGrid from './ResponsiveGrid';
import PropsGrid from './PropsGrid';
import AreaGrid from './AreaGrid';
import AutoGrid from './AutoGrid';
import FluidGrid from './FluidGrid';
import questions from './questions';
import useStyles from './styles';

export const Grid1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage className={classes.root} title="Grid 1" questions={questions}>
      <Section title="justify-items vs justify-content vs justify-self vs align-items vs align-content vs align-self">
        <PropsGrid />
      </Section>
      <Section title="auto-fill vs auto-fit">
        <Box className={classes.gridWrapper}>
          <ResponsiveGrid
            gridClassName={classes.autoFillGrid}
            title="auto-fill"
          />
          <ResponsiveGrid
            gridClassName={classes.autoFitGrid}
            title="auto-fit"
          />
        </Box>
      </Section>
      <Section title="Areas and auto flow">
        <AreaGrid />
      </Section>
      <Section title="Auto Grid">
        <AutoGrid />
      </Section>
      <Section title="Fluid Responsive Grid">
        <FluidGrid />
      </Section>
    </QuestionPage>
  );
};

const Grid1 = memo(Grid1Component);
Grid1.displayName = 'Grid1';
export default Grid1;
