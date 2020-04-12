import { makeStyles, Theme, createStyles } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      '& pre': {
        margin: '0 !important',
        fontFamily: 'Fira Code',
        borderRadius: 6,
      },

      '&~$root': {
        marginTop: spacing(2),
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'CodeViewer' });

export default useStyles;
