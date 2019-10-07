import React, { FC, memo, ReactNode } from 'react';
import classes from './styles.module.scss';

export const QuestionGroupImpl: FC<QuestionGroupProps> = ({
  title,
  children,
}) => (
  <div className={classes.Container}>
    <h1 className={classes.Title}>{title}</h1>
    {children}
  </div>
);

const QuestionGroup = memo(QuestionGroupImpl);
QuestionGroup.displayName = 'QuestionGroup';
export default QuestionGroup;

export interface QuestionGroupProps {
  title: string;
  children?: ReactNode;
}
