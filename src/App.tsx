import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import AppLayout from 'AppLayout';
import DemoLayout from 'DemoLayout';

const App: React.FC = () => (
  <Box>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/app">
            <AppLayout />
          </Route>
          <Route path="/demo">
            <DemoLayout />
          </Route>
          <Redirect from="/" to="/app" exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Box>
);

export default App;
