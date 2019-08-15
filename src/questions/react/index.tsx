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
];

export const ReactTricksImpl: FC<ReactTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="React Tricks" baseUrl={url} routes={routes} />
);

const ReactTricks = memo(ReactTricksImpl);
ReactTricks.displayName = 'ReactTricks';
export default ReactTricks;

export type ReactTricksProps = RouteComponentProps;
