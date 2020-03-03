import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { red, grey, orange } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    gridWrapper: {
      display: 'grid',
      gridGap: spacing(3, 0),
    },
    gridCell: {
      backgroundColor: red[900],
    },
    inputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: spacing(2, 4),
      marginBottom: spacing(3),
    },
    propsGridWrapper: {
      position: 'relative',
    },
    propsGrid: {
      display: 'grid',
      gridTemplateColumns: '20% 30% 20%',
      gridTemplateRows: '40% 30%',
      height: 320,
    },
    backLayer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: fade(red[100], 0.1),
    },
    backLayerCell: {
      border: `1px dashed ${red[200]}`,
    },
    responsiveGridContainer: {
      position: 'relative',
    },
    responsiveGridTitle: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 32,
      color: red[100],
      backgroundColor: fade(red[100], 0.1),
    },
    responsiveGrid: {
      display: 'grid',
      gridGap: spacing(3, 4),
    },
    responsiveGridCell: {
      height: 64,
      opacity: 0.5,
    },
    autoFillGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    },
    autoFitGrid: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    },
    areaGrid: {
      display: 'grid',
      gridTemplateColumns: '30% 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '60px 40px 30px 40px 30px 60px',
      gridTemplateAreas: `
      "header  header header header header header"
      "sidebar ...... ...... ...... ...... ......"
      "sidebar ...... main   main   ...... ......"
      "sidebar ...... main   main   ...... ......"
      "sidebar ...... ...... ...... ...... ......"
      "sidebar footer footer footer footer footer"`,
      backgroundColor: fade(red[100], 0.1),
    },
    areaGridCell: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      color: grey[900],
      opacity: 0.5,
    },
    fluidGrid: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
      gridGap: spacing(3, 4),
      gridAutoFlow: 'dense row',
    },
    fluidGridCell: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: 64,
      fontSize: 32,
      color: 'white',

      '&:nth-of-type(17n + 5)': {
        gridColumn: '2 / -1',
      },

      '&:nth-of-type(31n + 11)': {
        gridColumn: '1 / -2',
        height: 128,
        backgroundColor: orange[900],
      },
    },

    '@media (max-width: 540px)': {
      fluidGridCell: {
        gridColumn: '1 !important',
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Grid1' });

export default useStyles;
