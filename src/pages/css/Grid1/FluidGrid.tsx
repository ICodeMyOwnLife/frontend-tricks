import { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

const itemCount = 128;

export const FluidGridComponent: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.fluidGrid}>
      {Array.from({ length: itemCount }, (_, index) => (
        <div
          className={clsx(classes.gridCell, classes.fluidGridCell)}
          key={index}
        >
          {index}
        </div>
      ))}
    </Box>
  );
};

const FluidGrid = memo(FluidGridComponent);
FluidGrid.displayName = 'FluidGrid';
export default FluidGrid;
