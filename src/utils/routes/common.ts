import { NamedExoticComponent, lazy } from 'react';
import { RouteInfo, SimpleRouteInfo } from 'types/app-common';

const convertNameToPath = (name: string) =>
  encodeURIComponent(name.toLowerCase().replace(/[ /]/g, '-'));

const createPath = (basePath: string, name: string) =>
  `${basePath}/${convertNameToPath(name)}`;

const createSimpleRoute = (
  basePath: string,
  name: string,
  factory: ComponentFactory,
): SimpleRouteInfo => ({
  component: lazy(factory),
  name,
  path: createPath(basePath, name),
});

export const createSimpleRouteGenerator = (basePath: string) =>
  createSimpleRoute.bind(null, basePath);

export const createRouteGenerator = (basePath: string) => (
  name: string,
  children: [string, ComponentFactory][],
): RouteInfo => {
  const path = createPath(basePath, name);

  return {
    name,
    path,
    childRoutes: children.map(([childName, factory]) =>
      createSimpleRoute(path, childName, factory),
    ),
  };
};

type ComponentFactory = () => Promise<{ default: NamedExoticComponent }>;
