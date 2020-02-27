import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const ResponsiveGridComponent: FC<ResponsiveGridProps> = ({
  className,
  gridClassName,
  title,
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(className, classes.responsiveGridContainer)}>
      <div className={classes.responsiveGridTitle}>{title}</div>
      <div className={clsx(gridClassName, classes.responsiveGrid)}>
        <div className={classes.responsiveGridColumn} />
        <div className={classes.responsiveGridColumn} />
        <div className={classes.responsiveGridColumn} />
      </div>
    </Box>
  );
};

const ResponsiveGrid = memo(ResponsiveGridComponent);
ResponsiveGrid.displayName = 'ResponsiveGrid';
export default ResponsiveGrid;

export interface ResponsiveGridProps {
  className?: string;
  gridClassName?: string;
  title: string;
}
