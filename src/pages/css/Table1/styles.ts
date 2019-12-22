import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    tableWrapper: {
      maxHeight: 320,
      overflowY: 'auto',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Table1' });

export default useStyles;
