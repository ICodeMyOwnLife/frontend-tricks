import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  Drawer: {
    width: drawerWidth,
  },
  Toolbar: {
    width: drawerWidth,
  },
  HomeLink: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
