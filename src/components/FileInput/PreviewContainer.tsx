import { FC, memo } from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { PreviewContainerProps } from './types';
import useStyles from './styles';

export const PreviewContainerComponent: FC<PreviewContainerProps> = ({
  className,
  errorClassName,
  error,
  hidden,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.PreviewContainer, className)} hidden={hidden}>
      <Typography className={errorClassName} variant="subtitle1" color="error">
        {error}
      </Typography>
      {children}
    </Box>
  );
};

const PreviewContainer = memo(PreviewContainerComponent);
PreviewContainer.displayName = 'PreviewContainer';
export default PreviewContainer;
