import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { usePdfIframe } from './hooks';
import classes from './styles.module.scss';

export const PdfPreviewImpl: FC<PdfPreviewProps> = ({
  className,
  pdfClassName,
  files,
}) => {
  const { src, iframeRef } = usePdfIframe({ files });

  return (
    <div className={classnames(classes.PdfPreview, className)} hidden={!src}>
      <iframe
        ref={iframeRef}
        className={classnames(classes.pdf, pdfClassName)}
        title="PDF Preview"
        frameBorder={0}
        hidden={!src}
      />
    </div>
  );
};

const PdfPreview = memo(PdfPreviewImpl);
PdfPreview.displayName = 'PdfPreview';
export default PdfPreview;

export interface PdfPreviewProps {
  className?: string;
  pdfClassName?: string;
  files: FileList | null | undefined;
}
