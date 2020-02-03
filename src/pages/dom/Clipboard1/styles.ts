import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    pasteInput: {
      marginTop: spacing(3),
      textAlign: 'center',
    },
    pasteButton: {
      marginTop: spacing(2),
    },
    pastedImage: {
      display: 'block',
      maxWidth: '100%',
      marginTop: spacing(3),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    imageShow: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: spacing(3),
    },
    showedImage: {
      maxWidth: '100%',
    },
    copyButton: {
      marginTop: spacing(2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Clipboard1' });

export default useStyles;
