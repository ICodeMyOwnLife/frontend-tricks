import React, { FC, memo, ReactNode } from 'react';
import Button from 'components/Button';
import {
  DownloadFileFunction,
  SaveFileFunction,
  useHandleDynamicDownload,
} from './hooks';

export const DynamicDownloadButtonImpl: FC<DynamicDownloadButtonProps> = ({
  className,
  count,
  downloadFile,
  saveFile,
  children,
}) => {
  const handleDownload = useHandleDynamicDownload({
    count,
    downloadFile,
    saveFile,
  });

  return (
    <Button className={className} onClick={handleDownload}>
      {children}
    </Button>
  );
};

const DynamicDownloadButton = memo(DynamicDownloadButtonImpl);
DynamicDownloadButton.displayName = 'DynamicDownloadButton';
export default DynamicDownloadButton;

export interface DynamicDownloadButtonProps {
  className?: string;
  count: number;
  downloadFile: DownloadFileFunction;
  saveFile: SaveFileFunction;
  children?: ReactNode;
}
