import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(3),
  },
  Form: {
    marginBottom: theme.spacing(2),
  },
  FileInput: {
    display: 'block',
    margin: `${theme.spacing(2)}px 0`,
    textAlign: 'right',
  },
}));

export default useStyles;
