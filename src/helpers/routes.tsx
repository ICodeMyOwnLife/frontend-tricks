import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteInfo } from 'types/app-common';

export const ROUTES: RouteInfo[] = [
  {
    name: 'DOM',
    path: 'dom',
    childRoutes: [
      {
        name: 'Cancel Request',
        path: '/dom/cancel-request',
        component: lazy(() => import('questions/dom/CancelRequest1')),
      },
      {
        name: 'Device Detection',
        path: '/dom/device-detection',
        component: lazy(() => import('questions/dom/DeviceDetection1')),
      },
      {
        name: 'Download',
        path: '/dom/download',
        component: lazy(() => import('questions/dom/Download1')),
      },
      {
        name: 'Drag Drop',
        path: '/dom/drag-drop',
        component: lazy(() => import('questions/dom/DragDrop1')),
      },
      {
        name: 'Excluded Input',
        path: '/dom/excluded-input',
        component: lazy(() => import('questions/dom/ExcludedInput1')),
      },
      {
        name: 'File Input',
        path: '/dom/file-input',
        component: lazy(() => import('questions/dom/FileInput1')),
      },
      {
        name: 'Live Edit',
        path: '/dom/live-edit',
        component: lazy(() => import('questions/dom/LiveEdit1')),
      },
      {
        name: 'Upload',
        path: '/dom/upload',
        component: lazy(() => import('questions/dom/Upload1')),
      },
    ],
  },
  {
    name: 'CSS',
    path: 'css',
    childRoutes: [],
  },
  {
    name: 'React',
    path: 'react',
    childRoutes: [],
  },
  {
    name: 'JavaScript',
    path: 'js',
    childRoutes: [],
  },
  {
    name: 'CI/CD',
    path: 'ci-cd',
    childRoutes: [],
  },
  {
    name: 'Git',
    path: 'git',
    childRoutes: [],
  },
  {
    name: 'Performance',
    path: 'performance',
    childRoutes: [],
  },
  {
    name: 'Webpack',
    path: 'webpack',
    childRoutes: [],
  },
];

export const renderLinks = (url: string, routes: RouteInfo[]) =>
  routes.map(({ name, path }) => (
    <NavLink key={name} to={`${url}/${path}`}>
      {name}
    </NavLink>
  ));
