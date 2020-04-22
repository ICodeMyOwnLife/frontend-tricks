import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    itemPanel: {
      padding: spacing(1.5),
    },
    item: {
      width: 180,
      minHeight: 20,
      backgroundColor: red[400],
    },
  });

const useStyles = makeStyles(styles, { name: 'Masonry' });

export default useStyles;
