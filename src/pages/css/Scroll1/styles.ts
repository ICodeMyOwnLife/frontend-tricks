import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import {
  amber,
  blue,
  brown,
  cyan,
  green,
  grey,
  indigo,
  lime,
  yellow,
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
    '@keyframes targeted': {
      '0%': {
        color: cyan[600],
        backgroundColor: 'transparent',
      },
      '50%': {
        color: cyan[900],
        backgroundColor: fade(yellow[200], 0.7),
      },
      '100%': {
        color: cyan[600],
        backgroundColor: 'transparent',
      },
    },
    scrollHeading: {
      width: 'fit-content',
      scrollMarginTop: `${spacing(9)}px`,
      scrollSnapAlign: 'start',

      '&:target': {
        animation: `$targeted 2s ease 0.4s`,
      },
    },
    scrollLinkBar: {
      position: 'sticky',
      display: 'grid',
      gridTemplateRows: 'auto auto',
      bottom: 0,
      width: 'fit-content',
      margin: '0 auto',
      padding: spacing(2, 3, 0),
      backgroundColor: grey[900],
    },
    scrollLinks: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gridGap: spacing(0, 3),
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
    overScrollInputs: {
      display: 'grid',
      gridTemplateColumns: `repeat(3, 1fr)`,
      gridGap: spacing(2, 4),
      marginBottom: spacing(3),
    },
    overScroll: {
      position: 'relative',
      height: 360,
      overflowY: 'auto',
      backgroundImage: `linear-gradient(to top, #16222a, #3a6073)`,
    },
    overScrollContent: {
      height: 2400,
    },
    overScrollDialog: {
      position: 'sticky',
      bottom: 0,
      width: 240,
      height: 240,
      marginLeft: 'auto',
      border: `1px solid ${grey[300]}`,
      opacity: 0.5,
      overflowY: 'auto',
    },
    overScrollDialogContent: {
      height: 1200,
      backgroundImage: `linear-gradient(to top, #ff4b1f, #ff9068)`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Scroll1' });

export default useStyles;
