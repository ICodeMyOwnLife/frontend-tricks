import React, { FC, memo } from 'react';
import { ImagePreview } from '.';
import { useImageDataUrl } from './hooks';
import { defaultSupportedFileTypes } from './constants';
import { UrlImagePreviewProps } from './types';

export const DataUrlImagePreviewImpl: FC<UrlImagePreviewProps> = ({
  className,
  imageClassName,
  errorClassName,
  files,
  supportedFileTypes = defaultSupportedFileTypes,
}) => {
  const { src, error } = useImageDataUrl({ files, supportedFileTypes });

  return (
    <ImagePreview
      className={className}
      imageClassName={imageClassName}
      errorClassName={errorClassName}
      src={src}
      error={error}
    />
  );
};

const DataUrlImagePreview = memo(DataUrlImagePreviewImpl);
DataUrlImagePreview.displayName = 'DataUrlImagePreview';
export default DataUrlImagePreview;
