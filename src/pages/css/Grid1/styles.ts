import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    gridWrapper: {
      display: 'grid',
      gridGap: `${spacing(3)}px 0`,
    },
    gridCell: {
      backgroundColor: red[500],
      opacity: 0.5,
    },
    inputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: `${spacing(2)}px ${spacing(4)}px`,
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
      gridGap: `${spacing(3)}px ${spacing(4)}px`,
    },
    responsiveGridCell: {
      height: 64,
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
      "header header header header header header"
      "sidebar . . . . ."
      "sidebar . main main . ."
      "sidebar . main main . ."
      "sidebar . . . . ."
      "sidebar footer footer footer footer footer"`,
      backgroundColor: fade(red[100], 0.1),
    },
    areaGridCell: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 32,
      fontWeight: 'bold',
      color: grey[900],
      opacity: 0.5,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Grid1' });

export default useStyles;
