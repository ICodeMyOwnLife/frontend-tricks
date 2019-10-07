import { makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  Drawer: {
    width: drawerWidth,
  },
  Toolbar: {
    width: drawerWidth,
  },
}));

export default useStyles;
