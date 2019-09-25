import React, { FC, memo } from 'react';
import QuestionGroup from 'components/QuestionGroup';
import { RouteComponentProps } from 'react-router';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [];

export const NodeJsTricksComponent: FC<NodeJsTricksProps> = ({
  match: { url },
}) => <QuestionGroup title="NodeJS Tricks" baseUrl={url} routes={routes} />;

const NodeJsTricks = memo(NodeJsTricksComponent);
NodeJsTricks.displayName = 'NodeJsTricks';
export default NodeJsTricks;

export type NodeJsTricksProps = RouteComponentProps;
