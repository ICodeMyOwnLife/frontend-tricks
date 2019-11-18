import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    executeButton: {
      alignSelf: 'flex-end',
      width: 160,
      margin: spacing(2, 0),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'CodeExecuter' });

export default useStyles;
