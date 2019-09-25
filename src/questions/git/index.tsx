import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Pre-Commit',
    path: 'pre-commit',
    component: lazy(() => import('questions/git/PreCommit1')),
  },
];

export const GitTricksComponent: FC<GitTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="Git Tricks" baseUrl={url} routes={routes} />
);

const GitTricks = memo(GitTricksComponent);
GitTricks.displayName = 'GitTricks';
export default GitTricks;

export type GitTricksProps = RouteComponentProps;
