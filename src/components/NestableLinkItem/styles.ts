import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Title: {
    fontWeight: 500,
  },
  ListPadding: {
    padding: 0,
  },
  SelectedLinkItem: {
    color: theme.palette.primary.main,

    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
