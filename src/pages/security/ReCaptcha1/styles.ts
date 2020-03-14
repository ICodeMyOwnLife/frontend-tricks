import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    buttonGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gridGap: spacing(2, 4),
      margin: spacing(3, 0),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'ReCaptcha1' });

export default useStyles;
