import React, { ComponentType, Suspense } from 'react';
import {
  RouteComponentProps,
  NavLink,
  Route,
  RouteProps,
} from 'react-router-dom';

export const renderLinks = (url: string, routes: RouteInfo[]) =>
  routes.map(({ name, path }) => (
    <NavLink key={name} to={`${url}/${path}`}>
      {name}
    </NavLink>
  ));

export const renderRoutes = (url: string, routes: RouteInfo[]) => (
  <Suspense fallback={<p className="mt-5">Loading...</p>}>
    {routes.map(({ name, path, component, exact }) => (
      <Route<RouteProps>
        key={name}
        path={`${url}/${path}`}
        component={component}
        exact={exact}
      />
    ))}
  </Suspense>
);

export interface RouteInfo {
  name: string;
  path: string;
  component: ComponentType<RouteComponentProps>;
  exact?: boolean;
}
