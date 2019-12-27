import React, { FC, memo, ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const PageLayoutComponent: FC<PageLayoutProps> = ({
  className,
  title,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)}>
      <Typography variant="h3">{title}</Typography>
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
};

const PageLayout = memo(PageLayoutComponent);
PageLayout.displayName = 'PageLayout';
export default PageLayout;

export interface PageLayoutProps {
  className?: string;
  title: string;
  children: ReactNode;
}
