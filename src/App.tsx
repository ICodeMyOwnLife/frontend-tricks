import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline, Box, Container } from '@material-ui/core';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MenuBar from 'components/MenuBar';
import SideBar from 'components/SideBar';
import AppRouter from 'components/AppRouter';
import useToggle from 'hooks/useToggle';
import { ROUTES } from 'helpers/routes';

const theme = createMuiTheme({});

const App: React.FC = () => {
  const [drawerVisible, toggleDrawerVisible] = useToggle(false);

  return (
    <Box>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MenuBar toggleDrawerVisible={toggleDrawerVisible} />
          <SideBar
            drawerVisible={drawerVisible}
            toggleDrawerVisible={toggleDrawerVisible}
            routes={ROUTES}
          />
          <Container>
            <AppRouter routes={ROUTES} />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
};

export default App;
