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
            /* webpackChunkName: "architecture__SinglePageApp1" */ 'pages/architecture/SinglePageApp1'
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
            /* webpackChunkName: "ci_cd__GitLab1" */ 'pages/ci_cd/GitLab1'
          ),
        ),
      },
    ],
  },
  {
    name: 'Chrome Devtools',
    path: 'chrome-devtools',
    childRoutes: [
      {
        name: 'Console',
        path: '/chrome-devtools/console',
        component: lazy(() =>
          import(
            /* webpackChunkName: "chrome_devtools__Console1" */ 'pages/chrome_devtools/Console1'
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
            /* webpackChunkName: "css__Background1" */ 'pages/css/Background1'
          ),
        ),
      },
      {
        name: 'Clipping',
        path: '/css/clipping',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__Clipping1" */ 'pages/css/Clipping1'
          ),
        ),
      },
      {
        name: 'Content',
        path: '/css/content',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Content1" */ 'pages/css/Content1'),
        ),
      },
      {
        name: 'Flex',
        path: '/css/flex',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Flex1" */ 'pages/css/Flex1'),
        ),
      },
      {
        name: 'Flex Overflow',
        path: '/css/flex-overflow',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__FlexOverflow1" */ 'pages/css/FlexOverflow1'
          ),
        ),
      },
      {
        name: 'Full Page',
        path: '/css/full-page',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__FullPage1" */ 'pages/css/FullPage1'
          ),
        ),
      },
      {
        name: 'Grid',
        path: '/css/grid',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Grid1" */ 'pages/css/Grid1'),
        ),
      },
      {
        name: 'Input',
        path: '/css/input',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Input1" */ 'pages/css/Input1'),
        ),
      },
      {
        name: 'Input Hacks',
        path: '/css/input-hacks',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__InputHacks1" */ 'pages/css/InputHacks1'
          ),
        ),
      },
      {
        name: 'Media Query',
        path: '/css/media-query',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__MediaQuery1" */ 'pages/css/MediaQuery1'
          ),
        ),
      },
      {
        name: 'Multi-Column',
        path: '/css/multi-column',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__MultiColumn1" */ 'pages/css/MultiColumn1'
          ),
        ),
      },
      {
        name: 'Newline',
        path: '/css/newline',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Newline1" */ 'pages/css/Newline1'),
        ),
      },
      {
        name: 'Replaced Elements',
        path: '/css/replaced-elements',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__ReplacedElements1" */ 'pages/css/ReplacedElements1'
          ),
        ),
      },
      {
        name: 'Scroll',
        path: '/css/scroll',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Scroll1" */ 'pages/css/Scroll1'),
        ),
      },
      {
        name: 'Shapes',
        path: '/css/shapes',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Shapes1" */ 'pages/css/Shapes1'),
        ),
      },
      {
        name: 'Table',
        path: '/css/table',
        component: lazy(() =>
          import(/* webpackChunkName: "css__Table1" */ 'pages/css/Table1'),
        ),
      },
      {
        name: 'Text Background',
        path: '/css/text-background',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__TextBackground1" */ 'pages/css/TextBackground1'
          ),
        ),
      },
      {
        name: 'Text Ellipsis',
        path: '/css/text-ellipsis',
        component: lazy(() =>
          import(
            /* webpackChunkName: "css__TextEllipsis1" */ 'pages/css/TextEllipsis1'
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
        name: 'Blob',
        path: '/dom/blob',
        component: lazy(() =>
          import(/* webpackChunkName: "dom__Blob1" */ 'pages/dom/Blob1'),
        ),
      },
      {
        name: 'Cancel Request',
        path: '/dom/cancel-request',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__CancelRequest1" */ 'pages/dom/CancelRequest1'
          ),
        ),
      },
      {
        name: 'Clipboard',
        path: '/dom/clipboard',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__Clipboard1" */ 'pages/dom/Clipboard1'
          ),
        ),
      },
      {
        name: 'Device Detection',
        path: '/dom/device-detection',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__DeviceDetection1" */ 'pages/dom/DeviceDetection1'
          ),
        ),
      },
      {
        name: 'Download',
        path: '/dom/download',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__Download1" */ 'pages/dom/Download1'
          ),
        ),
      },
      {
        name: 'Drag Drop',
        path: '/dom/drag-drop',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__DragDrop1" */ 'pages/dom/DragDrop1'
          ),
        ),
      },
      {
        name: 'Excluded Input',
        path: '/dom/excluded-input',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__ExcludedInput1" */ 'pages/dom/ExcludedInput1'
          ),
        ),
      },
      {
        name: 'File Input',
        path: '/dom/file-input',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__FileInput1" */ 'pages/dom/FileInput1'
          ),
        ),
      },
      {
        name: 'Intl',
        path: '/dom/intl',
        component: lazy(() =>
          import(/* webpackChunkName: "dom__Intl1" */ 'pages/dom/Intl1'),
        ),
      },
      {
        name: 'Live Edit',
        path: '/dom/live-edit',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__LiveEdit1" */ 'pages/dom/LiveEdit1'
          ),
        ),
      },
      {
        name: 'Media Query',
        path: '/dom/media-query',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__MediaQuery1" */ 'pages/dom/MediaQuery1'
          ),
        ),
      },
      {
        name: 'Select Elements',
        path: '/dom/select-elements',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__SelectElements1" */ 'pages/dom/SelectElements1'
          ),
        ),
      },
      {
        name: 'Upload',
        path: '/dom/upload',
        component: lazy(() =>
          import(/* webpackChunkName: "dom__Upload1" */ 'pages/dom/Upload1'),
        ),
      },
      {
        name: 'User Agent',
        path: '/dom/user-agent',
        component: lazy(() =>
          import(
            /* webpackChunkName: "dom__UserAgent1" */ 'pages/dom/UserAgent1'
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
          import(/* webpackChunkName: "js__Array1" */ 'pages/js/Array1'),
        ),
      },
      {
        name: 'Object',
        path: '/js/object',
        component: lazy(() =>
          import(/* webpackChunkName: "js__Object1" */ 'pages/js/Object1'),
        ),
      },
      {
        name: 'RegExp',
        path: '/js/regexp',
        component: lazy(() =>
          import(/* webpackChunkName: "js__RegExp1" */ 'pages/js/RegExp1'),
        ),
      },
      {
        name: 'String',
        path: '/js/string',
        component: lazy(() =>
          import(/* webpackChunkName: "js__String1" */ 'pages/js/String1'),
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
            /* webpackChunkName: "nodejs__Memory1" */ 'pages/nodejs/Memory1'
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
            /* webpackChunkName: "performance__Memory1" */ 'pages/performance/Memory1'
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
        name: 'Deployment',
        path: '/react/deployment',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Deployment1" */ 'pages/react/Deployment1'
          ),
        ),
      },
      {
        name: 'Element',
        path: '/react/element',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Element1" */ 'pages/react/Element1'
          ),
        ),
      },
      {
        name: 'Event',
        path: '/react/event',
        component: lazy(() =>
          import(/* webpackChunkName: "react__Event1" */ 'pages/react/Event1'),
        ),
      },
      {
        name: 'Jest',
        path: '/react/jest',
        component: lazy(() =>
          import(/* webpackChunkName: "react__Jest1" */ 'pages/react/Jest1'),
        ),
      },
      {
        name: 'Linter',
        path: '/react/linter',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__Linter1" */ 'pages/react/Linter1'
          ),
        ),
      },
      {
        name: 'Raw HTML',
        path: '/react/raw-html',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__RawHtml1" */ 'pages/react/RawHtml1'
          ),
        ),
      },
      {
        name: 'TypeScript',
        path: '/react/typescript',
        component: lazy(() =>
          import(
            /* webpackChunkName: "react__TypeScript1" */ 'pages/react/TypeScript1'
          ),
        ),
      },
    ],
  },
  {
    name: 'Security',
    path: 'security',
    childRoutes: [
      {
        name: 'ReCaptcha',
        path: '/security/recaptcha',
        component: lazy(() =>
          import(
            /* webpackChunkName: "security__ReCaptcha1" */ 'pages/security/ReCaptcha1'
          ),
        ),
      },
    ],
  },
  {
    name: 'Tools',
    path: 'tools',
    childRoutes: [
      {
        name: 'Bundle Size',
        path: '/tools/bundle-size',
        component: lazy(() =>
          import(
            /* webpackChunkName: "tools__BundleSize1" */ 'pages/tools/BundleSize1'
          ),
        ),
      },
      {
        name: 'Code Analysis',
        path: '/tools/code-analysis',
        component: lazy(() =>
          import(
            /* webpackChunkName: "tools__CodeAnalysis1" */ 'pages/tools/CodeAnalysis1'
          ),
        ),
      },
      {
        name: 'Commit',
        path: '/tools/commit',
        component: lazy(() =>
          import(
            /* webpackChunkName: "tools__Commit1" */ 'pages/tools/Commit1'
          ),
        ),
      },
      {
        name: 'Pre-Commit',
        path: '/tools/pre-commit',
        component: lazy(() =>
          import(
            /* webpackChunkName: "tools__PreCommit1" */ 'pages/tools/PreCommit1'
          ),
        ),
      },
      {
        name: 'Release',
        path: '/tools/release',
        component: lazy(() =>
          import(
            /* webpackChunkName: "tools__Release1" */ 'pages/tools/Release1'
          ),
        ),
      },
    ],
  },
  {
    name: 'VS Code',
    path: 'vs-code',
    childRoutes: [
      {
        name: 'Extensions',
        path: '/vs-code/extensions',
        component: lazy(() =>
          import(
            /* webpackChunkName: "vs-code__Extensions1" */ 'pages/vs_code/Extensions1'
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
            /* webpackChunkName: "webpack__TypeScript1" */ 'pages/webpack/TypeScript1'
          ),
        ),
      },
    ],
  },
];

export default ROUTES;
