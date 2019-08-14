import React, { FC, memo, lazy } from 'react';
import QuestionGroup from 'components/QuestionGroup';
import { RouteComponentProps } from 'react-router';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Excluded Input',
    path: 'excluded-input',
    component: lazy(() => import('questions/html/ExcludedInput1')),
  },
];

export const HtmlTricksImpl: FC<HtmlTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="HTML Tricks" baseUrl={url} routes={routes} />
);

const HtmlTricks = memo(HtmlTricksImpl);
HtmlTricks.displayName = 'HtmlTricks';
export default HtmlTricks;

export type HtmlTricksProps = RouteComponentProps;
