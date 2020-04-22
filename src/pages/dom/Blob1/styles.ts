import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    result: {
      marginTop: spacing(3),
    },
    textarea: {
      whiteSpace: 'nowrap',
    },
  });

const useStyles = makeStyles(styles, { name: 'Blob1' });

export default useStyles;
