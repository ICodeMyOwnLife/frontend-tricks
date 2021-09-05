import { FC, memo, ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useTitle } from 'cb-hooks';
import { APP_NAME } from 'constants/common';
import useStyles from './styles';

export const PageLayoutComponent: FC<PageLayoutProps> = ({
  className,
  title,
  children,
}) => {
  const classes = useStyles();
  useTitle(`${title} - Page - ${APP_NAME}`);

  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="h3">{title}</Typography>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const PageLayout = memo(PageLayoutComponent);
PageLayout.displayName = 'PageLayout';
export default PageLayout;

export interface PageLayoutProps {
  className?: string;
  title: string;
  children?: ReactNode;
}
