import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  AppBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  Toolbar: {
    flexWrap: 'wrap',
  },
  ToolbarTitle: {
    color: 'white',
  },
}));

export default useStyles;
