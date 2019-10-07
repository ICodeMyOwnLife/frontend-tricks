/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, Suspense, Fragment, ReactNode } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { RouteInfo } from 'types/app-common';

const renderRoute = ({ path, childRoutes, ...props }: RouteInfo): ReactNode =>
  childRoutes ? (
    <Fragment key={path}>{childRoutes.map(r => renderRoute(r))}</Fragment>
  ) : (
    <Route<RouteProps> key={path} path={path} {...props} />
  );

export const AppRouterComponent: FC<AppRouterProps> = ({ routes }) => (
  <Suspense fallback="Loading...">
    <Switch>{routes.map(renderRoute)}</Switch>
  </Suspense>
);

const AppRouter = memo(AppRouterComponent);
AppRouter.displayName = 'AppRouter';
export default AppRouter;

export interface AppRouterProps {
  routes: RouteInfo[];
}
