import React, { memo, FC } from 'react';
import {
  ListItem,
  ListItemText,
  Collapse,
  List,
  useTheme,
} from '@material-ui/core';
import { useToggle } from 'cb-hooks';
import { ForwardRefRouterLink } from 'components/AppLink';
import { LinkInfo } from 'types/app-common';
import useStyles from './styles';

export const NestableLinkItemComponent: FC<NestableLinkItemProps> = ({
  name,
  path,
  nestedLevel,
  pathname,
  childRoutes,
}) => {
  const classes = useStyles();
  const [open, toggleOpen] = useToggle(false);
  const theme = useTheme();
  const paddingLeft = `${theme.spacing(3 + 1.5 * nestedLevel)}px`;

  return childRoutes ? (
    <>
      <ListItem button onClick={toggleOpen} style={{ paddingLeft }}>
        <ListItemText classes={{ primary: classes.Title }} primary={name} />
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List classes={{ padding: classes.ListPadding }}>
          {childRoutes.map(props => (
            <NestableLinkItemComponent
              key={props.path}
              nestedLevel={nestedLevel + 1}
              pathname={pathname}
              {...props}
            />
          ))}
        </List>
      </Collapse>
    </>
  ) : (
    <ListItem
      button
      classes={{ selected: classes.SelectedLinkItem }}
      component={ForwardRefRouterLink}
      to={path}
      selected={!pathname.localeCompare(path)}
      style={{ paddingLeft }}
    >
      <ListItemText primary={name} />
    </ListItem>
  );
};

export interface NestableLinkItemProps extends LinkInfo {
  childRoutes?: LinkInfo[];
  pathname: string;
  nestedLevel: number;
}

const NestableLinkItem = memo(NestableLinkItemComponent);
NestableLinkItem.displayName = 'NestableLinkItem';
export default NestableLinkItem;
