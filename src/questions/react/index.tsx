import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Raw HTML',
    path: 'raw-html',
    component: lazy(() => import('questions/react/RawHtml1')),
  },
  {
    name: 'Event',
    path: 'event',
    component: lazy(() => import('questions/react/Event1')),
  },
  {
    name: 'Element',
    path: 'element',
    component: lazy(() => import('questions/react/Element1')),
  },
  {
    name: 'TypeScript',
    path: 'typescript',
    component: lazy(() => import('questions/react/TypeScript1')),
  },
  {
    name: 'Bundle Size',
    path: 'bundle-size',
    component: lazy(() => import('questions/react/BundleSize1')),
  },
  {
    name: 'Deployment',
    path: 'deployment',
    component: lazy(() => import('questions/react/Deployment1')),
  },
];

export const ReactTricksImpl: FC<ReactTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="React Tricks" baseUrl={url} routes={routes} />
);

const ReactTricks = memo(ReactTricksImpl);
ReactTricks.displayName = 'ReactTricks';
export default ReactTricks;

export type ReactTricksProps = RouteComponentProps;
