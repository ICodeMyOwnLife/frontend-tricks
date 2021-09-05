import { FC, memo } from 'react';
import { Box } from '@material-ui/core';

export const DiagonalLayoutComponent: FC = () => (
  <Box>
    <div />
  </Box>
);

const DiagonalLayout = memo(DiagonalLayoutComponent);
DiagonalLayout.displayName = 'DiagonalLayout';
export default DiagonalLayout;
