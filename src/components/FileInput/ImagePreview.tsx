import React, { FC, memo } from 'react';
import clsx from 'clsx';
import PreviewContainer from './PreviewContainer';
import { PreviewProps } from './types';
import useStyles from './styles';

export const ImagePreviewImpl: FC<PreviewProps> = ({
  className,
  previewClassName,
  src,
  error,
  errorClassName,
  title,
  onLoad,
}) => {
  const classes = useStyles();

  return (
    <PreviewContainer
      className={className}
      error={error}
      errorClassName={errorClassName}
      hidden={!src && !error}
    >
      <img
        className={clsx(classes.Preview, previewClassName)}
        src={src}
        alt={title}
        onLoad={onLoad}
      />
    </PreviewContainer>
  );
};

const ImagePreview = memo(ImagePreviewImpl);
ImagePreview.displayName = 'ImagePreview';
export default ImagePreview;
