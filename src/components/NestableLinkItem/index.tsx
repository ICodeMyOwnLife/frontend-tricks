/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, FC } from 'react';
import { ListItem, ListItemText, Collapse, List } from '@material-ui/core';
import { ForwardRefRouterLink } from 'components/AppLink';
import useToggle from 'hooks/useToggle';
import { LinkInfo } from 'types/app-common';

export const NestableLinkItemComponent: FC<NestableLinkItemProps> = ({
  name,
  path,
  childRoutes,
}) => {
  const [open, toggleOpen] = useToggle(false);

  return childRoutes ? (
    <>
      <ListItem button onClick={toggleOpen}>
        <ListItemText primary={name} />
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List>
          {childRoutes.map(props => (
            <NestableLinkItemComponent key={props.path} {...props} />
          ))}
        </List>
      </Collapse>
    </>
  ) : (
    <ListItem button component={ForwardRefRouterLink} to={path}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export interface NestableLinkItemProps extends LinkInfo {
  childRoutes?: LinkInfo[];
}

const NestableLinkItem = memo(NestableLinkItemComponent);
NestableLinkItem.displayName = 'NestableLinkItem';
export default NestableLinkItem;
