import { makeStyles, createStyles } from '@material-ui/core';
import {
  borderRadius,
  innerBorderColor,
  outerBorderColor,
  outerBorderWidth,
} from '../constants';

const styles = () =>
  createStyles({
    root: {
      borderRadius,
      border: `${outerBorderWidth} solid ${outerBorderColor}`,
      borderCollapse: 'separate',
      borderSpacing: 0,
      overflow: 'hidden',

      '& th,td': {
        borderLeft: `1px solid ${innerBorderColor}`,
        borderTop: `1px solid ${innerBorderColor}`,
      },

      '& thead tr:first-child th': {
        borderTop: 0,
      },

      '& tr th:first-child,tr td:first-child': {
        borderLeft: 0,
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'RoundedTable3' });

export default useStyles;
