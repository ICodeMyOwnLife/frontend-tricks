import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ zIndex }: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: zIndex.modal,
    },
  });

const useStyles = makeStyles(styles, { name: 'Spinner' });

export default useStyles;
