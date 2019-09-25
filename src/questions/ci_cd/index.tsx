import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'GitLab',
    path: 'gitlab',
    component: lazy(() => import('questions/ci_cd/GitLab1')),
  },
];

export const CiCdTricksComponent: FC<CiCdTricksProps> = ({
  match: { url },
}) => <QuestionGroup title="CI/CD Tricks" baseUrl={url} routes={routes} />;

const CiCdTricks = memo(CiCdTricksComponent);
CiCdTricks.displayName = 'CiCdTricks';
export default CiCdTricks;

export type CiCdTricksProps = RouteComponentProps;
