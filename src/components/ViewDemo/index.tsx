import React, { FC, memo } from 'react';
import { Link } from '@material-ui/core';
import { SimpleRouteInfo } from 'types/app-common';
import useStyles from './styles';

export const ViewDemoComponent: FC<ViewDemoProps> = ({
  route: { name, path },
}) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.root}
      color="secondary"
      href={path}
      target="_blank"
      variant="h6"
    >
      View Demo: {name}
    </Link>
  );
};

const ViewDemo = memo(ViewDemoComponent);
ViewDemo.displayName = 'ViewDemo';
export default ViewDemo;

export interface ViewDemoProps {
  route: SimpleRouteInfo;
}
