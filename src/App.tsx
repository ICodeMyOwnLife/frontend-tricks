import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Nav from 'components/Nav';
import { RouteInfo, renderRoutes } from 'helpers/routes';
import classes from './App.module.scss';

const routes: RouteInfo[] = [
  {
    name: 'DOM',
    path: 'dom',
    component: lazy(() => import('questions/dom')),
  },
  {
    name: 'CSS',
    path: 'css',
    component: lazy(() => import('questions/css')),
  },
  {
    name: 'React',
    path: 'react',
    component: lazy(() => import('questions/react')),
  },
  {
    name: 'JavaScript',
    path: 'js',
    component: lazy(() => import('questions/js')),
  },
  {
    name: 'CI/CD',
    path: 'ci-cd',
    component: lazy(() => import('questions/ci_cd')),
  },
  {
    name: 'Git',
    path: 'git',
    component: lazy(() => import('questions/git')),
  },
  {
    name: 'Performance',
    path: 'performance',
    component: lazy(() => import('questions/performance')),
  },
];

const theme = createMuiTheme({});

const App: React.FC = () => (
  <div className={classes.App}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav baseUrl="" routes={routes} />
        {renderRoutes('', routes)}
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

export default App;
