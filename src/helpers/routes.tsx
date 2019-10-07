import { lazy } from 'react';
import { RouteInfo } from 'types/app-common';

const ROUTES: RouteInfo[] = [
  {
    name: 'CI/CD',
    path: 'ci-cd',
    childRoutes: [
      {
        name: 'GitLab',
        path: '/ci-cd/gitlab',
        component: lazy(() => import('questions/ci_cd/GitLab1')),
      },
    ],
  },
  {
    name: 'CSS',
    path: 'css',
    childRoutes: [
      {
        name: 'Clipping',
        path: '/css/clipping',
        component: lazy(() => import('questions/css/Clipping1')),
      },
      {
        name: 'Content',
        path: '/css/content',
        component: lazy(() => import('questions/css/Content1')),
      },
      {
        name: 'Flex Overflow',
        path: '/css/flex-overflow',
        component: lazy(() => import('questions/css/FlexOverflow1')),
      },
      {
        name: 'Full Page',
        path: '/css/full-page',
        component: lazy(() => import('questions/css/FullPage')),
      },
      {
        name: 'Newline',
        path: '/css/newline',
        component: lazy(() => import('questions/css/Newline1')),
      },
      {
        name: 'Replaced Elements',
        path: '/css/replaced-elements',
        component: lazy(() => import('questions/css/ReplacedElements1')),
      },
      {
        name: 'Shapes',
        path: '/css/shapes',
        component: lazy(() => import('questions/css/Shapes1')),
      },
      {
        name: 'Text Background',
        path: '/css/text-background',
        component: lazy(() => import('questions/css/TextBackground1')),
      },
      {
        name: 'Text Ellipsis',
        path: '/css/text-ellipsis',
        component: lazy(() => import('questions/css/TextEllipsis1')),
      },
    ],
  },
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
    name: 'Git',
    path: 'git',
    childRoutes: [
      {
        name: 'Pre-Commit',
        path: '/git/pre-commit',
        component: lazy(() => import('questions/git/PreCommit1')),
      },
    ],
  },
  {
    name: 'JavaScript',
    path: 'js',
    childRoutes: [
      {
        name: 'Array',
        path: '/js/array',
        component: lazy(() => import('questions/js/Array1')),
      },
    ],
  },
  {
    name: 'NodeJS',
    path: 'nodejs',
    childRoutes: [
      {
        name: 'Memory',
        path: '/nodejs/memory',
        component: lazy(() => import('questions/nodejs/Memory1')),
      },
    ],
  },
  {
    name: 'Performance',
    path: 'performance',
    childRoutes: [
      {
        name: 'Memory',
        path: '/performance/memory',
        component: lazy(() => import('questions/performance/Memory1')),
      },
    ],
  },
  {
    name: 'React',
    path: 'react',
    childRoutes: [
      {
        name: 'Bundle Size',
        path: '/react/bundle-size',
        component: lazy(() => import('questions/react/BundleSize1')),
      },
      {
        name: 'Deployment',
        path: '/react/deployment',
        component: lazy(() => import('questions/react/Deployment1')),
      },
      {
        name: 'Element',
        path: '/react/element',
        component: lazy(() => import('questions/react/Element1')),
      },
      {
        name: 'Event',
        path: '/react/event',
        component: lazy(() => import('questions/react/Event1')),
      },
      {
        name: 'Jest',
        path: '/react/jest',
        component: lazy(() => import('questions/react/Jest1')),
      },
      {
        name: 'Raw HTML',
        path: '/react/raw-html',
        component: lazy(() => import('questions/react/RawHtml1')),
      },
      {
        name: 'TypeScript',
        path: '/react/typescript',
        component: lazy(() => import('questions/react/TypeScript1')),
      },
    ],
  },
  {
    name: 'Webpack',
    path: 'webpack',
    childRoutes: [
      {
        name: 'Languages',
        path: '/webpack/languages',
        component: lazy(() => import('questions/webpack/Languages1')),
      },
    ],
  },
];

export default ROUTES;
