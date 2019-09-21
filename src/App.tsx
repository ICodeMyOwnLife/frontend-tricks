import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
];

const App: React.FC = () => (
  <div className={classes.App}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav baseUrl="" routes={routes} />
      {renderRoutes('', routes)}
    </BrowserRouter>
  </div>
);

export default App;
