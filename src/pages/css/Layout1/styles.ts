import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
  });

const useStyles = makeStyles(styles, { name: 'Layout1' });

export default useStyles;
