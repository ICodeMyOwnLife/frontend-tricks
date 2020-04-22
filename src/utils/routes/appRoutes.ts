import { createRouteGenerator } from './common';

const generateAppRoute = createRouteGenerator('/app');

const appRoutes = [
  generateAppRoute('Architecture', [
    [
      'Single Page App',
      () =>
        import(
          /* webpackChunkName: "arch_SPA1" */ 'pages/architecture/SinglePageApp1'
        ),
    ],
  ]),
  generateAppRoute('CI/CD', [
    [
      'GitLab',
      () =>
        import(/* webpackChunkName: "cicd_GitLab1" */ 'pages/ci_cd/GitLab1'),
    ],
  ]),
  generateAppRoute('Chrome Devtools', [
    [
      'Console',
      () =>
        import(
          /* webpackChunkName: "devtools_Console1" */ 'pages/chrome_devtools/Console1'
        ),
    ],
  ]),
  generateAppRoute('CSS', [
    [
      'Animation',
      () =>
        import(/* webpackChunkName: "css_Animation1" */ 'pages/css/Animation1'),
    ],
    [
      'Aspect Ratio Box',
      () =>
        import(
          /* webpackChunkName: "css_AspectRatioBox1" */ 'pages/css/AspectRatioBox1'
        ),
    ],
    [
      'Background',
      () =>
        import(
          /* webpackChunkName: "css_Background1" */ 'pages/css/Background1'
        ),
    ],
    [
      'Clipping',
      () =>
        import(/* webpackChunkName: "css_Clipping1" */ 'pages/css/Clipping1'),
    ],
    [
      'Content',
      () => import(/* webpackChunkName: "css_Content1" */ 'pages/css/Content1'),
    ],
    [
      'Flex',
      () => import(/* webpackChunkName: "css_Flex1" */ 'pages/css/Flex1'),
    ],
    [
      'Flex Overflow',
      () =>
        import(
          /* webpackChunkName: "css_FlexOverflow1" */ 'pages/css/FlexOverflow1'
        ),
    ],
    [
      'Full Page',
      () =>
        import(/* webpackChunkName: "css_FullPage1" */ 'pages/css/FullPage1'),
    ],
    [
      'Gradient',
      () =>
        import(/* webpackChunkName: "css_Gradient1" */ 'pages/css/Gradient1'),
    ],
    [
      'Grid',
      () => import(/* webpackChunkName: "css_Grid1" */ 'pages/css/Grid1'),
    ],
    [
      'Input',
      () => import(/* webpackChunkName: "css_Input1" */ 'pages/css/Input1'),
    ],
    [
      'Input Hacks',
      () =>
        import(
          /* webpackChunkName: "css_InputHacks1" */ 'pages/css/InputHacks1'
        ),
    ],
    [
      'Media Query',
      () =>
        import(
          /* webpackChunkName: "css_MediaQuery1" */ 'pages/css/MediaQuery1'
        ),
    ],
    [
      'Multi-Column',
      () =>
        import(
          /* webpackChunkName: "css_MultiColumn1" */ 'pages/css/MultiColumn1'
        ),
    ],
    [
      'Newline',
      () => import(/* webpackChunkName: "css_Newline1" */ 'pages/css/Newline1'),
    ],
    [
      'Pseudo-Element',
      () =>
        import(
          /* webpackChunkName: "css_PseudoElement1" */ 'pages/css/PseudoElement1'
        ),
    ],
    [
      'Replaced Elements',
      () =>
        import(
          /* webpackChunkName: "css_ReplacedElements1" */ 'pages/css/ReplacedElements1'
        ),
    ],
    [
      'Scroll',
      () => import(/* webpackChunkName: "css_Scroll1" */ 'pages/css/Scroll1'),
    ],
    [
      'Scrollbar',
      () =>
        import(/* webpackChunkName: "css_Scrollbar1" */ 'pages/css/Scrollbar1'),
    ],
    [
      'Shapes',
      () => import(/* webpackChunkName: "css_Shapes1" */ 'pages/css/Shapes1'),
    ],
    [
      'Specificity',
      () =>
        import(
          /* webpackChunkName: "css_Specificity1" */ 'pages/css/Specificity1'
        ),
    ],
    [
      'Table',
      () => import(/* webpackChunkName: "css_Table1" */ 'pages/css/Table1'),
    ],
    [
      'Text Background',
      () =>
        import(
          /* webpackChunkName: "css_TextBackground1" */ 'pages/css/TextBackground1'
        ),
    ],
    [
      'Text Ellipsis',
      () =>
        import(
          /* webpackChunkName: "css_TextEllipsis1" */ 'pages/css/TextEllipsis1'
        ),
    ],
    [
      'Transform',
      () =>
        import(/* webpackChunkName: "css_Transform1" */ 'pages/css/Transform1'),
    ],
  ]),
  generateAppRoute('DOM', [
    [
      'Blob',
      () => import(/* webpackChunkName: "dom_Blob1" */ 'pages/dom/Blob1'),
    ],
    [
      'Cancel Request',
      () =>
        import(
          /* webpackChunkName: "dom_CancelRequest1" */ 'pages/dom/CancelRequest1'
        ),
    ],
    [
      'Canvas',
      () => import(/* webpackChunkName: "dom_Canvas1" */ 'pages/dom/Canvas1'),
    ],
    [
      'Clipboard',
      () =>
        import(/* webpackChunkName: "dom_Clipboard1" */ 'pages/dom/Clipboard1'),
    ],
    [
      'Device Detection',
      () =>
        import(
          /* webpackChunkName: "dom_DeviceDetection1" */ 'pages/dom/DeviceDetection1'
        ),
    ],
    [
      'Download',
      () =>
        import(/* webpackChunkName: "dom_Download1" */ 'pages/dom/Download1'),
    ],
    [
      'Drag Drop',
      () =>
        import(/* webpackChunkName: "dom_DragDrop1" */ 'pages/dom/DragDrop1'),
    ],
    [
      'Excluded Input',
      () =>
        import(
          /* webpackChunkName: "dom_ExcludedInput1" */ 'pages/dom/ExcludedInput1'
        ),
    ],
    [
      'File Input',
      () =>
        import(/* webpackChunkName: "dom_FileInput1" */ 'pages/dom/FileInput1'),
    ],
    [
      'History',
      () => import(/* webpackChunkName: "dom_History1" */ 'pages/dom/History1'),
    ],
    [
      'Intl',
      () => import(/* webpackChunkName: "dom_Intl1" */ 'pages/dom/Intl1'),
    ],
    ['IP', () => import(/* webpackChunkName: "dom_IP1" */ 'pages/dom/IP1')],
    [
      'Link Tags',
      () =>
        import(/* webpackChunkName: "dom_LinkTags1" */ 'pages/dom/LinkTags1'),
    ],
    [
      'Live Edit',
      () =>
        import(/* webpackChunkName: "dom_LiveEdit1" */ 'pages/dom/LiveEdit1'),
    ],
    [
      'Media Query',
      () =>
        import(
          /* webpackChunkName: "dom_MediaQuery1" */ 'pages/dom/MediaQuery1'
        ),
    ],
    [
      'Page Visibility',
      () =>
        import(
          /* webpackChunkName: "dom_PageVisibility1" */ 'pages/dom/PageVisibility1'
        ),
    ],
    [
      'Select Elements',
      () =>
        import(
          /* webpackChunkName: "dom_SelectElements1" */ 'pages/dom/SelectElements1'
        ),
    ],
    [
      'Scroll',
      () => import(/* webpackChunkName: "dom_Scroll1" */ 'pages/dom/Scroll1'),
    ],
    [
      'Upload',
      () => import(/* webpackChunkName: "dom_Upload1" */ 'pages/dom/Upload1'),
    ],
    [
      'User Agent',
      () =>
        import(/* webpackChunkName: "dom_UserAgent1" */ 'pages/dom/UserAgent1'),
    ],
  ]),
  generateAppRoute('JavaScript', [
    [
      'Array',
      () => import(/* webpackChunkName: "js_Array1" */ 'pages/js/Array1'),
    ],
    [
      'Module',
      () => import(/* webpackChunkName: "js_Module1" */ 'pages/js/Module1'),
    ],
    [
      'Object',
      () => import(/* webpackChunkName: "js_Object1" */ 'pages/js/Object1'),
    ],
    [
      'RegExp',
      () => import(/* webpackChunkName: "js_RegExp1" */ 'pages/js/RegExp1'),
    ],
    [
      'String',
      () => import(/* webpackChunkName: "js_String1" */ 'pages/js/String1'),
    ],
  ]),
  generateAppRoute('NodeJS', [
    [
      'Memory',
      () =>
        import(/* webpackChunkName: "node_Memory1" */ 'pages/nodejs/Memory1'),
    ],
  ]),
  generateAppRoute('Performance', [
    [
      'Memory',
      () =>
        import(
          /* webpackChunkName: "perf_Memory1" */ 'pages/performance/Memory1'
        ),
    ],
  ]),
  generateAppRoute('React', [
    [
      'Change Event',
      () =>
        import(
          /* webpackChunkName: "react_ChangeEvent1" */ 'pages/react/ChangeEvent1'
        ),
    ],
    [
      'Deployment',
      () =>
        import(
          /* webpackChunkName: "react_Deployment1" */ 'pages/react/Deployment1'
        ),
    ],
    [
      'Element',
      () =>
        import(/* webpackChunkName: "react_Element1" */ 'pages/react/Element1'),
    ],
    [
      'Event',
      () => import(/* webpackChunkName: "react_Event1" */ 'pages/react/Event1'),
    ],
    [
      'Jest',
      () => import(/* webpackChunkName: "react_Jest1" */ 'pages/react/Jest1'),
    ],
    [
      'Linter',
      () =>
        import(/* webpackChunkName: "react_Linter1" */ 'pages/react/Linter1'),
    ],
    [
      'Raw HTML',
      () =>
        import(/* webpackChunkName: "react_RawHtml1" */ 'pages/react/RawHtml1'),
    ],
    [
      'TypeScript',
      () =>
        import(
          /* webpackChunkName: "react_TypeScript1" */ 'pages/react/TypeScript1'
        ),
    ],
  ]),
  generateAppRoute('Security', [
    [
      'ReCaptcha',
      () =>
        import(
          /* webpackChunkName: "security_ReCaptcha1" */ 'pages/security/ReCaptcha1'
        ),
    ],
  ]),
  generateAppRoute('Tools', [
    [
      'Build',
      () => import(/* webpackChunkName: "tools_Build1" */ 'pages/tools/Build1'),
    ],
    [
      'Bundle Size',
      () =>
        import(
          /* webpackChunkName: "tools_BundleSize1" */ 'pages/tools/BundleSize1'
        ),
    ],
    [
      'Code Analysis',
      () =>
        import(
          /* webpackChunkName: "tools_CodeAnalysis1" */ 'pages/tools/CodeAnalysis1'
        ),
    ],
    [
      'Commit',
      () =>
        import(/* webpackChunkName: "tools_Commit1" */ 'pages/tools/Commit1'),
    ],
    [
      'Pre-Commit',
      () =>
        import(
          /* webpackChunkName: "tools_PreCommit1" */ 'pages/tools/PreCommit1'
        ),
    ],
    [
      'Release',
      () =>
        import(/* webpackChunkName: "tools_Release1" */ 'pages/tools/Release1'),
    ],
  ]),
  generateAppRoute('VS Code', [
    [
      'Emmets',
      () =>
        import(/* webpackChunkName: "code_Emmets1" */ 'pages/vs_code/Emmets1'),
    ],
    [
      'Extensions',
      () =>
        import(
          /* webpackChunkName: "code_Extensions1" */ 'pages/vs_code/Extensions1'
        ),
    ],
    [
      'Fonts',
      () =>
        import(/* webpackChunkName: "code_Fonts1" */ 'pages/vs_code/Fonts1'),
    ],
    [
      'Snippets',
      () =>
        import(
          /* webpackChunkName: "code_Snippets1" */ 'pages/vs_code/Snippets1'
        ),
    ],
    [
      'Tips',
      () => import(/* webpackChunkName: "code_Tips1" */ 'pages/vs_code/Tips1'),
    ],
  ]),
  generateAppRoute('Webpack', [
    [
      'TypeScript',
      () =>
        import(
          /* webpackChunkName: "webpack_TypeScript1" */ 'pages/webpack/TypeScript1'
        ),
    ],
  ]),
];

export default appRoutes;
