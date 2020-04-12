import React, { FC, memo } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
  ListItemIcon,
} from '@material-ui/core';
import TipPage from 'components/TipPage';
import References from 'components/References';
import FontIcon from 'components/FontIcon';
import clsx from 'clsx';
import { extensions, references } from './utils';
import useStyles from './styles';

export const Extensions1Component: FC = () => {
  const classes = useStyles();

  return (
    <TipPage className={classes.root} title="VS Code: Extensions 1">
      <List dense>
        {extensions.map(({ author, highlyRecommended, name, url }) => (
          <ListItem key={`${name}-${author}`}>
            <ListItemIcon>
              <FontIcon
                className={clsx(classes.listIcon, { highlyRecommended })}
                color="primary"
                type={highlyRecommended ? 'star' : 'check'}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                url ? (
                  <Link className={classes.listPrimaryText} href={url}>
                    {name}
                  </Link>
                ) : (
                  <Typography className={classes.listPrimaryText}>
                    {name}
                  </Typography>
                )
              }
              secondary={<Typography variant="caption">{author}</Typography>}
            />
          </ListItem>
        ))}
      </List>

      <References references={references} />
    </TipPage>
  );
};

const Extensions1 = memo(Extensions1Component);
Extensions1.displayName = 'Extensions1';
export default Extensions1;
