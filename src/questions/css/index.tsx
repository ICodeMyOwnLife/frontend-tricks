import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Newline',
    path: 'newline',
    component: lazy(() => import('questions/css/Newline1')),
  },
  {
    name: 'Text Ellipsis',
    path: 'text-ellipsis',
    component: lazy(() => import('questions/css/TextEllipsis1')),
  },
];

export const CssTricksImpl: FC<CssTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="CSS Tricks" baseUrl={url} routes={routes} />
);

const CssTricks = memo(CssTricksImpl);
CssTricks.displayName = 'CssTricks';
export default CssTricks;

export type CssTricksProps = RouteComponentProps;
