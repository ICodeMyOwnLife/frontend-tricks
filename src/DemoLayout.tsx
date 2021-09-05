/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, memo, Suspense } from 'react';
import { Route } from 'react-router';
import demoRoutes from 'utils/routes/demoRoutes';

export const DemoLayoutComponent: FC = () => (
  <div>
    <Suspense fallback="Loading">
      {Object.entries(demoRoutes).map(([key, { name, ...props }]) => (
        <Route {...props} exact key={key} />
      ))}
    </Suspense>
  </div>
);

const DemoLayout = memo(DemoLayoutComponent);
DemoLayout.displayName = 'DemoLayout';
export default DemoLayout;
