import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 120,
      color: lime[500],
      border: `2px solid ${lime.A100}`,
      transition: '300ms all ease',

      '&$receivingDrag': {
        color: lime[300],
        backgroundColor: lime[900],
        borderColor: lime[500],
        borderStyle: 'dashed',
      },
    },
    receivingDrag: {},
    title: {
      margin: spacing(0, 0, 1),
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle: {
      margin: 0,
      fontSize: 14,
    },
  });

const useStyles = makeStyles(styles, { name: 'GeneralDropTarget' });

export default useStyles;
