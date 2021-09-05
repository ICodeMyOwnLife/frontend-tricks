import { FC, memo, ImgHTMLAttributes } from 'react';
import { Box, Button } from '@material-ui/core';
import { useHandleCopy } from './utils';
import useStyles from './styles';

export const ImageShowComponent: FC<ImageShowProps> = ({
  alt,
  src,
  ...props
}) => {
  const classes = useStyles();
  const handleCopy = useHandleCopy({ src });

  return (
    <Box className={classes.imageShow}>
      <img {...props} alt={alt} className={classes.showedImage} src={src} />
      <Button
        className={classes.copyButton}
        color="secondary"
        onClick={handleCopy}
        variant="contained"
      >
        Copy Image
      </Button>
    </Box>
  );
};

const ImageShow = memo(ImageShowComponent);
ImageShow.displayName = 'ImageShow';
export default ImageShow;

export interface ImageShowProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}
