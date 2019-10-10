import { makeStyles, Theme } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  Display: {
    '& div,section,nav': {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1, 1, 0),
      backgroundColor: grey[50],
      border: `1px solid ${grey[400]}`,

      '&.selected': {
        backgroundColor: red[50],
        borderColor: red[400],
      },
    },
  },
  Button: {
    margin: `${theme.spacing(2)}px auto 0 0`,
    '&, & *': {
      textTransform: 'none',
    },
  },
  CodeEditor: {
    marginTop: theme.spacing(2),
  },
  Form: {
    marginTop: theme.spacing(2),
  },
  Result: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
