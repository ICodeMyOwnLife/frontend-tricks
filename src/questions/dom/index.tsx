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
    name: 'Download',
    path: 'download',
    component: lazy(() => import('questions/dom/Download1')),
  },
  {
    name: 'File Input',
    path: 'file-input',
    component: lazy(() => import('questions/dom/FileInput1')),
  },
  {
    name: 'Live Edit',
    path: 'live-edit',
    component: lazy(() => import('questions/dom/LiveEdit1')),
  },
];

export const DomTricksImpl: FC<HtmlTricksProps> = ({ match: { url } }) => (
  <QuestionGroup title="DOM Tricks" baseUrl={url} routes={routes} />
);

const DomTricks = memo(DomTricksImpl);
DomTricks.displayName = 'DomTricks';
export default DomTricks;

export type HtmlTricksProps = RouteComponentProps;
