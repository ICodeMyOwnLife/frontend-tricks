import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    childRoute: {
      color: blueGrey.A200,
      textAlign: 'center',
    },
    buttons: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(2),
      justifyContent: 'center',
      margin: spacing(3, 0),
    },
    history: {
      marginBottom: spacing(1),
      fontSize: 12,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'HistoryListen' });

export default useStyles;
