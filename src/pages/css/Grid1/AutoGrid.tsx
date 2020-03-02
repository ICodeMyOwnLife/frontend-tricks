import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';

export const AutoGridComponent: FC = () => <Box />;

const AutoGrid = memo(AutoGridComponent);
AutoGrid.displayName = 'AutoGrid';
export default AutoGrid;
