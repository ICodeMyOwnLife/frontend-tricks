import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    list: {
      maxWidth: 480,
      maxHeight: 600,
      margin: `0 auto`,
      backgroundColor: grey[900],
      overflowY: 'auto',
    },
    listItemText: {
      display: 'inline',
    },
    loadMore: {
      textAlign: 'center',
    },
    progress: {
      margin: spacing(1, 2),
    },
  });

const useStyles = makeStyles(styles, { name: 'InfiniteScroll' });

export default useStyles;
