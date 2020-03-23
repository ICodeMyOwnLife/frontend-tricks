import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    videoPlay1: {
      display: 'grid',
      gridGap: spacing(2, 0),
      gridAutoFlow: 'row',
      justifyItems: 'center',
    },
    player1: {
      maxWidth: '100%',
    },
    playerInputs: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gridGap: spacing(2, 4),
      marginBottom: spacing(3),
    },
    urlInput: {
      gridColumn: '-1/1',
    },
    player2Container: {
      position: 'relative',
      paddingBottom: '56.25%', // 16/9 ratio
    },
    player2: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'PageVisibility1' });

export default useStyles;
