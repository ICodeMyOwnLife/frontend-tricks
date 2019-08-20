import React, { FC, memo } from 'react';
import { ImagePreview } from '.';
import { useImageObjectUrl } from './hooks';
import { defaultSupportedFileTypes } from './constants';
import { UrlImagePreviewProps } from './types';

export const ObjectUrlImagePreviewImpl: FC<UrlImagePreviewProps> = ({
  className,
  imageClassName,
  errorClassName,
  files,
  supportedFileTypes = defaultSupportedFileTypes,
}) => {
  const { src, error, imgRef } = useImageObjectUrl({
    files,
    supportedFileTypes,
  });

  return (
    <ImagePreview
      className={className}
      imageClassName={imageClassName}
      errorClassName={errorClassName}
      src={src}
      error={error}
      imgRef={imgRef}
    />
  );
};

const ObjectUrlImagePreview = memo(ObjectUrlImagePreviewImpl);
ObjectUrlImagePreview.displayName = 'ObjectUrlImagePreview';
export default ObjectUrlImagePreview;
