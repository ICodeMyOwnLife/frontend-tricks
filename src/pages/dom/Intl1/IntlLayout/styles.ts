import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: spacing(3, 4),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'IntlLayout' });

export default useStyles;
