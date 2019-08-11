import React, { FC, memo, ReactNode } from 'react';
import Nav from 'components/Nav';
import { RouteInfo, renderRoutes } from 'helpers/routes';
import classes from './styles.module.scss';

export const QuestionGroupImpl: FC<QuestionGroupProps> = ({
  title,
  baseUrl = '',
  routes,
  children,
}) => (
  <div className={classes.Container}>
    <h1 className={classes.Title}>{title}</h1>
    <Nav baseUrl={baseUrl} routes={routes} />
    {renderRoutes(baseUrl, routes)}
    {children}
  </div>
);

const QuestionGroup = memo(QuestionGroupImpl);
QuestionGroup.displayName = 'QuestionGroup';
export default QuestionGroup;

export interface QuestionGroupProps {
  title: string;
  baseUrl?: string;
  routes: RouteInfo[];
  children?: ReactNode;
}
