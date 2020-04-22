import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    horizontalContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',
      alignItems: 'stretch',
    },
    leftBar: {
      flex: '0 0 80px',
      backgroundColor: grey[300],
    },
    rightBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      flex: 1,
      minWidth: 0,
      marginLeft: spacing(1),
      padding: spacing(1),
      border: '1px solid',
      borderColor: grey[500],
    },
    leftColumn: {
      flex: '0 0 64px',
      backgroundColor: grey[400],
    },
    rightColumn: {
      flex: 1,
      minWidth: 0,
      marginLeft: spacing(1),
      overflowX: 'auto',
    },
    longBlock: {
      width: 2000,
      height: 120,
      backgroundColor: grey[500],
      border: '1px solid',
      borderColor: grey[100],
    },
    verticalContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      height: 800,
      margin: '0 auto',
    },
    topBar: {
      flex: '0 0 160px',
      backgroundColor: grey[400],
    },
    bottomBar: {
      flex: 1,
      minHeight: 0,
      marginTop: spacing(1),
      overflowY: 'auto',
    },
    tallBlock: {
      height: 2000,
      backgroundColor: grey[500],
      border: '1px solid',
      borderColor: grey[100],
    },
  });

const useStyles = makeStyles(styles, { name: 'FlexOverflow1' });

export default useStyles;
