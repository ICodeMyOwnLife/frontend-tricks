import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
  },
  Title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
