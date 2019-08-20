import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { ImagePreviewProps } from './types';
import classes from './styles.module.scss';

export const ImagePreviewImpl: FC<ImagePreviewProps> = ({
  className,
  imageClassName,
  errorClassName,
  src,
  error,
  imgRef,
}) => (
  <div
    className={classnames(classes.ImagePreview, className)}
    hidden={!src && !error}
  >
    <p className={classnames(classes.Error, errorClassName)} hidden={!error}>
      {error}
    </p>

    <img
      ref={imgRef}
      className={classnames(classes.Image, imageClassName)}
      src={src}
      alt="Preview"
      hidden={!src}
    />
  </div>
);

const ImagePreview = memo(ImagePreviewImpl);
ImagePreview.displayName = 'ImagePreview';
export default ImagePreview;
