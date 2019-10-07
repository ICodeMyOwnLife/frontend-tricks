import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  Question: {
    fontWeight: 500,
  },
  Answer: {
    marginTop: theme.spacing(1.5),
    padding: 0,
    fontSize: 14,
    backgroundColor: grey[50],
    border: `1px solid ${grey[400]}`,
    borderRadius: 6,

    '& p': {
      padding: theme.spacing(0, 2.5),
    },

    '& img': {
      maxWidth: '100%',
    },
  },
  References: {
    margin: theme.spacing(3, 0, 0),

    '& ol': {
      marginTop: theme.spacing(1),
    },

    '& li': {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
