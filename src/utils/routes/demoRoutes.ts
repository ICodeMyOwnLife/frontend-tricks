import { createSimpleRouteGenerator } from './common';

const generateDemoRoute = createSimpleRouteGenerator('/demo');

const demoRoutes = {
  fullPageScrollSnapping: generateDemoRoute('Full Page Scroll Snapping', () =>
    import(
      /* webpackChunkName: "demo_css_FullPageScrollSnapping" */ 'demo/css/FullPageScrollSnapping'
    ),
  ),
};

export default demoRoutes;
