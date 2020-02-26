import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    masonryGrid: {
      display: 'grid',
      gridGap: `${spacing(3)}px 0`,
    },
    masonry: {
      columnCount: 5,
      columnGap: spacing(2),
      backgroundColor: red[100],
    },
    masonryItemPanel1: {
      breakInside: 'avoid',
    },
    masonryItemPanel2: {
      display: 'inline-block',
      width: '100%',
    },
    masonryItem: {
      margin: '0 auto',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'MultiColumn1' });

export default useStyles;
