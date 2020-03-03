import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  amber,
  blue,
  brown,
  cyan,
  green,
  grey,
  indigo,
  lime,
} from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    scrollMargin: {
      position: 'relative',
      height: 320,
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
    },
    scrollHeader: {
      position: 'sticky',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      height: 64,
      backgroundColor: grey[900],
    },
    scrollPadding: {
      height: 400,
    },
    scrollHeading: {
      scrollMarginTop: `${spacing(9)}px`,
      scrollSnapAlign: 'start',
    },
    scrollLinkBar: {
      position: 'sticky',
      display: 'flex',
      bottom: 0,
      width: 'fit-content',
      margin: '0 auto',
      padding: spacing(2, 1.5),
      backgroundColor: grey[900],
    },
    scrollLink: {
      margin: spacing(0, 1.5),
    },
    scrollSnap: {},
    scrollSnapInputs: {
      display: 'grid',
      gridColumn: 'repeat(3, 1fr)',
      gridGap: spacing(2, 4),
      marginBottom: spacing(3),
    },
    scrollSnapGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(47, 240px)',
      gridGap: spacing(3),
      height: 960,
      padding: spacing(2),
      backgroundColor: grey[900],
      overflow: 'auto',
      scrollPadding: `${spacing(2)}px`,
    },
    scrollSnapCell: {
      height: 800,
      borderRadius: 8,

      '&:nth-of-type(7n+0)': {
        backgroundColor: amber[600],
      },

      '&:nth-of-type(7n+1)': {
        backgroundColor: blue[600],
      },

      '&:nth-of-type(7n+2)': {
        backgroundColor: brown[600],
      },

      '&:nth-of-type(7n+3)': {
        backgroundColor: cyan[600],
      },

      '&:nth-of-type(7n+4)': {
        backgroundColor: green[600],
      },

      '&:nth-of-type(7n+5)': {
        backgroundColor: indigo[600],
      },

      '&:nth-of-type(7n+6)': {
        backgroundColor: lime[600],
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Scroll1' });

export default useStyles;
