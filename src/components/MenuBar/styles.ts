import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  AppBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  Toolbar: {
    flexWrap: 'wrap',
  },
  HomeLink: {
    color: 'white',

    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
