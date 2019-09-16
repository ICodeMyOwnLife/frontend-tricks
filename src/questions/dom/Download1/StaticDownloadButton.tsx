import React, { FC, memo, ReactNode } from 'react';
import Button from 'components/Button';
import {
  DownloadFileFunction,
  SaveFileFunction,
  useHandleStaticDownload,
} from './hooks';

export const StaticDownloadButtonImpl: FC<StaticDownloadButtonProps> = ({
  className,
  url,
  downloadFile,
  saveFile,
  children,
}) => {
  const handleDownload = useHandleStaticDownload({
    url,
    downloadFile,
    saveFile,
  });

  return (
    <Button className={className} onClick={handleDownload}>
      {children}
    </Button>
  );
};

const StaticDownloadButton = memo(StaticDownloadButtonImpl);
StaticDownloadButton.displayName = 'StaticDownloadButton';
export default StaticDownloadButton;

export interface StaticDownloadButtonProps {
  className?: string;
  url: string;
  downloadFile: DownloadFileFunction;
  saveFile: SaveFileFunction;
  children?: ReactNode;
}
