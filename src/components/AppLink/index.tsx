import { forwardRef, FC, memo } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { Link as MuiLink } from '@material-ui/core';
import { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

export const ForwardRefRouterLink = forwardRef<
  HTMLAnchorElement,
  RouterLinkProps
>((props, ref) => <RouterLink innerRef={ref} {...props} />);

ForwardRefRouterLink.displayName = 'ForwardRefRouterLink';

export const AppLinkComponent: FC<AppLinkProps> = props => (
  <MuiLink component={ForwardRefRouterLink} {...props} />
);

const AppLink = memo(AppLinkComponent);
AppLink.displayName = 'AppLink';
export default AppLink;

export type AppLinkProps = OmitFrom<RouterLinkProps, 'innerRef'> & MuiLinkProps;
