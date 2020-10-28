import { makeStyles, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = () =>
  createStyles({
    root: {},
    head: {
      backgroundColor: grey[900],
    },
  });

const useStyles = makeStyles(styles, { name: 'BaseTable' });

export default useStyles;
