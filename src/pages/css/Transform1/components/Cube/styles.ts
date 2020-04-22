import { makeStyles, createStyles, fade } from '@material-ui/core';
import {
  grey,
  red,
  blue,
  green,
  yellow,
  purple,
  cyan,
} from '@material-ui/core/colors';

const opacity = 0.7;

const styles = () =>
  createStyles({
    root: ({ size }: CubeStylesProps) => ({
      position: 'relative',
      width: size,
      height: size,
      transformStyle: 'preserve-3d',
      perspective: '120rem',
    }),
    face: ({ backfaceHidden }) => ({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 32,
      color: grey[900],
      backfaceVisibility: backfaceHidden ? 'hidden' : 'visible',
    }),
    face1: ({ size }) => ({
      backgroundColor: fade(red[400], opacity),
      transform: `translateZ(${size / 2}px)`,
    }),
    face2: ({ size }) => ({
      backgroundColor: fade(blue[400], opacity),
      transform: `translateX(${-size / 2}px) rotateY(-90deg)`,
    }),
    face3: ({ size }) => ({
      backgroundColor: fade(green[400], opacity),
      transform: `translateZ(${-size / 2}px) rotateY(180deg)`,
    }),
    face4: ({ size }) => ({
      backgroundColor: fade(yellow[400], opacity),
      transform: `translateX(${size / 2}px) rotateY(90deg)`,
    }),
    face5: ({ size }) => ({
      backgroundColor: fade(cyan[400], opacity),
      transform: `translateY(${-size / 2}px) rotateX(90deg)`,
    }),
    face6: ({ size }) => ({
      backgroundColor: fade(purple[400], opacity),
      transform: `translateY(${size / 2}px) rotateX(-90deg)`,
    }),
  });

const useStyles = makeStyles(styles, { name: 'Cube' });

export default useStyles;

export interface CubeStylesProps {
  backfaceHidden: boolean;
  size: number;
}
