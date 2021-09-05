import { FC, memo } from 'react';
import { Link } from '@material-ui/core';
import { SimpleRouteInfo } from 'types/app-common';
import useStyles from './styles';

export const ViewDemoComponent: FC<ViewDemoProps> = ({
  route: { name, path },
  urlInfo,
}) => {
  const classes = useStyles();
  const url = new URL(path, window.location.origin);
  Object.assign(url, urlInfo);

  return (
    <Link
      className={classes.root}
      color="secondary"
      href={url.toString()}
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
  urlInfo?: UrlInfo;
}

export type UrlInfo = Partial<OmitFrom<URL, 'toJSON' | 'toString'>>;
