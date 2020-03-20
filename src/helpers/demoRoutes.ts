import { lazy } from 'react';

const demoRoutes = {
  fullPageScrollSnapping: {
    name: 'Full Page Scroll Snapping',
    path: '/demo/css/full-page-scroll-snapping',
    component: lazy(() =>
      import(
        /* webpackChunkName: "demo_css_FullPageScrollSnapping" */ 'demo/css/FullPageScrollSnapping'
      ),
    ),
  },
};

export default demoRoutes;
