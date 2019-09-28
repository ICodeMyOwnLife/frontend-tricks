import React, { FC, memo, lazy } from 'react';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';
import { RouteComponentProps } from 'react-router';

const routes: RouteInfo[] = [
  {
    name: 'Languages',
    path: 'languages',
    component: lazy(() => import('questions/webpack/Languages1')),
  },
];

export const WebpackTricksComponent: FC<WebpackTricksProps> = ({
  match: { url },
}) => <QuestionGroup title="Webpack Tricks" baseUrl={url} routes={routes} />;

const WebpackTricks = memo(WebpackTricksComponent);
WebpackTricks.displayName = 'WebpackTricks';
export default WebpackTricks;

export type WebpackTricksProps = RouteComponentProps;
