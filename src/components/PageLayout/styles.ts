import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(4),
    },
    content: {
      marginTop: spacing(2.5),
    },
  });

const useStyles = makeStyles(styles, { name: 'PageLayout' });

export default useStyles;
