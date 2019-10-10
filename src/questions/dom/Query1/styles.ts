import { makeStyles, Theme } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  Commands: {
    '& button,button *': {
      textTransform: 'none',
    },
  },
  Modal: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  Card: {
    flex: 1,
    maxHeight: '100vh',
    overflowY: 'auto',
  },
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
    display: 'block',
    margin: `${theme.spacing(2)}px auto 0`,
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
