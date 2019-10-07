/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, useMemo } from 'react';
import { Drawer, useTheme, Toolbar, Divider, List } from '@material-ui/core';
import AppLink from 'components/AppLink';
import NestableLinkItem from 'components/NestableLinkItem';
import { LinkInfo } from 'types/app-common';
import useStyles from './styles';

export const SideBarComponent: FC<SideBarProps> = ({
  drawerVisible,
  toggleDrawerVisible,
  routes,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const menu = useMemo(
    () => (
      <List component="nav">
        {routes.map(props => (
          <NestableLinkItem key={props.path} {...props} />
        ))}
      </List>
    ),
    [routes],
  );

  return (
    <Drawer
      className={classes.Drawer}
      variant="temporary"
      color="black"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={drawerVisible}
      onClose={toggleDrawerVisible}
      ModalProps={{ keepMounted: true }}
    >
      <Toolbar className={classes.Toolbar}>
        <AppLink variant="button" to="/">
          FE Tricks
        </AppLink>
      </Toolbar>
      <Divider />
      {menu}
    </Drawer>
  );
};

const SideBar = memo(SideBarComponent);
SideBar.displayName = 'SideBar';
export default SideBar;

export interface SideBarProps {
  drawerVisible: boolean;
  toggleDrawerVisible: VoidFunction;
  routes: LinkInfo[];
}
