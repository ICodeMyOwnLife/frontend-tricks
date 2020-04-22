import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey, red, blueGrey } from '@material-ui/core/colors';
import { EFFECTS_ALLOWED } from '../constants';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    text: {
      marginBottom: spacing(2.5),
      padding: spacing(1.5),
      border: `1px solid ${grey[200]}`,
    },
    image: {
      display: 'block',
      width: 240,
      margin: `0 auto ${spacing(2.5)}px`,
      padding: spacing(0, 2.5),
      backgroundColor: 'white',
      border: `1px solid ${red[100]}`,
    },
    dragData: {
      margin: 0,
      padding: spacing(2.5),

      '& p': {
        margin: spacing(0, 0, 1),
      },

      '& b': {
        fontWeight: 600,
      },
    },
    effectAllowedGroup: {
      display: 'grid',
      gridTemplateColumns: `repeat(${EFFECTS_ALLOWED.length}, 1fr)`,
      gridGap: spacing(1),
      margin: spacing(2.5, 0),
    },
    effectAllowedItem: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing(1),
      textAlign: 'center',
      border: `1px solid ${blueGrey[400]}`,

      '& h5,p': {
        margin: 0,
      },
    },
    customDraggableGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: spacing(1, 0, 0),
    },
    customDraggable: {
      margin: spacing(0, 0.5),
    },
  });

const useStyles = makeStyles(styles, { name: 'BasicDragDrop' });

export default useStyles;
