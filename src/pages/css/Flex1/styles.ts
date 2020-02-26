import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    selectGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: `${spacing(2)}px ${spacing(4)}px`,
      marginBottom: spacing(3),
    },
    studyFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: 420,
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

const useStyles = makeStyles(styles, { classNamePrefix: 'Flex1' });

export default useStyles;
