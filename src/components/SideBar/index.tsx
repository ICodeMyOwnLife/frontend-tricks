import { FC, memo } from 'react';
import { useLocation } from 'react-router';
import { Drawer, useTheme, Toolbar, Divider, List } from '@material-ui/core';
import AppLink from 'components/AppLink';
import NestableLinkItem from 'components/NestableLinkItem';
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
  const { pathname } = useLocation();

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
            {...props}
            key={props.path}
            nestedLevel={0}
            pathname={pathname}
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
