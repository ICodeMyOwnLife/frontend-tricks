import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    button: {
      display: 'block',
      width: 192,
      margin: `16px auto 0`,
    },
  });

const useStyles = makeStyles(styles, { name: 'MyGroup' });

export default useStyles;
