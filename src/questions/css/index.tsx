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
  {
    name: 'Flex Overflow',
    path: 'flex-overflow',
    component: lazy(() => import('questions/css/FlexOverflow1')),
  },
  {
    name: 'Clipping',
    path: 'clipping',
    component: lazy(() => import('questions/css/Clipping1')),
  },
  {
    name: 'Text Background',
    path: 'text-background',
    component: lazy(() => import('questions/css/TextBackground1')),
  },
  {
    name: 'Shapes',
    path: 'shapes',
    component: lazy(() => import('questions/css/Shapes1')),
  },
  {
    name: 'Replaced Elements',
    path: 'replaced-elements',
    component: lazy(() => import('questions/css/ReplacedElements1')),
  },
  {
    name: 'Content',
    path: 'content',
    component: lazy(() => import('questions/css/Content1')),
  },
];

export const CssTricksImpl: FC<CssTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="CSS Tricks" baseUrl={url} routes={routes} />
);

const CssTricks = memo(CssTricksImpl);
CssTricks.displayName = 'CssTricks';
export default CssTricks;

export type CssTricksProps = RouteComponentProps;
