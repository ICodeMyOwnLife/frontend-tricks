import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  Modal: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  Card: {
    flex: 1,
  },
  Display: {
    '& div': {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1, 1, 0),
      border: `1px solid ${grey[400]}`,
    },
  },
  Button: {
    display: 'block',
    margin: `${theme.spacing(2)}px auto 0`,
  },
  CodeEditor: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
