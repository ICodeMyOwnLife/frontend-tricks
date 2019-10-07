import React, { FC, memo } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import AppLink from 'components/AppLink';
import useStyles from './styles';

export const MenuBarComponent: FC<MenuBarProps> = ({ toggleDrawerVisible }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.AppBar}
      position="sticky"
      color="primary"
      elevation={1}
    >
      <Toolbar className={classes.Toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawerVisible}
        >
          <MenuIcon />
        </IconButton>
        <AppLink className={classes.ToolbarTitle} variant="button" to="/">
          FE Tricks
        </AppLink>
      </Toolbar>
    </AppBar>
  );
};

const MenuBar = memo(MenuBarComponent);
MenuBar.displayName = 'MenuBar';
export default MenuBar;

export interface MenuBarProps {
  toggleDrawerVisible: VoidFunction;
}
