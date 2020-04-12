import React, { FC, memo, Suspense, Fragment, ReactNode } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteInfo } from 'types/app-common';

const renderRoute = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  path,
  exact = false,
  childRoutes,
  ...props
}: RouteInfo): ReactNode =>
  childRoutes ? (
    <Fragment key={path}>{childRoutes.map(r => renderRoute(r))}</Fragment>
  ) : (
    <Route<RouteProps> key={path} path={path} exact={exact} {...props} />
  );

export const AppRouterComponent: FC<AppRouterProps> = ({ routes }) => (
  <Suspense fallback="Loading...">{routes.map(renderRoute)}</Suspense>
);

const AppRouter = memo(AppRouterComponent);
AppRouter.displayName = 'AppRouter';
export default AppRouter;

export interface AppRouterProps {
  routes: RouteInfo[];
}
