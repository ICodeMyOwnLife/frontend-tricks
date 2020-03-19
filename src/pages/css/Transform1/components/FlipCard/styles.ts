import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      cursor: 'pointer',
      perspective: '40rem',

      '&:focus': {
        boxShadow: 'none',
        outline: 'none',
      },
    },
    body: {
      display: 'flex',
      flex: 1,
      transformStyle: 'preserve-3d',
      MozTransformStyle: 'preserve-3d',
      WebkitTransformStyle: 'preserve-3d',
      transition: `transform 400ms ease`,

      '$root:hover &, $root:focus &': {
        transform: `rotateX(180deg)`,
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100%',
      color: grey[900],
      padding: spacing(3),
      background: grey[50],
      borderRadius: 8,
      backfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      boxShadow: `3px 3px 5px 0 ${fade(grey[400], 0.43)}`,
    },
    front: {},
    back: {
      transform: `rotateX(-180deg) translateX(-100%)`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'FlipCard' });

export default useStyles;
