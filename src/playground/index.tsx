import React, { FC, memo } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

export const PlaygroundComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="secondary" variant="contained">
        Test
      </Button>
    </div>
  );
};

const Playground = memo(PlaygroundComponent);
Playground.displayName = 'Playground';
export default Playground;
