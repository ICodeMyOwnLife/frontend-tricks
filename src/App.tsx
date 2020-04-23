import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import AppLayout from 'AppLayout';
import DemoLayout from 'DemoLayout';
import Playground from 'playground';
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
            <Route path="/playground" component={Playground} />
            <Redirect from="/" to="/app" exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
