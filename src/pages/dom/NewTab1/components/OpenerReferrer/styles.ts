import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    opener: {
      display: 'grid',
      gridGap: spacing(2, 0),
      justifyItems: 'center',
    },
    links: {
      display: 'grid',
      gridGap: spacing(2, 2),
      justifyItems: 'center',
    },
  });

const useStyles = makeStyles(styles, { name: 'OpenerReferer' });

export default useStyles;
