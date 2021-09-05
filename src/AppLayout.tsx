import { FC, memo } from 'react';
import { Container } from '@material-ui/core';
import { useToggle } from 'cb-hooks';
import MenuBar from 'components/MenuBar';
import SideBar from 'components/SideBar';
import AppRouter from 'components/AppRouter';
import appRoutes from 'utils/routes/appRoutes';

export const AppLayoutComponent: FC = () => {
  const [drawerVisible, toggleDrawerVisible] = useToggle(false);

  return (
    <div>
      <MenuBar toggleDrawerVisible={toggleDrawerVisible} />
      <SideBar
        drawerVisible={drawerVisible}
        toggleDrawerVisible={toggleDrawerVisible}
        routes={appRoutes}
      />
      <Container>
        <AppRouter routes={appRoutes} />
      </Container>
    </div>
  );
};

const AppLayout = memo(AppLayoutComponent);
AppLayout.displayName = 'AppLayout';
export default AppLayout;
