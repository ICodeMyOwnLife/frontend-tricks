import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  Title: {
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
