import React, { FC, memo } from 'react';
import { RouteInfo, renderLinks } from 'helpers/routes';
import classes from './styles.module.scss';

export const NavImpl: FC<NavProps> = ({ baseUrl, routes }) => (
  <nav className={classes.Nav}>{renderLinks(baseUrl, routes)}</nav>
);

const Nav = memo(NavImpl);
Nav.displayName = 'Nav';
export default Nav;

export interface NavProps {
  baseUrl: string;
  routes: RouteInfo[];
}
