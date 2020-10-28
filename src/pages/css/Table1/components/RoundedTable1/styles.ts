import { makeStyles, createStyles } from '@material-ui/core';
import {
  borderRadius,
  innerBorderColor,
  outerBorderColor,
  outerBorderWidth,
} from '../constants';

const styles = () =>
  createStyles({
    wrapper: {
      padding: outerBorderWidth,
    },
    root: {
      border: `${outerBorderWidth} solid transparent`,
      borderRadius,
      borderCollapse: 'collapse',
      boxShadow: `0 0 0 ${outerBorderWidth} ${outerBorderColor}`,
      overflow: 'hidden',

      '& th, td': {
        border: `1px solid ${innerBorderColor}`,
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'RoundedTable1' });

export default useStyles;
