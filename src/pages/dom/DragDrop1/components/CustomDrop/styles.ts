import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      border: `2px solid ${blueGrey[400]}`,
      transition: '300ms all ease',
    },
    title: {
      margin: spacing(2, 0, 0),
      fontSize: 20,
      fontWeight: 600,
    },
    dropTargetGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: spacing(0, 2),
      width: '100%',
      height: 132,
      padding: spacing(2),
    },
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

const useStyles = makeStyles(styles, { name: 'CustomDrop' });

export default useStyles;
