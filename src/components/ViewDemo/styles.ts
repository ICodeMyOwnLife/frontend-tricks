import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'block',
      margin: spacing(2, 0),
      textAlign: 'center',
    },
  });

const useStyles = makeStyles(styles, { name: 'ViewDemo' });

export default useStyles;
