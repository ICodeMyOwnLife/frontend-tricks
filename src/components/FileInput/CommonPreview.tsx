import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import { useObjectUrl } from './hooks';
import useStyles from './styles';

export const CommonPreviewComponent: FC<CommonPreviewProps> = ({
  className,
  previewClassName,
  title,
  files,
}) => {
  const classes = useStyles();
  const { src, cleanupCallback } = useObjectUrl({ files });

  return (
    <Box className={clsx(classes.IframePreview, className)}>
      <iframe
        className={previewClassName}
        title={title}
        src={src}
        hidden={!src}
        onLoad={cleanupCallback}
      />
    </Box>
  );
};

const CommonPreview = memo(CommonPreviewComponent);
CommonPreview.displayName = 'CommonPreview';
export default CommonPreview;

export interface CommonPreviewProps {
  className?: string;
  previewClassName?: string;
  title: string;
  files: FileList | null | undefined;
}
