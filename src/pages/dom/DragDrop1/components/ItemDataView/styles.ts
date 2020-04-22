import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    title: {
      margin: spacing(2.5, 0, 1.5),
    },
    content: {
      margin: spacing(0, 0, 0.5),
    },
  });

const useStyles = makeStyles(styles, { name: 'ItemDataView' });

export default useStyles;
