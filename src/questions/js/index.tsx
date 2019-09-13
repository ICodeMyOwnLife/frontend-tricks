import React, { FC, memo, lazy } from 'react';
import QuestionGroup from 'components/QuestionGroup';
import { RouteComponentProps } from 'react-router';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Array',
    path: 'array',
    component: lazy(() => import('questions/js/Array1')),
  },
];

export const JsTricksImpl: FC<JsTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="JS Tricks" baseUrl={url} routes={routes} />
);

const JsTricks = memo(JsTricksImpl);
JsTricks.displayName = 'JsTricks';
export default JsTricks;

export type JsTricksProps = RouteComponentProps;
