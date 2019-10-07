import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Container: {
    marginTop: theme.spacing(4),
  },
  Content: {
    marginTop: theme.spacing(2.5),
  },
  Questions: {
    marginTop: theme.spacing(4),

    '& code': {
      fontFamily: `'Courier New', Courier, monospace`,
      fontSize: 14,
      fontWeight: 600,
      color: `rgb(219, 104, 27)`,
    },
  },
}));

export default useStyles;
