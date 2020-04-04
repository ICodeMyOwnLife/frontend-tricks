import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    inputs: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
      gridGap: spacing(2, 3),
      marginBottom: spacing(3),
    },
    favicons: {},
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'LinkTags1' });

export default useStyles;
