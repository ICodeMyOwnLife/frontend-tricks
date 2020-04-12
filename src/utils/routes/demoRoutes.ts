import { createSimpleRouteGenerator } from './common';

const generateDemoRoute = createSimpleRouteGenerator('/demo');

const demoRoutes = {
  fullPageScrollSnapping: generateDemoRoute('Full Page Scroll Snapping', () =>
    import(
      /* webpackChunkName: "demo_FullPageScrollSnapping" */ 'demo/FullPageScrollSnapping'
    ),
  ),
  scrollTarget: generateDemoRoute('Scroll Target', () =>
    import(/* webpackChunkName: "demo_ScrollTarget" */ 'demo/ScrollTarget'),
  ),
};

export default demoRoutes;
