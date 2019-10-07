/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { Drawer, useTheme, Toolbar, Divider, List } from '@material-ui/core';
import AppLink from 'components/AppLink';
import NestableLinkItem from 'components/NestableLinkItem';
import useRouter from 'hooks/useRouter';
import { APP_NAME } from 'constants/common';
import { LinkInfo } from 'types/app-common';
import useStyles from './styles';

export const SideBarComponent: FC<SideBarProps> = ({
  drawerVisible,
  toggleDrawerVisible,
  routes,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const {
    location: { pathname },
  } = useRouter();

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
        <AppLink className={classes.HomeLink} variant="button" to="/">
          {APP_NAME}
        </AppLink>
      </Toolbar>
      <Divider />
      <List component="nav">
        {routes.map(props => (
          <NestableLinkItem
            key={props.path}
            nestedLevel={0}
            pathname={pathname}
            {...props}
          />
        ))}
      </List>
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
