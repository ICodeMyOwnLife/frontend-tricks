import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import AppLayout from 'AppLayout';
import DemoLayout from 'DemoLayout';
import history from 'utils/history';
import useStyles from './App.styles';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/app">
              <AppLayout />
            </Route>
            <Route path="/demo">
              <DemoLayout />
            </Route>
            <Redirect from="/" to="/app" exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
