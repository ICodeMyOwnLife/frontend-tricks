import React, { FC, memo, lazy } from 'react';
import QuestionGroup from 'components/QuestionGroup';
import { RouteComponentProps } from 'react-router';
import { RouteInfo } from 'helpers/routes';

const routes: RouteInfo[] = [
  {
    name: 'Excluded Input',
    path: 'excluded-input',
    component: lazy(() => import('questions/dom/ExcludedInput1')),
  },
  {
    name: 'AJAX Download',
    path: 'ajax-download',
    component: lazy(() => import('questions/dom/AjaxDownload1')),
  },
];

export const DomTricksImpl: FC<HtmlTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="HTML Tricks" baseUrl={url} routes={routes} />
);

const DomTricks = memo(DomTricksImpl);
DomTricks.displayName = 'DomTricks';
export default DomTricks;

export type HtmlTricksProps = RouteComponentProps;
