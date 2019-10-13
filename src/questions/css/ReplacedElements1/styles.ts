import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  FrameContainer: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    borderColor: theme.palette.grey[400],
    borderWidth: 1,
    borderStyle: 'solid',
  },
  Select: {
    width: '100%',
  },
  CardContainer: {
    marginTop: theme.spacing(4),
  },
  Card: {
    overflowX: 'auto',
  },
}));

export default useStyles;
