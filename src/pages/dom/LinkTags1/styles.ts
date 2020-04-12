import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    inputs: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
      gridGap: spacing(2, 3),
      marginBottom: spacing(3),
    },
    styleShow: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
      gridGap: spacing(2, 3),
      alignItems: 'center',
    },
    lt1Container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      fontSize: 32,
      fontWeight: 'bold',
      border: `1px solid currentColor`,
      borderRadius: 8,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'LinkTags1' });

export default useStyles;
