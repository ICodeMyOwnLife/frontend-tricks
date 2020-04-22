import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    inputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: spacing(2, 4),
      marginBottom: spacing(3),
    },
    flexGroup: {
      display: 'grid',
      gridGap: `${spacing(3)}px 0`,
    },
    propsFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: spacing(1.5),
      backgroundColor: red[100],
    },
    item: {
      width: 180,
      minHeight: 20,
      margin: spacing(1.5),
      backgroundColor: red[400],
    },
    masonry: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'space-evenly',
      maxHeight: 720,
    },
  });

const useStyles = makeStyles(styles, { name: 'Flex1' });

export default useStyles;
