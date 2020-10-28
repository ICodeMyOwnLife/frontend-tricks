import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  borderRadius,
  innerBorderColor,
  outerBorderColor,
  outerBorderWidth,
} from '../constants';

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      backgroundColor: outerBorderColor,
      border: `${outerBorderWidth} solid transparent`,
      borderRadius,
      borderCollapse: 'collapse',
      overflow: 'hidden',

      '& th, td': {
        border: `1px solid ${innerBorderColor}`,
      },
    },
    body: {
      backgroundColor: palette.background.paper,
    },
  });

const useStyles = makeStyles(styles, { name: 'RoundedTable2' });

export default useStyles;
