import { lazy } from 'react';
import { RouteInfo } from 'types/app-common';

const ROUTES: RouteInfo[] = [
  {
    name: 'Architecture',
    path: 'architecture',
    childRoutes: [
      {
        name: 'Single Page App',
        path: '/architecture/single-page-app',
        component: lazy(() =>
          import(
            /* webpackChunkName: "architecture__SinglePageApp1" */ 'questions/architecture/SinglePageApp1'
          ),
        ),
      },
    ],
  },
  {
    name: 'CI/CD',
    path: 'ci-cd',
    childRoutes: [
      {
        name: 'GitLab',
        path: '/ci-cd/gitlab',
        component: lazy(() =>
          import(
            /* webpackChunkName: "ci_cd__GitLab1" */ 'questions/ci_cd/GitLab1'
          ),
        ),
      },
    ],
  },
  {
    name: 'CSS',
    path: 'css',
    childRoutes: [
      {
        name: 'Background',
        path: '/css/background',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Background1" */ 'questions/css/Background1'
          ),
        ),
      },
      {
        name: 'Clipping',
        path: '/css/clipping',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Clipping1" */ 'questions/css/Clipping1'
          ),
        ),
      },
      {
        name: 'Content',
        path: '/css/content',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Content1" */ 'questions/css/Content1'
          ),
        ),
      },
      {
        name: 'Flex Overflow',
        path: '/css/flex-overflow',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__FlexOverflow1" */ 'questions/css/FlexOverflow1'
          ),
        ),
      },
      {
        name: 'Full Page',
        path: '/css/full-page',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__FullPage1" */ 'questions/css/FullPage1'
          ),
        ),
      },
      {
        name: 'Input Hacks',
        path: '/css/input-hacks',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__InputHacks1" */ 'questions/css/InputHacks1'
          ),
        ),
      },
      {
        name: 'Media Query',
        path: '/css/media-query',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__MediaQuery1" */ 'questions/css/MediaQuery1'
          ),
        ),
      },
      {
        name: 'Newline',
        path: '/css/newline',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Newline1" */ 'questions/css/Newline1'
          ),
        ),
      },
      {
        name: 'Replaced Elements',
        path: '/css/replaced-elements',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__ReplacedElements1" */ 'questions/css/ReplacedElements1'
          ),
        ),
      },
      {
        name: 'Shapes',
        path: '/css/shapes',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Shapes1" */ 'questions/css/Shapes1'
          ),
        ),
      },
      {
        name: 'Text Background',
        path: '/css/text-background',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__TextBackground1" */ 'questions/css/TextBackground1'
          ),
        ),
      },
      {
        name: 'Text Ellipsis',
        path: '/css/text-ellipsis',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__TextEllipsis1" */ 'questions/css/TextEllipsis1'
          ),
        ),
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__CancelRequest1" */ 'questions/dom/CancelRequest1'
          ),
        ),
      },
      {
        name: 'Device Detection',
        path: '/dom/device-detection',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__DeviceDetection1" */ 'questions/dom/DeviceDetection1'
          ),
        ),
      },
      {
        name: 'Download',
        path: '/dom/download',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__Download1" */ 'questions/dom/Download1'
          ),
        ),
      },
      {
        name: 'Drag Drop',
        path: '/dom/drag-drop',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__DragDrop1" */ 'questions/dom/DragDrop1'
          ),
        ),
      },
      {
        name: 'Excluded Input',
        path: '/dom/excluded-input',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__ExcludedInput1" */ 'questions/dom/ExcludedInput1'
          ),
        ),
      },
      {
        name: 'File Input',
        path: '/dom/file-input',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__FileInput1" */ 'questions/dom/FileInput1'
          ),
        ),
      },
      {
        name: 'Live Edit',
        path: '/dom/live-edit',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__LiveEdit1" */ 'questions/dom/LiveEdit1'
          ),
        ),
      },
      {
        name: 'Media Query',
        path: '/dom/media-query',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__MediaQuery1" */ 'questions/dom/MediaQuery1'
          ),
        ),
      },
      {
        name: 'Query',
        path: '/dom/query',
        component: lazy(() =>
          import(/* webpackChunkName: "dom__Query1" */ 'questions/dom/Query1'),
        ),
      },
      {
        name: 'Upload',
        path: '/dom/upload',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__Upload1" */ 'questions/dom/Upload1'
          ),
        ),
      },
      {
        name: 'User Agent',
        path: '/dom/user-agent',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__UserAgent1" */ 'questions/dom/UserAgent1'
          ),
        ),
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "git__PreCommit1" */ 'questions/git/PreCommit1'
          ),
        ),
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
        component: lazy(() =>
          import(/* webpackChunkName: "js__Array1" */ 'questions/js/Array1'),
        ),
      },
      {
        name: 'Object',
        path: '/js/object',
        component: lazy(() =>
          import(/* webpackChunkName: "js__Object1" */ 'questions/js/Object1'),
        ),
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "nodejs__Memory1" */ 'questions/nodejs/Memory1'
          ),
        ),
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "performance__Memory1" */ 'questions/performance/Memory1'
          ),
        ),
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__BundleSize1" */ 'questions/react/BundleSize1'
          ),
        ),
      },
      {
        name: 'Deployment',
        path: '/react/deployment',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Deployment1" */ 'questions/react/Deployment1'
          ),
        ),
      },
      {
        name: 'Element',
        path: '/react/element',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Element1" */ 'questions/react/Element1'
          ),
        ),
      },
      {
        name: 'Event',
        path: '/react/event',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Event1" */ 'questions/react/Event1'
          ),
        ),
      },
      {
        name: 'Jest',
        path: '/react/jest',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Jest1" */ 'questions/react/Jest1'
          ),
        ),
      },
      {
        name: 'Linter',
        path: '/react/linter',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Linter1" */ 'questions/react/Linter1'
          ),
        ),
      },
      {
        name: 'Raw HTML',
        path: '/react/raw-html',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__RawHtml1" */ 'questions/react/RawHtml1'
          ),
        ),
      },
      {
        name: 'TypeScript',
        path: '/react/typescript',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__TypeScript1" */ 'questions/react/TypeScript1'
          ),
        ),
      },
    ],
  },
  {
    name: 'Webpack',
    path: 'webpack',
    childRoutes: [
      {
        name: 'TypeScript',
        path: '/webpack/typescript',
        component: lazy(() =>
          import(
            /* webpackChunkName: "webpack__TypeScript1" */ 'questions/webpack/TypeScript1'
          ),
        ),
      },
    ],
  },
];

export default ROUTES;
