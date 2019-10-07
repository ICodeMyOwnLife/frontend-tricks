export interface RouteInfo extends LinkInfo, OmitFrom<RouteProps, 'path'> {
  childRoutes?: RouteInfo[];
}

export interface LinkInfo {
  name: string;
  path: string;
}
