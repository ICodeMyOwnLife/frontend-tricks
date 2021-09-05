import { FC, memo } from 'react';
import clsx from 'clsx';
import PreviewContainer from './PreviewContainer';
import { PreviewProps } from './types';
import useStyles from './styles';

export const CommonPreviewComponent: FC<PreviewProps> = ({
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
      <iframe
        className={clsx(classes.Preview, previewClassName)}
        title={title}
        src={src}
        onLoad={onLoad}
      />
    </PreviewContainer>
  );
};

const CommonPreview = memo(CommonPreviewComponent);
CommonPreview.displayName = 'CommonPreview';
export default CommonPreview;
