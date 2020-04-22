import React, { FC, memo } from 'react';
import Button from '@material-ui/core/Button';
import { Spin } from 'cb-ui-fun';

export const PlaygroundComponent: FC = () => (
  <div>
    <Button color="secondary" variant="contained">
      Test
    </Button>
    <Spin loading />
  </div>
);

const Playground = memo(PlaygroundComponent);
Playground.displayName = 'Playground';
export default Playground;
