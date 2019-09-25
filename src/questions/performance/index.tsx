import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Memory',
    path: 'memory',
    component: lazy(() => import('questions/performance/Memory1')),
  },
];

export const PerformanceTricksComponent: FC<PerformanceTricksProps> = ({
  match: { url },
}) => (
  <QuestionGroup title="Performance Tricks" baseUrl={url} routes={routes} />
);

const PerformanceTricks = memo(PerformanceTricksComponent);
PerformanceTricks.displayName = 'PerformanceTricks';
export default PerformanceTricks;

export type PerformanceTricksProps = RouteComponentProps;
