import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridAutoFlow: 'row',
      gridGap: spacing(3),
    },
    button: {
      justifySelf: 'end',
    },
  });

const useStyles = makeStyles(styles, { name: 'Communication' });

export default useStyles;
