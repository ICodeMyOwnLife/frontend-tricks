import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red, green, grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    gridWrapper: {
      display: 'grid',
      gridGap: `${spacing(3)}px 0`,
    },
    gridContainer: {
      position: 'relative',
    },
    gridDescription: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 32,
      color: green[500],
      backgroundColor: grey[300],
    },
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
      backgroundColor: red[500],
      opacity: 0.5,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Grid1' });

export default useStyles;
