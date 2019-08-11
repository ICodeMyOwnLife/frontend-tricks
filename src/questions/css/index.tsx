import React, { FC, memo, lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionGroup from 'components/QuestionGroup';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Newline 1',
    path: 'newline-1',
    component: lazy(() => import('questions/css/Newline1')),
  },
  {
    name: 'Text Ellipsis 1',
    path: 'text-ellipsis-1',
    component: lazy(() => import('questions/css/TextEllipsis1')),
  },
];

export const CssTricksImpl: FC<CssTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="CSS" baseUrl={url} routes={routes} />
);

const CssTricks = memo(CssTricksImpl);
CssTricks.displayName = 'CssTricks';
export default CssTricks;

export type CssTricksProps = RouteComponentProps;
