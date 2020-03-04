import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Layout1' });

export default useStyles;
