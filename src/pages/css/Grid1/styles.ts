import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    grid: {
      display: 'grid',
      gridGap: `${spacing(3)}px ${spacing(4)}px`,
    },
    autoFillGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    },
    autoFitGrid: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    },
    column: {
      height: 64,
      backgroundColor: red[200],
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Grid1' });

export default useStyles;
