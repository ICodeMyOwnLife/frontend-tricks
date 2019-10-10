import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  CodeViewer: {
    '& pre': {
      margin: '0 !important',
      borderRadius: 6,
    },

    '&~$CodeViewer': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default useStyles;
