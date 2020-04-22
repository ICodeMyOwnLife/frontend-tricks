import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      border: `1px solid ${blueGrey[400]}`,
      transition: '300ms all ease',

      '&$receivingDrag': {
        fontWeight: 'bold',
        backgroundColor: fade(blueGrey[700], 0.7),
        borderColor: blueGrey.A100,
        borderStyle: 'dashed',
      },
    },
    receivingDrag: {},
    title: {
      margin: spacing(2, 0, 0),
      fontSize: 20,
      fontWeight: 600,
    },
    dropTargetGroup: {},
    dropTarget: {},
    customElementGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: spacing(1.5, 0, 1),
    },
    customElement: {
      margin: spacing(1),
    },
  });

const useStyles = makeStyles(styles, { name: 'CustomDropTarget' });

export default useStyles;
